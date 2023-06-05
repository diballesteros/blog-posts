const { getChangedFiles, fetchJSON } = require('./utils');

async function go() {
	const compareSha = process.env.GITHUB_SHA;
	http = require('https');

	const shaInfo = await fetchJSON({
		url: `https://${process.env.FLY_APP_NAME}.fly.dev/refresh-content.json`,
	});
	let sha = shaInfo?.sha;

	// if (!sha) {
	// 	const buildInfo = await fetchJSON({
	// 		url: `https://${process.env.FLY_APP_NAME}.fly.dev/build/info.json`,
	// 	});
	// 	sha = buildInfo.data.sha;
	// }

	if (!sha) {
		console.error('Not sure what to refresh 🤷🏻‍♂️');
		return;
	}

	const changedFiles = getChangedFiles(sha, compareSha) ?? [];

	const contentPaths = changedFiles
		.filter(({ filename }) => filename.endsWith('md'))
		.map(({ filename }) => filename);

	if (contentPaths && contentPaths.length > 0) {
		console.error('Refreshing the following content', {
			currentSHA: compareSha,
			sha,
			contentPaths,
		});

		const response = await new Promise((resolve, reject) => {
			// Send the paths of the files to update and send the current commit SHA
			const postDataString = JSON.stringify({
				paths: contentPaths,
				sha: compareSha,
			});

			// All content refreshing goes through refresh-content.ts
			const searchParams = new URLSearchParams([
				['_data', '/refresh-content'],
			]);

			// Set request options to our instance in fly.dev
			const options = {
				hostname: `${process.env.FLY_APP_NAME}.fly.dev`,
				port: 443,
				path: `/refresh-content?${searchParams}`,
				method: 'POST',
				headers: {
					auth: process.env.REFRESH_TOKEN,
					'content-type': 'application/json',
					'content-length': Buffer.byteLength(postDataString),
				},
			};

			// Send Request
			try {
				const req = http.request(options, (res) => {
					let data = '';

					res.on('data', (chunk) => {
						data += chunk;
					});
					res.on('end', () => {
						try {
							resolve(JSON.parse(data));
						} catch (e) {
							console.error('Error!', err.message);
							reject(data);
						}
					});
					res.on('error', (err) => {
						console.error('Error!', err.message);
						reject(ree);
					});
				});
				req.write(postDataString);
				req.end();
			} catch (e) {
				console.error('Error!', e.message);
				reject(e);
			}
		});

		console.info('Content updated from commit 🐱‍👤', { response });
	} else {
		console.info('No updates detected 🤔');
	}
}

go().catch((error) => {
	console.error(error);
});
