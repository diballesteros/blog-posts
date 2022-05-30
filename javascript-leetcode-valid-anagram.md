---
title: JavaScript LeetCode Valid Anagram
date: 2022-05-30
published: true
description: How to solve the LeetCode problem Valid Anagram using JavaScript. Solved with a hash table.
categories:
    - dsa
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1652017295987/HA_2pgTM5.png
---

#### Prompt

Given two strings `s` and `t`, return `true` *if* `t` *is an anagram of* `s`*, and* `false` *otherwise*.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```text
Input: s = "anagram", t = "nagaram"
Output: true
```

### Analyzing the problem

Let's this of what the problem is asking. We have to know the contents of the strings we're analyzing. We also have to make sure that we're keeping track of the letters as they should be exactly the same to confirm that it is an **anagram**.

Following that train of thought, we can early return if there is ever a difference in the letters they contain. But what does it mean to have the same letters? Well, essentially it's mapping out the frequency of each letter for the first word we iterate over. When we iterate over the second word we can double-check with what.

Checking back on the first example provided we can visualize this by counting each letter:

![JavaScript Leetcode valid anagram](https://cdn.hashnode.com/res/hashnode/image/upload/v1653911095217/WQs1bzQ1i.png)

Looking at the counts we can use this to validate in place as we iterate over the second word. Let's see how this would look:

![javascript leetcode](https://cdn.hashnode.com/res/hashnode/image/upload/v1653911387569/kfP3d-hSb.png)

So the first time we run into the `n` in the second iteration we subtract it from the count. Anytime we go below `0` then we know the words are **not** valid anagrams.

Cool 😎, let's get to coding.

### The solution

Similar to our [last problem](https://relatablecode.com/javascript-leetcode-best-time-to-buy-and-sell-stock) we can use a hash table

```js
var isAnagram = function (s, t) {
	if (s.length != t.length) return false;
	const hashTable = {};

	for (let i = 0; i < s.length; i++) {
		if (!hashTable[s[i]]) {
			hashTable[s[i]] = 0;
		}
		hashTable[s[i]]++;
	}

	for (let j = 0; j < t.length; j++) {
		if (!hashTable[t[j]]) {
			return false;
		}
		hashTable[s[j]]--;
	}

	return true;
};
```

In the first iteration, we add the frequency of every letter. If it doesn’t exist we create a 0 value at that point.

```js
if (!hashTable[s[i]]) {
	hashTable[s[i]] = 0;
}
hashTable[s[i]]++;
```

On the second iteration, we subtract all values. If no letter ever exists then we’ll hit the number `0` which means we’ll return a `false`.

```js
if (!hashTable[t[j]]) {
	return false;
}
hashTable[s[j]]--;
```

### Let's connect

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
