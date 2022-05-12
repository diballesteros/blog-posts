---
title: JavaScript LeetCode Contains Duplicate
date: 2022-05-11
published: true
description: How to solve the Contains Duplicate LeetCode problem using JavaScript. I go over the hash table solution and how to use Set to solve it.
categories:
    - dsa
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1652017295987/HA_2pgTM5.png
---

### Introduction

Continuing through the problems of LeetCode. I am not haphazardly selecting any questions. I am following along with this list for those that were curious:

https://www.techinterviewhandbook.org/best-practice-questions

### Prompt

> Given an integer array `nums` , return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

**Example 1:**

```text
Input: nums = [1,2,3,1]
Output: true
```

At first glance, the problem seems to be pretty simple. The idea here is to iterate over the array and find any duplicates. There's a bit of a cheat code we can use with JavaScript in this one.

### First Solution (cheating)

There is a standard built-in object for JavaScript called [Set] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

But what does this object do?

> `Set` objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the `Set`'s collection.

Knowing this, the only thing we need to do is convert our array into a `Set` and compare its length with the original `number` array length.

```js
var containsDuplicate = function (nums) {
	const set = new Set([...nums]);
	return set.size != nums.length;
};
```

Converting an array into a `Set` is simple, just spread it in a new array in the `Set` constructor. It has a property to calculate the size (number of items). We just have to compare that with the length of the original array, `nums`.

```js
return set.size != nums.length;
```

### Second Solution

Much like our (first solution)[https://relatablecode.com/javascript-leetcode-two-sum] we can create a hash table of our array as we're iterating and evaluate it in place.

```js
var containsDuplicate = function (nums) {
	const hashTable = new Map();

	for (let i = 0; i < nums.length; i++) {
		if (hashTable.has(nums[i])) return true;
		else hashTable.set(nums[i], true);
	}
	return false;
};
```

To break this down a little bit: we first iterate over the array of numbers. If the `map` already has the value then we return `true`. We check this with the `.has` property of `map`s

```js
if(hashtable.has(nums[i]) return true;
```

Otherwise, we add it to the `map` and move on.

```js
else hashTable.set(nums[i], true);
```

The value is pretty irrelevant as we don't really care much for it. There probably is a data structure more suited here.

### Let's connect

More content at [Relatable Code](https://relatablecode.com)

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
