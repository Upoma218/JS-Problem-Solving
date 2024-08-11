/* 1.Task: Array Filtering and Mapping

Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. */

/* 2.Task: Object Manipulation

Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
 */

/* 3.Task: Function Composition

Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
 */

/* 4.Task: Sorting Objects

Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
 */

/* 5.Task: Find and Modify

Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array. */

/* 6.Task: Array Reduction

Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
 */

/* 7.  Task: Leap Year Checker

Write a function that determines whether a given year is a leap year.

Example: Happy New Year */

/* 8. Task: Unique Values

Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result. */

/* 09. Task: Find Maximum Value:

Write a function that takes an array of numbers and returns the maximum value.
 */

/* 10.Task: Advanced Sorting

Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
 */

/* 11. Task: Functional Programming - Reduce

Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview */

const items = [
  { quantity: 2, price: 10 },
  { quantity: 1, price: 20 },
  { quantity: 3, price: 5 },
];

const totalValue = (items) => {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};
console.log(totalValue(items));
