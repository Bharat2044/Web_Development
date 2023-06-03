let a = 'abc';
let b = Number(a);
console.log(typeof(a) + "\t" + typeof(b));
console.log(a + "\t" + b);
console.log();

let c = '123';
let d = Number(c);
console.log(typeof(c) + "\t" + typeof(d));
console.log(c + "\t" + d);
console.log();

let e = '';
let f = Number(e);
console.log(typeof(e) + "\t" + typeof(f));
console.log(e + "\t" + f);
console.log();

let g = ' ';
let h = Number(g);
console.log(typeof(g) + "\t" + typeof(h));
console.log(g + "\t" + h);
console.log();

let i = true;
let j = Number(i);
console.log(typeof(i) + "\t" + typeof(j));
console.log(i + "\t" + j);
console.log();

let k = false;
let l = Number(k);
console.log(typeof(k) + "\t" + typeof(l));
console.log(k + "\t" + l);
console.log();

let m = null;
let n = Number(m);
console.log(typeof(m) + "\t" + typeof(n));
console.log(m + "\t" + n);
console.log();

let o = undefined;
let p = Number(o);
console.log(typeof(o) + "\t" + typeof(p));
console.log(o + "\t" + p);
console.log();

let q = NaN;
let r = Number(q);
console.log(typeof(q) + "\t" + typeof(r));
console.log(q + "\t" + r);
console.log();

let s = '56.78';
let t = Number(s);
console.log(typeof(s) + "\t" + typeof(t));
console.log(s + "\t" + t);
console.log();

// string + unary = number
let u = '123';
let v = +u;
console.log(typeof(u) + "\t" + typeof(v));
console.log(u + "\t" + v);
console.log();

let w = 'abc';
let x = +w;
console.log(typeof(w) + "\t" + typeof(x));
console.log(w + "\t" + x);
console.log();
