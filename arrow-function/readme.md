# Arrow Functions Exercises

## Complete the following tasks using arrow functions. 

#### 1. Multiply
Multiply two numbers and return the result using an arrow function. 

#### 2. Double The Odds
Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2. 

#### 3. Loopyloop
Given an array of numbers, loop through the array and subtract 10 from each element using an arrow function. Return the new array. 

#### 4. Cars
Create an object named car. Create key pair values which include the model of the car, the manufacturer, year etc. Create an arrow function which prints the key pair values of the object. 

#### 5. Filter
Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than `70`. Store the result into a variable. 

#### 6. Geometrizer
Create two functions that calculate the properties of a circle. 

Create a function called calcCircumfrence:
* Pass the radius to the function.
* Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
* Pass the radius to the function.
* Calculate the area based on the radius, and output "The area is NN".

#### 7. The Inventors
Given the following array, complete the tasks below. 

```javascript
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
```

* Filter the list of inventors for those who were born in the 1500's. 
* Sort the inventors by birthdate, oldest to youngest. 
* Return an array of the inventors' first and last names.

#### 8. Look at all the people...
Given the following array, sort the people alphabetically by last name.

```javascript
  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
      'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
      'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
      'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
      'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
      'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
      'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
      'Blair, Tony', 'Blake, William'
    ];