// const header = document.getElementById('header');
// console.log(header);

// header.style.color = "pink";
// header.innerText = "Hello World!";

// const errorList = document.getElementsByClassName('error-list');
// console.log(errorList);

// errorList[0].innerText = "I changed error 1";
// // Example 1 Looping
// for (let i = 0; i < errorList.length; i++){
//     errorList[i].style.color = "red";
// }
// //Example 2 Looping
// for(error of errorList){
//     error.style.color = "green";
// }
// //Example 3 Looping forEach // CAN'T DO

// // errorList.forEach((error) => (error.style.color = "purple"));

// const tags = document.getElementsByTagName('p');
// console.log(tags);

// tags[0].innerText = "I changed the paragraph using getElementsbyTagName!";

// const listItems = document.getElementsByTagName('li');
// console.log(listItems);

// // listItems[0].style.fontStyle = "italic";
// // listItems[1].style.fontStyle = "italic";

// for(i = 0; i <listItems.length; i++){
//     listItems[i].style.fontStyle = "italic";
// }

// const header = document.querySelector('h1');
const header = document.querySelector('#header');
console.log(header);

const errorList = document.querySelector('.error-list');
console.log(errorList);

const errorList2 = document.querySelector("body > div > ul > li:nth-child(2)");
console.log(errorList2);

const headerTags = document.querySelectorAll('h1');
console.log(headerTags);

console.log(headerTags[1]);

headerTags.forEach(h =>{
    h.style.color = "blue";
});

const listItems = document.querySelectorAll('.error-list');
console.log(listItems);

listItems.forEach((li) =>{
    li.style.fontStyle = "italic";
});