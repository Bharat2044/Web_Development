labelex:
for(let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue labelex;
    }
    console.log("Hello, World!!");
}