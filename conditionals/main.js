// 1

// let a = 50;
// let b = 100;

// if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) {
//     console.log(true)
// } else console.log(false);

// 2

// let x = 50;
// let y = 75;
// let z = 100;

// if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
//     console.log(true);

// } else console.log(false);


// 3 

let a = 10;
let b = 20;
let c = 30;

if ((a > b) && (a > c)) {

    console.log(`${a} is Bigger !!`)

} else if ((b > a) && (b > c)) {

    console.log(`${b} is Bigger !!`)

} else ((c > a) && (c > b)) 

    console.log(`${c} is Bigger !!`)

    // 4

    let py = "Py";
    let string = "panda";

    if ((string[0].toLowerCase() === "p") && (string[1].toLowerCase() === "y")) {
        console.log(string);
    }else console.log(`${py}${string}`);

    // 5

    let num1 = 29;
    let num2 = 32;

    if ((((num1 + num2) >= 50) && ((num1 + num2) <= 80))){
        console.log(65);

    }else console.log(80);

    // 6
    

    const x = 10;
    const y = 2;
    const sum = x + y;
    const differenceOne = x - y;
    const differenceTwo = y - x;
   
    if ((sum === 8)) {
        console.log(`Sum of integers is equal to 8`)
    }
    else if ((differenceOne === 8) || (differenceTwo === 8)) {
        console.log(`Difference is equal to 8`);
    }  else if ((differenceOne <= 0) || (differenceTwo <= 0)) {
        console.log(`Difference is equal to 0 or negative`);
    }else { 
        console.log(`Sum and difference are not equal to 8`);
    }
   
    // 7q
   
    const d = 11;
    const f = 5;
    const sum = d + f;
    if ((d === 15) || (f === 15) || (sum === 15)) {
        console.log(true);
    } else {console.log(false);
    } 
   
    // 8q
   
    const z = 13;
    const u = 1;
    if ((z % 7 === 0) || (z % 11 === 0)) {
        console.log(`${z} is a multiple of 7 or 11`);
    } else if ((u % 7 === 0) || (u % 11 === 0)) {
        console.log(`${u} is a multiple of 7 or 11`);
    } else {
        console.log(`Neither ${z} nor ${u} is a multiple of 7 or 11`);
    }
   
    // 9q
   
    const p = 15;
    const t = 15;
    if (p !== t) {
        console.log(p + t);
    } else {
        console.log((p + t) * 3);
    }
   
    // 10q
   
    const n = 10;
   const sum = n - 19;
   
   if (n <= 19) {
       console.log(19 - n);
   } else {
       console.log(sum * 2);
   }
   
   
   
   
   
   
   

