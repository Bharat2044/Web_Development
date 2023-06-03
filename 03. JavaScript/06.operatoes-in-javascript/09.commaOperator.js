let x = 1;
x = (x++, x);
console.log(x);

let y = (2, 3, 4);
console.log(y);

let a = (1, b = 2);
console.log(a);

let e, f, g;
e = f = 3, g = 4;
console.log(e); 

// Using the comma operator to join assignments
let i, j, k;
i = (j = 5, k = 6);
console.log(i); 

// Using the comma operator in a for loop
const m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const n = [m, m, m, m, m];
for(let r = 0, c = 9; r <= c; r++, c--) {                              
  console.log('n['+ r + '][' + c +'] = ' + n[r][c]);
}
