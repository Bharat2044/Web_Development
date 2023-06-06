// Append Child
// add or create new element in HTML
let title = document.createElement('h1');
// add class selector
title.className = "one";
// add font size
title.style.fontSize = "25px";
// add some content
title.textContent = "Bharat Kumar";
// print element
console.log(title);
// insert element in HTML to display on webpage
document.body.appendChild(title);

// Remove Child
// Select ul element
let ul = document.querySelector("ul");
console.log(ul);
// select all list elements
let lists = document.querySelectorAll("li");
console.log(lists);

// remove all lists element on-by-one
for(ele of lists) {
    ul.removeChild(ele);
}

