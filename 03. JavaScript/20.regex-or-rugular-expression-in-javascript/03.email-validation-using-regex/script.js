let str1 = "xyz@outlook.live";

let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
console.log(pattern.test(str1));

let str2 = "someone@gmail.com";
console.log(pattern.test(str2));

let str3 = "someonegmail.com";
console.log(pattern.test(str3));