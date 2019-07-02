// # Array Exercises 
// ## These exercises are aimed at practicing arrays and array methods. Print each task to the console.

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let secondCity = euroCities[1];
// 2. Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
// 3. Print the length of the array "euroCities".
console.log(euroCities.length);
// 4. Remove the last item of the array "euroCities". 
euroCities.pop();
// 5. Use an array method to add "Budapest" to the euroCities array. 
euroCities.push("Budapest");
// 6. Remove the second and third items from the euroCities array. 
euroCities.splice(1, 2);
console.log(euroCities);
// 7. Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.
let asianCities = ["Tokyo", "Dubai", "Beirut", "Jakarta", "Bangkok"];
// 8. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  
let cities = asianCities.slice(2, 5);

// 9. Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).  
let worldCities = euroCities.concat(asianCities);
console.log(worldCities);
// 10. Reverse the order of worldCities.
worldCities.reverse();
// 11. Replace the 3rd item in the array of worldCities with "Toronto". 
worldCities[2] = "Toronto";
console.log(worldCities);
// 12. Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington");
console.log(worldCities);
// 13. Write a program to join all elements of the result (worldCities) into a string. 
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
// Expected Output: 
// "Berlin,London,Bangkok,Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh"
let allCities = worldCities.join(", ");
console.log(allCities);
// 14. Empty the array euroCities while keeping the original intact. 
euroCities.splice(0, euroCities.length);
console.log(euroCities);
// # Bonus

// 15. Write a program to reverse the string: "Hello World". 
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello World"));
// ## Extra Practice

// **Print the results to the console.**
 
// 1. Make an array of your siblings' names or your favorite movie characters' names.
let favChara = ["Deadpool", "Thor", "Spiderman"];
// 2. Make an array of your parents' names.
let parents = ["John smith", "Laura smith"];
// 3. Combine these two arrays.
let combinedArrays = favChara.concat(parents);

// 4. Add your pets' names.
combinedArrays.push("Oskar");
// 5. Reverse the order of the array.
combinedArrays.reverse();
console.log(combinedArrays);
// 6. Access one of your parents' names.
console.log(combinedArrays[2]);
// 7. Update the name of one of your parents. 
combinedArrays[2] = "Jack smith";
console.log(combinedArrays);	

