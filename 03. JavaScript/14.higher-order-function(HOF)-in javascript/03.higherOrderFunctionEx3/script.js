// Example - 3
const higherOrder = m => {
    const funOne = n => {
        const funTwo = o => {
            return m + n + o;
        }
        return funTwo;
    }
    return funOne;
}

console.log(higherOrder(2)(3)(4));
