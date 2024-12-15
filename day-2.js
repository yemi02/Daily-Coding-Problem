/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

const arrayModifier = (array) => {
  const newArray = new Array(array.length).fill(1);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        newArray[i] *= array[j];
      }
    }
  }
  console.log(newArray);
  return newArray;
};

arrayModifier([1, 2, 3, 4, 5]);
arrayModifier([3, 2, 1]);
