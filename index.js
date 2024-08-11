/* 1.Task: Array Filtering and Mapping

Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. */

const persons = [
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 25, gender: "male" },
  { name: "Carol", age: 35, gender: "female" },
  { name: "Dave", age: 40, gender: "male" },
];

const remaining = persons
  .filter((person) => person.gender !== "female")
  .map((person) => person.name);
console.log(remaining);

/* 2.Task: Object Manipulation

Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
*/

const books = [
  { title: "Book A", author: "Author A", year: 2000 },
  { title: "Book B", author: "Author B", year: 2005 },
  { title: "Book C", author: "Author C", year: 2010 },
];

const booksTitle = books.map((book) => book.title);

// console.log(booksTitle);

/* 3.Task: Function Composition

Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
 */

const square = (x) => x * x;
const double = (x) => x * 2;
const add5 = (x) => x + 5;
const result = (x) => add5(double(square(x)));

result(10);
// console.log(result(10));
/* 4.Task: Sorting Objects

Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
*/

const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Ford", model: "Focus", year: 2015 },
  { make: "Honda", model: "Civic", year: 2005 },
];
const sortCar = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};
sortCar(cars);
// console.log(sortCar(cars));

/* 5.Task: Find and Modify

Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array. */

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Carol", age: 35 },
];

const changeAge = (person, name, newAge) => {
  return person.map((person) =>
    person.name === name ? { ...person, age: newAge } : person
  );
};
changeAge(people, "Alice", 40);
// console.log(changeAge(people, "Alice", 40));

/* 6.Task: Array Reduction

Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
 */

const arrayOfNum = [2, 4, 5, 6, 7, 8];

const sumOfEvenNumber = (arrayOfNum) => {
  return arrayOfNum.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
};

sumOfEvenNumber(arrayOfNum);
// console.log(sumOfEvenNumber(arrayOfNum));

/* 7.  Task: Leap Year Checker

Write a function that determines whether a given year is a leap year.

Example: Happy New Year */

const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year!`;
  } else {
    return `${year} is not a leap year! `;
  }
};

isLeapYear(2000);
// console.log(isLeapYear(2100));

/* 8. Task: Unique Values

Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result. */

const numbersArr = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = (numbersArr) => {
  return [...new Set(numbersArr)];
};

uniqueNumbers(numbersArr);
// console.log(uniqueNumbers(numbersArr));

/* 09. Task: Find Maximum Value:

Write a function that takes an array of numbers and returns the maximum value.
 */

const numbers = [34, 35, 56, 47, 86];

const maxNumber = (numbers) => {
  return Math.max(...numbers);
};

// console.log(maxNumber(numbers));

/* 10.Task: Advanced Sorting

Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
*/

const students = [
  { name: "Alice", grades: [85, 92, 88] },
  { name: "Bob", grades: [78, 85, 90] },
  { name: "Carol", grades: [90, 88, 95] },
];

const avarageGrade = (students) => {
  return students.sort(
    (a, b) =>
      b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length -
      a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length
  );
};
avarageGrade(students);
// console.log(avarageGrade(students));

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
totalValue(items);
// console.log(totalValue(items));
