// 1


  
let containerSelector = document.getElementById("container");
console.log(containerSelector);

// 2

let containerSelector2 = document.querySelector("#container");
console.log(containerSelector2);

// 3

let listItemsSelector = document.querySelectorAll(".second");
console.log(listItemsSelector);

// 4

let thirdListItem = document.querySelector("#container > ol > li.third");


// 5


 containerSelector.innerText += "Hello";

// 6

let footer = document.querySelector(".footer");
footer.classList.add("main");
console.log(footer);

// 7

footer.classList.remove("main");
console.log(footer);

// 8

 containerSelector.innerHTML += "<LI>new item</LI>";

// 9

 let newListItem = document.querySelector("#container > li");

 newListItem.innerText = "four";

// 10




