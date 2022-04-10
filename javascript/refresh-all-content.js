async function go() {
	// Obtain SHA from current commit
	const compareSha = process.env.GITHUB_SHA;

	const response = await new Promise((resolve, reject) => {
		// Make sure to refresh all content and send the current commit SHA
		const postDataString = JSON.stringify({
			refreshAll: true,
			sha: compareSha,
		});

		// All content refreshing goes through refresh-content.ts
		const searchParams = new URLSearchParams([
			['_data', 'routes/_content/refresh-content'],
		]);

		// Set request options to our instance in fly.dev
		const options = {
			hostname: `${process.env.FLY_APP_NAME}.fly.dev`,
			port: 443,
			path: `/_content/refresh-content?${searchParams}`,
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

	console.info('Content refreshed 🚀', { response });
}

go().catch((error) => {
	console.error(error);
});
