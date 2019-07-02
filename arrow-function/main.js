// # Arrow Functions Exercises

// ## Complete the following tasks using arrow functions. 

// #### 1. Multiply
// Multiply two numbers and return the result using an arrow function. 

const number = (c, d) => console.log(c * d);
number(3,5);      

// #### 2. Double The Odds
// Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into
// a new array and multiply each odd number by 2. 

const double = (a) => {
    let num = []
    for(let x = 0; x < a.length; x++){
         if(a[x] % 2 !== 0){
            num.push(a[x] * 2);
     }
     console.log(num);
    }
 };
  double([2, 5, 67, 12, 34, 4, 9, 30]);

// #### 3. Loopyloop
// Given an array of numbers, loop through the array and subtract 10 from each element using
// an arrow function. Return the new array. 

let arr = b => {
    let arr2 = [];
    for(let c = 0; c < b.length; c++){
         result = b[c] - 10;
        arr2.push(result);
    }
   return arr2;
}
let data = [30, 40, 20, 50];
console.log(arr(data));

// #### 4. Cars
// Create an object named car. Create key pair values which include the model of the car,
// the manufacturer, year etc. Create an arrow function which prints the key pair values of the object. 

let cars = (type, color, manufacturer) =>
    console.log(`This is a ${type} car with ${color} color made in ${manufacturer}`);

cars("Maserati","black","Italy");

// #### 5. Filter
// Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function 
//to create an array of the numbers greater than `70`. Store the result into a variable. 

let numbers = num2 => num2.filter(function(value){
    return value > 70
});
console.log(numbers([3,62,234,7,23,74,23,76,92]));

// #### 6. Geometrizer
// Create two functions that calculate the properties of a circle. 



// Create a function called calcCircumfrence:
// * Pass the radius to the function.
// * Calculate the circumference based on the radius, and output "The circumference is NN".

// Create a function called calcArea:
// * Pass the radius to the function.
// * Calculate the area based on the radius, and output "The area is NN".

function clacCircumfrence (radius){
    let circ = 2 * radius * MATH.PI;
    console.log("The Circumference of a circle with the radius " +
    radius + " is " + circ + ".");
}
let filterArray = arr =>
arr.filter(function(value) {
  return value > 70;
});
console.log(filterArray([3, 62, 234, 7, 23, 74, 23, 76, 92]));

// #### 7. The Inventors
// Given the following array, complete the tasks below. 

// ```javascript
//     const inventors = [{
//         first: 'Albert',
//         last: 'Einstein',
//         year: 1879,
//         passed: 1955
//       },
//       {
//         first: 'Isaac',
//         last: 'Newton',
//         year: 1643,
//         passed: 1727
//       },
//       {
//         first: 'Galileo',
//         last: 'Galilei',
//         year: 1564,
//         passed: 1642
//       },
//       {
//         first: 'Marie',
//         last: 'Curie',
//         year: 1867,
//         passed: 1934
//       },
//       {
//         first: 'Johannes',
//         last: 'Kepler',
//         year: 1571,
//         passed: 1630
//       },
//       {
//         first: 'Nicolaus',
//         last: 'Copernicus',
//         year: 1473,
//         passed: 1543
//       },
//       {
//         first: 'Max',
//         last: 'Planck',
//         year: 1858,
//         passed: 1947
//       },
//       {
//         first: 'Katherine',
//         last: 'Blodgett',
//         year: 1898,
//         passed: 1979
//       },
//       {
//         first: 'Ada',
//         last: 'Lovelace',
//         year: 1815,
//         passed: 1852
//       },
//       {
//         first: 'Sarah E.',
//         last: 'Goode',
//         year: 1855,
//         passed: 1905
//       },
//       {
//         first: 'Lise',
//         last: 'Meitner',
//         year: 1878,
//         passed: 1968
//       },
//       {
//         first: 'Hanna',
//         last: 'Hammarström',
//         year: 1829,
//         passed: 1909
//       }
//     ];
// ```

// * Filter the list of inventors for those who were born in the 1500's. 
// * Sort the inventors by birth date, oldest to youngest. 
// * Return an array of the inventors' first and last names.


const inventors = [{
            first: 'Albert',
            last: 'Einstein',
            year: 1879,
            passed: 1955
          },
          {
            first: 'Isaac',
            last: 'Newton',
            year: 1643,
            passed: 1727
          },
          {
            first: 'Galileo',
            last: 'Galilei',
            year: 1564,
            passed: 1642
          },
          {
            first: 'Marie',
            last: 'Curie',
            year: 1867,
            passed: 1934
          },
          {
            first: 'Johannes',
            last: 'Kepler',
            year: 1571,
            passed: 1630
          },
          {
            first: 'Nicolaus',
            last: 'Copernicus',
            year: 1473,
            passed: 1543
          },
          {
            first: 'Max',
            last: 'Planck',
            year: 1858,
            passed: 1947
          },
          {
            first: 'Katherine',
            last: 'Blodgett',
            year: 1898,
            passed: 1979
          },
          {
            first: 'Ada',
            last: 'Lovelace',
            year: 1815,
            passed: 1852
          },
          {
            first: 'Sarah E.',
            last: 'Goode',
            year: 1855,
            passed: 1905
          },
          {
            first: 'Lise',
            last: 'Meitner',
            year: 1878,
            passed: 1968
          },
          {
            first: 'Hanna',
            last: 'Hammarström',
            year: 1829,
            passed: 1909
          }
        ];




const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.log(fifteen);


const ages = inventors.sort(inventor => inventors.year);
console.log(ages);

//sort
//--------------------------------------------------------------------------------------------------------------------









// #### 8. Look at all the people...
// Given the following array, sort the people alphabetically by last name.

// ```javascript
//   const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
//       'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
//       'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
//       'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
//       'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
//       'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
//       'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
//       'Blair, Tony', 'Blake, William'
//     ];