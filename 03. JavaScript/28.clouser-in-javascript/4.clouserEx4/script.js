function parent() {
    let count = 0;

    function child() {
        count = count + 1
        console.log(count);
    }

    return child;
}

const increment = parent();
increment() //1
increment() //2
increment() //3