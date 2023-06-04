let arr = [12, 99, 67, 48, 88];

let ans = arr[0];

for(let ele of arr) {
    if(ele > ans)
        ans = ele;
}

console.log(ans);