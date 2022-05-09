---
title: JavaScript LeetCode Two Sum
date: 2022-05-09
published: true
description: How to solve Two sum LeetCode problem using JavaScript. I go over the brute force solution and the hash table one-pass solution.
categories:
    - dsa
cover_image: https://cdn.hashnode.com/res/hashnode/image/upload/v1652017295987/HA_2pgTM5.png
---

### Introduction

LeetCode. An unfortunate truth of developer life is that for some job interviews it is necessary to learn Data structure and algorithms (DSA) in a specific way. A way in which you're expected to code up a solution to a DSA problem where you would otherwise google it.

I say **_unfortunate _** because in most cases it is unnecessary to know them to the degree required for the technical interviews and hardly reflects actual job capability.

But I digress, LeetCode is a website that compiles tons of different DSA problems. I'll be going through several LeetCode problems over the next month, explaining and solving them, to help others out. And also it helps me to re-write the solution. 😎

### Prompt

> Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*. You may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice. You can return the answer in any order.

Example 1:

```text
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Thinking it through

This is the first LeetCode problem and is quite an easy one. What first comes to mind is just iterating over the array twice and finding the necessary sum. This will 100% give us the solution.

However, as many of you may know about these types of questions. Usually, it is not enough to be correct. For DSA problems you want to be as **efficient** as possible.

![aron-visuals-BXOXnQ26B7o-unsplash.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1652014910383/fujVS3HuP.jpg)
_Photo by Aron Visuals on Unsplash_

So for example our first solution would be something along these lines:

![brute force](https://cdn.hashnode.com/res/hashnode/image/upload/v1652015420274/fSkf9b4o1.png)

Where `i` is the value of our first iteration and `j` is the value of our second iteration. Once added up we get `9` which is the solution we need.

### First solution

I mainly use JavaScript so the solution would look something like this:

```javascript
const twoSum(nums, target) {
    for(let i = 0;  i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if(j === i) continue;
            if((nums[i] + nums[j]) === target) return [i, j];
        }
    }
}
```

`nums` is the array of numbers and `target` is the desired solution. I iterate over both arrays and check if the sum is the necessary value. However, as stated in the prompt, we should not use the same element twice.

So we can check if the iterations are on the same element and skip:

```javascript
if(j === i) continue;
```

However, as I mentioned before this is very unoptimized.

### Second solution

A much better solution would be searching for the target based on the **current** number. What does that mean?

For example, when you first start iterating over the array you know the exact number you’re looking for. The number you're looking for is the **result of the subtraction of the target and the current iterated value.**

Let's take our first array as an example.

![first iteration](https://cdn.hashnode.com/res/hashnode/image/upload/v1652015969006/18sS3y3d5.png)

When we're on the first element `2` we know that we need to find as `9` minus `2` is 7. But, we need a way to quickly re-access data of the array.

Introducing a Hash Table.

#### Hash Table

A [hash table](https://en.wikipedia.org/wiki/Hash_table#:~:text=In%20computing%2C%20a%20hash%20table,desired%20value%20can%20be%20found.) is a data structure that maps key to values. This is perfect for our use-case because we just want to map our `number` to our `index`.

But how do we create this hash table?

[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) is a Javascript built-in object. The only thing you need to know is that it holds key-value pairs and has an API to quickly check the content:

`.set` for setting the key and value pair

`.get` for getting the value based on the key

`.has` for checking if it has the key

### Second Solution

```javascript
const hashTable = new Map();

for(let i = 0; i < nums.length; i++) {
  const num = nums[i];
  const substractionWeWant = target - num;

  if (hashTable.has(substractionGoal) {
      return [i, hashTable.get(substractionGoal)];
  } else {
      hashTable.set(num, i);
  }
}
```

We now have a simplified way to check for previous values. Going back to the code we first do a single iteration of the loop. By subtracting the `target` value from the current index value `num` we can check if the remainder already exists. If it doesn’t we just add the value we just tried to the map and move on.

So to reiterate

1. We loop over the array
2. We check if our current map of values has the subtraction of our `target` and current value we are iterating over. If it does we return both the index of the current value and the index of the value in our map
3. If we don’t find a match we add it to our map and move on

First solution:

![246ms first solution](https://cdn.hashnode.com/res/hashnode/image/upload/v1652016859386/pnWGBQQbk.png)

Second solution:

![67ms second solution](https://cdn.hashnode.com/res/hashnode/image/upload/v1652016877925/81s2igcnV.png)

### Wrapping it up

If you want to keep up with this series feel free to follow me on here or any of my social media below!

More content at [Relatable Code](https://relatablecode.com)

### Let's connect

If you liked this feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/relatablecode) or [Twitter](https://twitter.com/relatablecoder)

Check out my free developer roadmap and weekly tech industry news in my [newsletter](https://relatablecode.substack.com/).
