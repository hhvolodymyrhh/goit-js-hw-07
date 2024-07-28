"use strict";

const liItemCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${liItemCategories.length}`);

const listH2 = document.querySelectorAll('.item>h2');


const listLi = document.querySelectorAll('.item>ul')

const arrayLengthLi = [];
listLi.forEach(function (element) {
    const lengthLi = element.querySelectorAll("li");
    arrayLengthLi.push(lengthLi.length);
})

for (let i = 0; i < listH2.length; i += 1){
    console.log(`Category: ${listH2[i].textContent}
    Elements: ${arrayLengthLi[i]}`);
}
