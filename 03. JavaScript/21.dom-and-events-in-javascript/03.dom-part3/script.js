// target entire webpage

// single click => show effect after one click
// document.addEventListener("click", hello);

// double click => show effect after double click
// document.addEventListener("dblclick", hello);

// mouse enter => show effect after your mouse enter in webpage
// document.addEventListener("mouseenter", hello);

function hello() {
    document.getElementById("js").innerText = "Namaste Ji";
}

function hey() {
    document.getElementById("btn").innerText = "Namaste";
    document.getElementById("btn").style.color = "red";
    document.getElementById("btn").style.backgroundColor = "black";
    document.getElementById("btn").style.fontSize = "20px";
    document.getElementById("btn").style.padding = "15px";
    document.getElementById("btn").style.border = "2px solid yellow";
    document.getElementById("btn").style.boxShadow = "2px 2px 5px green";
}