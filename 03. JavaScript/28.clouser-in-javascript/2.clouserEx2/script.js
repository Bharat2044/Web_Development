function outerFunc() {
    let outerVar = "I am at scope level-1";

    function innerFunc() {
        let innerVar = "I am at scope level-2";
        console.log(outerVar);
    }

    // console.log(innerVar);   // ReferenceError: innerVar is not defined
    innerFunc();
}

outerFunc();


const myGlobalValue = 0;

function func() {
    const val1 = 1;
    console.log(myGlobalValue); 

    function innerFunc() {
        const val2 = 2;
        console.log(val2, val1, myGlobalValue);

        function innerOfInnerFunc() {
            const val3 = 3;
            console.log(val3, val2, val1, myGlobalValue);
        }

        innerOfInnerFunc();
    }

    innerFunc();
}

func();


// clouser
function superFunc() {
    let outerVal = "I am outer";

    function subFunc() {
        console.log(outerVal);
    }

    subFunc();
}

superFunc();