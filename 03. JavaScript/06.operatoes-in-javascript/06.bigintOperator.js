console.log(1n + 3n);
console.log(1n / 2n);
console.log(100n >> 2n);

// console.log(100n >>> 2n);   // TypeError: BigInts have no unsigned right shift, use >> instead

// console.log(1 + 2n);    // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(1 + Number(2n));
console.log(2n + BigInt(3));

console.log(2n + "abc");


console.log(2n > 2);
console.log(3 > 2n);
console.log(2n >= "2");
