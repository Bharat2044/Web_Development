// Id
let var1 = document.getElementById("one");
// console.log(var1);               // It target element by  id name "one"
// console.log(var1.innerHTML);     // It target everything inside element 
console.log(var1.innerText);       // It target inside element only text

// Class
let var2 = document.getElementsByClassName("tech");
console.log(var2);      // It targets all element by same class name ("tech")
// console.log(var2.innerHTML);
// console.log(var2.innerText);
console.log(var2[2]);   // It targets only 2nd element by class name "tech"
// console.log(var2[2].innerHTML);   
// console.log(var2[2].innerText);   
var2[1].innerText = "Node JS";  // update 2nd list

// TagName
let var3 = document.getElementsByTagName("h4");
console.log(var3);
console.log(var3[1]);
console.log(var3[1].innerHTML);
console.log(var3[1].innerText);
var3[2].innerText = "Hi";
var3[2].style.color = "red";
var3[0].style.color = "purple";


// Query Selector
let var4 = document.querySelector("h2");
console.log(var4);

let var5 = document.querySelector(".classes");
console.log(var5);

let var6 = document.querySelector("#ids");
console.log(var6);

// update class name
//var5.className = "hello";

// write multiple class name
var5.classList = "hola hola hola";

// add attributes
var5.setAttribute("title", "Bharat");

