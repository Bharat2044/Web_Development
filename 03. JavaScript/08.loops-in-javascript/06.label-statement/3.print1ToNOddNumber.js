let n = 20;

labelex:
for(let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        continue labelex;
    }
    console.log(i);
}