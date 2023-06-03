let num1 = 10;
let num2 = 20;
let num3 = 10;

// 1. Logical AND Opearator
console.log(true && true);
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log(2 && 0);
console.log(-14 && 65);
console.log("" && "Hi");
console.log("Hi" && 4);
console.log(true && null);
console.log(null && true);
console.log(false && null);
console.log(true && NaN);
console.log(false && NaN);
console.log(undefined && NaN);
console.log(undefined && 0);
console.log(num1 >= num3 && num1 == num3);
console.log(num1 >= num2 && num1 == num3);
console.log('\n');

// 2. Logical OR Opearator
console.log(true || true);
console.log(true || false)
console.log(false || true)
console.log(false || false)
console.log(2 || 0);
console.log(-14 || 65);
console.log("" || "Hi");
console.log("Hi" || 4);
console.log(true || null);
console.log(null || true);
console.log(false || null);
console.log(true || NaN);
console.log(false || NaN);
console.log(undefined || NaN);
console.log(undefined || 0);
console.log(num1 >= num3 || num1 == num3);
console.log(num1 >= num2 || num1 == num3);
console.log('\n');

// 2. Logical NOT Opearator
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!65);
console.log(!"Hi");
console.log(!"");
console.log(!" ");
console.log(!null);
console.log(!NaN);
console.log(!undefined);
console.log(!(num1 == num2));
console.log(!(num1 == num3));
