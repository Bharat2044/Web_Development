console.log(Date());
console.log(new Date());
console.log();

let myDate = new Date();
console.log(typeof myDate);
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log();

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log();

console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log();

// declare specific date
let myCreatedDate = new Date(2023, 2, 25);  // month starts from 0 -> 0 means January
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log();

let myDate1 = new Date(2023, 0 ,23, 5, 24);
console.log(myDate1);
console.log(myDate1.toDateString());
console.log();

let myDate2 = new Date("2023-01-14");
console.log(myDate2);
console.log(myDate2.toDateString());
console.log();

let myDate3 = new Date("01-14-2023");
console.log(myDate3);
console.log(myDate3.toDateString());
console.log();

let myTimeStamp = Date.now();
console.log(myTimeStamp);   // output in millisecond
console.log(myDate3.getTime());
console.log();

// convert in seconds
console.log(Math.floor(Date.now() /1000));
console.log();


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());      // 1 -monday
console.log(newDate.getMonth());    // 0 -january
console.log(newDate.getFullYear());
console.log(newDate.getSeconds());
console.log(newDate.getMinutes());
console.log(newDate.getHours());
console.log(newDate.getTime());
console.log();


console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));