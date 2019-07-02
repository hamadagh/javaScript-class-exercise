// #Conditionals P2
// ##Don't forget to print your results to the console!

// 1. Make a variable for firstName and age and give each variable values.
//  Create an if/else statement to check whether the person's age is less than 13.
//   If so, print "firstName is a boy/girl". If the age is equal to or more than 13 and less than 20,
//    print "firstName is a teenager". If the person's age is equal to 20 and less than 30
//    , then print "firstName is a young man/woman". If none of these conditions apple,
//     print "firstName is a man/woman". 

console.log(`-----1-----`);
let firstName = "Ramiz";
let age = 24;
if (age <= 13){
console.log(`${firstName} is a boy`);

}else if ((age >= 13) && (age < 20)){
console.log(`${firstName} is a teenager `);

}else if ((age >= 20) && (age < 30 )){
    console.log(`${firstName} is a young man`);
    
}else {
    console.log("man/woman");
    
}


// 2. Make an if/else statement depending on a person's job. 
// Create two variables "firstName" and "job". 
// Print 4 different outputs depending on the value of "job" eg. "Maria is a teacher in Berlin"
// "Maria is a designer in Berlin". 
// Make 5 different possible outcomes depending on the value of job.

let firstName1 = "Ahmed";
let job = "web developer";
if(job = "web developer"){
    console.log(`${firstName1} is a web developer in berlin`);
    
}else if(job = "web designer"){
    console.log(`${firstName1} is a web designer in berlin`);
    
}else if(job = "teacher"){
    console.log(`${firstName1} is a teacher in berlin`);
    
}else if(job = "lawyer"){
    console.log(`${firstName1} is a lawyer in berlin`);
    
}else if(job = "doctor"){
    console.log(`${firstName1} is a doctor in berlin`);
    
}



// 3. Check if a number is divisible by 3. If it is, print "Fizz". Check if a number is divisible by "5"
// . If it is, print "Buzz". Check is a number is divisible by both 3 and 5. If it is, print "FizzBuzz".
//  If none of the above apply, print the number. 

let number = 15;

if((number % 3 === 0) && (number % 5 === 0)){
    console.log(`${number} is FizzBuzz`);
}else if(number % 5 === 0){
    console.log(`${number} is Buzz`);
}else if (number % 3 === 0){
    console.log(`${number} is Fizz`);
}
// 4. Make an if/else statement depending on the weather today!
// Create a variable named "temperature" and "weather".
// Then, create outputs based on the variable values e.g.
// if ((temperature > 15) && (weather === 'sunny') {
//     console.log(`It is ${temperature} degrees outside and ${weather}`.
// }
// >Do this for at least 3 different outputs.
let temperature = 3;
let weather = "raining";

if((temperature > 15) && (weather === "sunny")){
    console.log(`It is ${temperature} degrees outside and ${weather}`);
}else if(((temperature < 15) && (temperature > 5)) && (weather === "cloudy")){
    console.log(`It is ${temperature} degrees outside and ${weather}`);
}else if((temperature < 5) && (weather === "raining")){
    console.log(`It is ${temperature} degrees outside and ${weather}`);
}




// 5. Calculate the student average mark and then give the student a grade. 

// student marks = 90, 64, 75, 83, 80, 55

// - A+ if the average is greater than 90. 
// - A if the average is greater than 80 and less than or equal to 90	. 
// - B+ if the average is greater than 70 and less than or equal to 80. 
// - B if the average is greater than 60 and less than or equal to 70. 
// - C+ if the average is greater than 50 and less than or equal to 60. 
// - C if the average is greater than 40  and less than or equal to 50. 
// - D if the average is greater than 30 and less than or equal to 40. 
// - F if the average is less than or equal to 30.
let studentMarks = [90, 64, 75, 83, 80, 55];
let sum = 0;
for(let i = 0; i < studentMarks.length; i++){
    sum += studentMarks[i];
}
let studentMarksAverage = sum / studentMarks.length;
console.log(studentMarksAverage);

if (studentMarksAverage > 90){
    console.log(`Congrats u got an A+`);
}else if ((studentMarksAverage > 80) && (studentMarksAverage <= 90)){
    console.log(`Congrats u got an A`);
}else if ((studentMarksAverage > 70) && (studentMarksAverage <= 80)){
    console.log(`Congrats u got an B+`);
}else if ((studentMarksAverage > 60) && (studentMarksAverage <= 70)){
    console.log(` u got an B`);
}else if ((studentMarksAverage > 50) && (studentMarksAverage <= 60)){
    console.log(` u got an C+`);
}else if ((studentMarksAverage > 40) && (studentMarksAverage <= 50)){
    console.log(` u got an C`);
}else if ((studentMarksAverage > 30) && (studentMarksAverage <= 40)){
    console.log(` u got an D`);
}else if (studentMarksAverage <= 30){
    console.log(` u got an F`);
}

// **Enjoy!! :)**

