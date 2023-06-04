const heros = ["naagraj", "doga", "dhruva", "maniraj", "rajababu"];

console.log("Heros names are : ", heros);

heros.filter((ele) => {
    console.log(ele);
});

const herosWithRaj = heros.filter((ele) => {
    return ele.endsWith('raj')
})
console.log("Heroes names ends with raj are : ", herosWithRaj);


let userNames = ["Mithun", "Anurag", "Raj", "Abhay", "Bharat", "Monu"];
// let longUserNames = userNames.filter((item) => {
//     return item.length > 5
// });
let longUserNames = userNames.filter((item) => item.length > 5);

console.log("More than 5 length names are : ", longUserNames);