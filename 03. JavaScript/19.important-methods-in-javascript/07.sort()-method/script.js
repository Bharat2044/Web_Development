let names = ["Bharat", "Anuj", "Raj", "Deepak"];
names.sort();
console.log(names);


let arr1 = [1, 6, 34, -23, 14];
arr1.sort();
console.log(arr1);


let arr2 = [1, 6, 34, -23, 14];
arr2.sort((a, b) => a-b);
console.log(arr2);


let arr3 = [1, 6, 34, -23, 14];
function compareFun(a, b) {
    if(a < b)
        return -1;
    if(a > b)
        return 1;
    return 0;
}
arr3.sort(compareFun);
console.log(arr3);


let arr4 = [1, 6, 34, -23, 14];
arr4.sort(function compareFun(a, b) {
    if(a < b)
        return -1;
    if(a > b)
        return 1;
    return 0;
});
console.log(arr4);