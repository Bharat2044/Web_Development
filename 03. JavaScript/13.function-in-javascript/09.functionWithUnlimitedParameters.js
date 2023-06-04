//function declaration
function sum() {
    let add = 0;
    for(let i=0; i<arguments.length; i++)
        add += arguments[i];
    return add;
}

//calling function
let ans = sum(1, 2, 3, 4, 5, 6);
console.log(ans);