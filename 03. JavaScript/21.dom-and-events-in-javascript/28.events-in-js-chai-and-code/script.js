// attachEvent()
// jQuery - on

// type, timestamp,defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode


/*document.getElementById('owl').onclick = function() {
    alert('owl clicked');
}*/


/*document.getElementById('owl').addEventListener('click', () => {
    alert('owl clicked');
});*/


/*document.getElementById('owl').addEventListener('click', () => {
    alert('owl clicked');
}, false);*/


/*document.getElementById('owl').addEventListener('click', function(e) {
    console.log(e);
    alert('owl clicked');
}, true);*/


// bubbleing
/*document.getElementById('images').addEventListener('click', function(e) {
    console.log("clicked inside the ul");
}, false);

document.getElementById('owl').addEventListener('click', function(e) {
    console.log('owl clicked');
}, false);*/


// capturing
/*document.getElementById('images').addEventListener('click', function(e) {
    console.log("clicked inside the ul");
}, true);

document.getElementById('owl').addEventListener('click', function(e) {
    console.log('owl clicked');
}, true);
*/


document.getElementById('images').addEventListener('click', function(e) {
    console.log("clicked inside the ul");
}, false);

document.getElementById('owl').addEventListener('click', function(e) {
    console.log('owl clicked');
    e.stopPropagation();
}, false);


document.getElementById('google').addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("google clicked");
});
