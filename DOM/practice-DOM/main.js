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


 containerSelector.innerHTML += "Hello";

// 6

let footer = document.querySelector(".footer");
footer.classList.add("main");
console.log(footer);

// 7

footer.classList.remove("main");
console.log(footer);

// 8, 9

let newListItem = document.createElement("li");
let text = document.createTextNode("four");
newListItem.appendChild(text);
// let newListItem = document.createElement("LI");

// let newListItemText = document.createTextNode("four");
// newListItem.appendChild(newListItemText);

// 10
let unorderedList = document.getElementById("ul").appendChild(newListItem);


// 11
let orderedList = document.querySelector("ol");
let listItem = orderedList.getElementsByTagName("li");
for (let i = 0; i < listItem.length; i++){
    listItem[i].style.backgroundColor = "green";
}

// 12

footer.remove();
