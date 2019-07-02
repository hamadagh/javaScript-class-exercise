// # The Cashier Problem 

// Create a program that helps a cashier give adequate change to customers. The program should return the amount of notes and coins for the customer's change. 

// Example: If the price is €3.75 and the paid amount is €50, then the client should receive €46.25 back in change. 
// * The expected output should be: 
// * 2 x €20 // 2 twenty euro notes
// * 1 x €5 // 1 five euro note
// * 1 x €1 // 1 euro
// * 1 x €0.2 // 1 twenty cent coin
// * 1 x €0.05 // 1 five cent coin

// Example: Price: €4.50, Paid amount: €20, Change: 15.50
// * Expected output: 
// * 1 x €10
// * 1 x €5
// * 1 x €0.5

// * Notes
// * Include outputs for exceptions e.g. price: €4, paid amount: €3. 
let paidAmount = 50;
let price = 3.75;
let change = paidAmount - price;

function cashier(){
    let twoHundred = 200;
    let oneHundred = 100;
    let fifty = 50;
    let twenty = 20;
    let ten = 10;
    let five = 5;
    let two = 2;
    let one = 1;
    let fiftyCent = 0.50;
    let twentyCent = 0.20;
    let tenCent = 0.10;
    let fiveCent = 0.05;
    let twoCent = 0.02;
    let oneCent = 0.01;
    
    let arr = [twoHundred, oneHundred, fifty, twenty, ten, five, two, one, fiftyCent, twentyCent, tenCent, fiveCent, twoCent, oneCent]; 
    arr.filter(arr.forEach(moneyBack => {for()
        console.log(`${moneyBack}`);
        
    }))
}
cashier();
