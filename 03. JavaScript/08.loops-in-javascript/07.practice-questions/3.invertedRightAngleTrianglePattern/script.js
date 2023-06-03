let n = 5;
let ans = "";

for(let i=1; i<=n; i++) {
    for(let j=1; j<=n-i+1; j++)
        ans += "*"
        ans += "\n";
}
console.log(ans);