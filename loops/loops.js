// 1. Addition 
// Write a program to add up the numbers 1 to 20.
let a;
for(a = 0; a <=20; a++){
    console.log(a)
}


// 2. There are i bottles of beer on the wall. 
// Write a program that will output, "There is
//  one bottle of beer on the wall." "There are two bottles of beer on the wall" etc. 

let beerNum = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
for(i = 0 ; i <= 11 ; i++){
    console.log(`There is ${beerNum[i]} bottle of beer on the wall`)
};

// 3. The odd/even reporter
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current
//  number is even or odd, and report that to the screen (e.g. "2 is even").

for (let q = 0; q <= 20; q++){
    if(q % 2 === 0){
        console.log(`${q} is even`);
    }else{
        console.log(`${q} is odd`);
    }
}

// 4. Multiplication Tables
// Write a program that will iterate from 0 to 10. For each iteration of the for loop,
// it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").


for (let w = 0; w <= 10; w++){
    console.log(`${w} * 9 = ${w * 9}`)
}
// **Bonus**: Use a nested for loop to show the tables for every multiplier from 1 to 10
// (100 results total).

for (let t = 0; t <= 10; t++){
    for(let j = 0; j <= 10; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
    
}

// 5. Grades
// Write a program to calculate the average marks of the following students Then,
// this average is used to determine the corresponding grade for the class. 
// John	90
// Tom	60
// Jane	77
// Maria 81
// Carl	65

// The marks are graded as follows :
// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A
// 
let greed = [90, 60, 77, 81, 65];
for(let c = 0; c <5 ; c++){
    if(greed[c] > 60 && greed[c] <= 70){
        console.log("you're f");
        
    }else if(greed[c] > 70 && greed[c] <= 80){
        console.log("you're d");
        
    }else if(greed[c] > 80 && greed[c] <= 90){
        console.log("you're c");
        
    }else if(greed[c] > 90 && greed[c] <= 100){
        console.log("you're b");
        
    }else  if(greed[c] == 100){
        console.log("you're a");
        
    }
}


// 6. Fizz Buzz
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for(let i =1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }else if(i % 3 === 0){
        console.log("Fizz")
    }else if (i % 5 === 0){
        console.log("Buzz")
    }else
    console.log(i);
}

// 7. Sum of Multiples
// Write a program to add the multiples of 3 and 5 under 1000.
let sum = 0;
for(let x = 1; x <= 1000; x++){
    if (x % 3 === 0 && x % 5 === 0){
        sum = sum + x;
    }
}
console.log(sum);





// 8. Create an array filled with your friends' and family's names. Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. 
let friends = ["Ramiz", "Naqvi","Hamada"];
for (let u = 0; u < friends.length; u++){
    console.log(`hello ${friends[u]}`);
    console.log(`${friends[u]} is on the index ${u}`)
}




// **Bonus**: Print the indexes of each item in the array. Expected output example: Mike is at index 1 of my friends array. 

// 9. Write a program that will output the following using loops: 
// >100 200 300 400 500 600 700 800 900 1000
// >1 2 4 8 16 32 64 128
// >0 2 4 6 8 10
// >3 6 9 12 15
// >9 8 7 6 5 4 3 2 1 0

for(let a = 1; a <= 10; a++){
    console.log(a * 100);
}
let b = 1;
for(let b = 0; b <=7; b++){
    console.log(2 ** b);
}
let c = 1;
for(let c = 0; c <= 5; c++){
    console.log( c * 2);
}
let d = 1;
for(let d = 1; d <= 5; d++){
    console.log( d * 3);
}
let f = 1;
for(let f = 9;f >= 0; f--){
    console.log(f);
}


// 10. isPalindrome
// Write a program to check whether a word is a palindrome or not. 
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat
let g = 0;
let h = 1;
let hh = 1;
let str = "maddam";
for(g = 0; g < str.length; g++){
    if(str[g] === str[str.length - 1 - g]){
        h = 1;
    } else{
        h = 0;
    }
    hh = hh * h;
}
if(hh === 1){
    console.log(`this word is palindrome`);
}else {
    console.log(`this word is not palindrome`);
}
