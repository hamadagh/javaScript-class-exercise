// # Map, Filter, Reduce & Sort 

// #### 1. Increment by 1
// Given an array of numbers, e.g. ```javascript let arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
// , create a function that increments each element by 1. Return the a new array of modified elements. 

let arrOfNUm = [5, 22, 15, 32, 19];
let newArray = arrOfNUm.map(incNum = (num) => num + 1);
console.log(newArray);
// #### 2. Sum Up
// Write a function called sum that uses the reduce to sum up an array of numbers. Do NOT use
// a typical loop; just use the reduce method.

// * Examples:
// * sum([1,2,3,4,5]); //returns 15
// * sum([6,7,7]); //returns 20

function sum (arrayOfNumbers){
console.log(arrayOfNumbers.reduce((a, b) => a + b));

}
sum([5, 5, 5, 4, 4, 5, 2]);
// #### 3. instanceOf
// ##### Reduce
// Sum up the instances of each of these:
// ```javascript
// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 
//'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
// ```
// * Expected Output: 
// ```javascript
// object = {
//   bike: 2
//   car: 5
//   pogostick: 1
//   truck: 3
//   van: 2
//   walk: 2
// }
// ```

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const dataSum = data.reduce((acc, curr) =>{ acc[curr] = (acc[curr] || 0) + 1; return acc;}, {});
console.log(dataSum);



// #### 4. Inventors
// Look at the piece of code below and complete the tasks and questions.

// ```javascript
 const inventors = [
       { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
       { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
       { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
       { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
       { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
       { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
       { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
       { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
       { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
       { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
       { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
       { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
     ];
// ```
// ##### Map
// * Give an array of inventors' first and last names. 

let inventorsNames = inventors.map(names => {return `${names.first} ${names.last}`});
console.log(inventorsNames);

// ##### Reduce
// * How many years did all of the inventors live? 

let countYears = inventors.reduce((obj,person) =>{
  obj[person.first]= person.passed - person.year;
  return obj

},{})
console.log(countYears);
// #### 5. Square Root
// Given an array of numbers, find the square root of those numbers using map. 

let arrOfNumbers = [3, 9, 10, 15];
let squareRoot = arrOfNumbers.map(Math.sqrt);
console.log(squareRoot);

// #### 6. Instances of Letters
// Create a function that takes a string as an argument and counts the number of each letter
// in that string. 

function countStringNumber (strings){
    let stringSplit = strings.split("");
    let stringCounter = stringSplit.reduce((acc, curr) =>{ acc[curr] = (acc[curr] || 0) + 1; return acc;}, {});
    console.log(stringCounter);    
}
countStringNumber("Tamim");


// #### 7. List of Movies
// Given the code below, complete the task
// ```javascript
 let friends = [{
   name: 'Maria',
   films: ['Avengers: Infinity War', 'Avatar' ],
   age: 22
 }, {
   name: 'John',
   films: ['Forest Gump', 'Pulp Fiction', 'Spider-Man'],
   age: 29
 }, {
   name: 'Jean',
   films: ['Deadpool', 'Incredibles 2'],
   age: 20
 }];
 


// * Create a function that returns an array of your friends favourite films!
friendsFilms = friends.reduce((acc,curr)=>{return [...acc,...curr.films]},[]);
console.log(friendsFilms);
 
// #### 8. Filter Evens
// Write a function called filterEvens that uses the filter method to filter an array and only 
//return the even numbers. The function should take in an array of numbers as an argument,
//and should not use a loop.

// * Examples:

// * filterEvens([1,2,3,11,12,13]); //returns [2,12]
// * filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]

let even = [1,2,3,11,12,13,22,2,31,110,6,13];
let filtered = even.filter(val =>{
      return  val % 2=== 0
});

console.log(filtered);


// #### 9. Search 
// Given an array, create a function which uses filter() to filter an array based on a search query.
// * Example
// ``` javascript
// const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

// console.log(filterItems(friends, 'ka')); // ["Rika", "Marika"];
// console.log(filterItems(friends, 'e')); // ["Alex", "Oliver"];
// ```

const friends1 = ["Rika", "Jacob", "Alex", "Oliver", "Marika", "Johsn"];

let filterItems = (arr, query) => {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1)  
};
console.log(filterItems(friends1, "ka"));
console.log(filterItems(friends1, "e"));
console.log(filterItems(friends1, "o"));


// #### 10. Reformat an Array
// Given the following array: 
// ```javascript
// let origialArray = [{key: 1, name: "John"},
// 	     {key: 2, name: "Maria"},
// 	     {key: 3, name: "Oliver"},
// 	     {key: 4, name: "Jane"},
// 	     {key: 5, name: "Jack"},
// 	     {key: 6, name: "Albert"},
// 	     {key: 7, name: "Harry"},
// 	     {key: 8, name: "Ron"},
// 	     {key: 9, name: "Kenneth"},
// 	     {key: 10, name: "Kyle"}];
// ```
// * Reformat the array as follow: 
// ```javascript
// let newArray = [{1: "John"}, {2: "Maria"}, {3: "Oliver"}, {4: "Jane"}, {5: "Jack"}, {6: "Albert"},
// {7: "Harry"}, {8: "Ron"}, {9: "Kenneth"}, {10: "Kyle"}];

let originalArray = [
  {key: 1, name: "John"},
  {key: 2, name: "Maria"},
  {key: 3, name: "Oliver"},
  {key: 4, name: "Jane"},
  {key: 5, name: "Jack"},
  {key: 6, name: "Albert"},
  {key: 7, name: "Harry"},
  {key: 8, name: "Ron"},
  {key: 9, name: "Kenneth"},
  {key: 10, name: "Kyle"} ];
let original = originalArray.reduce((acc,cur)=>{
acc[cur.key] = cur.name;
return acc
},{})      
console.log(original);

// #### 11. Sorting Numbers
// Given the following array of numbers, sort from smallest to largest. 
// ```javascript
// let arrayOfIntegers = [4, 200, 90, 30, 12, 75, 21, 3];
// ```
// * Once you are finished, answer the following questions: **Which method did you use to solve the
// problem? Why did you have to use this method?** 

let arrayOfIntegers = [4, 200, 90, 30, 12, 75, 21, 3];

arrayOfIntegers.sort((a,b) => a- b);
console.log(arrayOfIntegers);

// #### 12. Sort Shapes
// Given the following array of shapes, complete the task below:
// ```javascript
// let shapes = [
//     [5, "Pentagon"],
//     [3, "Triangle"],
//     [8, "Octagon"],
//     [4, "Rectangle"],
//     [6, "Hexagon"],
//     [10, "Decagon"]
//     ];
// * Sort the 2D array based on the shapes' sides. Sorting should be in ascending order from 
//smaller number to greater number. 
// * Example of output:
// ``` javascript
// [ [ 3, 'Triangle' ],
//   [ 4, 'Rectangle' ],
//   [ 5, 'Pentagon' ],
//   [ 6, 'Hexagon' ],
//   [ 8, 'Octagon' ],
//   [ 10, 'Decagon' ] ]
// ```
let shapes = [
  [5, "Pentagon"],
  [3, "Triangle"],
  [8, "Octagon"],
  [4, "Rectangle"],
  [6, "Hexagon"],
  [ 10, 'Decagon' ] 
  ];

  const sortedShapes = shapes.sort(function (a, b) {
    const lastShape = a[0];
    const nextShape = b[0];
    if (lastShape > nextShape) {
        return 1;
    } else {
        return -1
    }
})
console.log(sortedShapes);





 
