/*
ARRAYS
*/

// what is an array?
// has []
// can hold multiple data types
// arrays can list data types in an ordered, numbered way

// let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true,  ['Ryan', 'Iesha']];

// console.log(typeof students); //typeof doesn't say variable is array
// console.log(students instanceof Array); //instanceof says if it's an array
// console.log(students[2]);

// let name = students[6][1];
// console.log(`Hello ${name}, you look nice today.`);

// //recall for-of loop -> gives values of array
// let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hot dog'];

// for (f of food){
//     console.log(f+' is amazing!');
// }

// array methods
// food.push('Pizza'); // adds to end of array
// console.log(food);
// food.splice(1, 1, 'Bananas'); // asks for insertion point, how many things to remove, then what to add
// console.log(food);
// food.splice(2, 0, 'Sweet Potato Pie');
// console.log(food);
// food.pop(); // removes last element of array
// console.log(food);

// food = food.slice(2,5); // first number is the first element to slice. second number is stop position (not included).
// console.log(food);

// forEach allows us to iterate with loops specifically, and we can directly grab both the elements and their index numbers

// food.forEach((f) => console.log(f));

// food.forEach((food, index) => {
//     console.log(`The ${food} food in our array is at position ${index}`);
// });

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

movies.push('The Force Awakens');
console.log(movies);
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');
console.log(movies);

movies.forEach(movie => console.log(movie));
console.log(movies.length);

// let's do the following with an array:
// we will check if we are working with an array
// flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
// using a method only, let's print the values of the newly arranged array

let arr = new Array(1,2,3,4,5);

if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}