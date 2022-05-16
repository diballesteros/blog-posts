---
title: JavaScript LeetCode Best Time to Buy and Sell Stock
date: 2022-05-16
published: true
description: How to solve the LeetCode problem Best Time to Buy and Sell stock using JavaScript. Solved with brute force and a greedy algorithm.
categories:
    - dsa
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1652017295987/HA_2pgTM5.png
---

### Prompt

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

**Example 1:**

```text
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

### Analyzing the problem

As with the previous problems the first apparent solution is to go for the brute force solution. Here we would iterate over the array twice checking every subtraction between every subsequent value and just grab the highest profit.

A visual example of this could look like this:

![JavaScript LeetCode Best Time to buy and sell stock](https://cdn.hashnode.com/res/hashnode/image/upload/v1652664600912/C-LyYbNTG.png)

### First solution

Let's go ahead and write out the code for what we mentioned above.

```js
function maxProfit(prices) {
	let profit = 0;
	for (let i = 0; i < prices.length - 1; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			const currentProfit = prices[j] - prices[i];

			if (currentProfit > profit) {
				profit = currentProfit;
			}
		}
	}

	return profit;
}
```

Here we compare the price of the next element in the array with the current. The best way to conceptualize this is that `i` is our index and `j` is our pointer that keeps iterating.

We use two `for` loops to find the maximum profit. This will have a complexity of O(n^2). This is a pretty big problem as it is very slow! However, we can optimize this by iterating over the array only once.

### Second Solution

But what would a single iteration look like?

With code it would look something like this:

```js
var maxProfit = function (prices) {
	let profit = 0;

	let stockToBuy = prices[0];

	for (let i = 1; i < prices.length; i++) {
		if (stockToBuy > prices[i]) {
			stockToBuy = prices[i];
		}

		const currentProfit = prices[i] - stockToBuy;

		if (currentProfit > profit) {
			profit = currentProfit;
		}
	}

	return profit;
};
```

We grab the initial `stockToBuy` from the first element in the array. Then we can begin iterating over the array (skipping the first). We compare if the next stock is of a higher price than our currently selected stock. If so it’ll yield us a higher profit so we switch it out.

However, this also serves as a reset mechanism. If the stock is of a higher value we know that from this point forward it will not be higher profit than if it was with the previously selected stock.

```js
stockToBuy = prices[i];
```

After that, we calculate our new `currentProfit`, this is just a temporary value in our current iteration.

```js
const currentProfit = prices[i] - stockToBuy;
```

Then we compare it with the value we saved outside of our `for` loop. If it's higher then that's exactly what we want.

Notice we created the variable with `0` at first so that if we don’t find any profit we can just return it as is.

#### Greedy Algorithm

But what is this called?

What we’re doing here is selecting the best option on every iteration and forgetting about past selections This is called a greedy algorithm.

Here's a [Wikipedia article](https://en.wikipedia.org/wiki/Greedy_algorithm) if you want to read up more on it (you should).

### Let's connect

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
