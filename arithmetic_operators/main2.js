// #Math Problems  
// ##These tasks are aimed at making you comfortable with solving math problems using JS. 

// **Percent**
// Calculate the percentage of 17/30. Expected output: number%
let percentage = (17 / 30) * 100;
console.log(`${percentage}%`); 
// **Average** 
// The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
// What is Noemy's average hour?
let hours = [ 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4 ];
let sum = 0;
for (let i = 0; i < hours.length; i++){
    sum += hours[i];
}
let averageHours = sum / hours.length;
console.log(sum);
console.log(`Noemy's average hours is ${averageHours} hours per day !`);

// A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.
let sixthTestScore;
let testScores = [75, 70, 85, 90, 100];
let averageScore = 85;
let sum1 = 0;
for(let x = 0; x < testScores.length; x++){
     sum1 += testScores[x];
}
sixthTestScore = (averageScore * 6) - sum1;
console.log(sum1);
console.log(sixthTestScore);


// For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments.
// He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his,
// last assessment to ensure he gets a first class? 
// Expected output: James needs a minimum of --% to get an 80% average.






// **Consumer Formula**
// Calculate the three bills including tips:
// €22.35 + 10% tip
// €26.67 + 15% tip
// €35.92 + 20% tip

let firstTip = (22.35 / 100) * 10;
let firstBill = 22.35 + firstTip;
console.log(firstBill);

//

let secondTip = (26.67 / 100) * 15;
let secondBill = 26.67 + secondTip;
console.log(secondBill);

//

let thirdTip = (35.92 / 100) * 20;
let thirdBill = 35.92 + thirdTip;
console.log(thirdBill);

// **Geometry Formulas** 
// Calculate the perimeter of a square. Assume each side is 4.75cm.
let squareSide = 4.75;
let perimeter = squareSide * 4;
console.log(perimeter);

// Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
let firstSide = 5;
let secondSide = 6;
let thirdSide = 7;

let trianglePer = firstSide + secondSide + thirdSide;
console.log(trianglePer);

// Calculate the area of a square. Each side is 5cm.
let squareSide2 = 5;
let squareArea = squareSide2 * squareSide2;
console.log(squareArea);


// Calculate the volume of a cube. Length of each side is 9cm.
let side = 9;
let cubeVol = side **3;
console.log(cubeVol);


// **Basic Word Problems**

// In one night, a movie theater sells tickets for 6450 dollars.
// Each ticket costs 15 dollars. How many people purchased a ticket? 

let ticket = 15;
let ticketSum = 6450;
let purchasedTicket = ticketSum / ticket;
console.log(purchasedTicket);
// Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?

weeklyIncome = 500;
yearlyIncome = weeklyIncome * 54;
console.log(yearlyIncome);
