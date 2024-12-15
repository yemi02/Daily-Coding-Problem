/*
Good morning! Here's your coding interview problem for today.

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

//Function checks if any two numbers add up

const checkIfNumbersAddUp = (numbers, k) => {
  let check = false;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i != j && numbers[i] + numbers[j] === k) {
        check = true;
      }
    }
  }
  return check;
};

console.log(checkIfNumbersAddUp([10, 15, 3, 8], 18));
