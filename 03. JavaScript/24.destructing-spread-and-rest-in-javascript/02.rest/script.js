// REST

function manyArguments(){
    console.log(typeof arguments);
    let args = Array.from(arguments)
    let finalArr = args.map(e => e  )
    console.log(finalArr);
}

function manyArgumentv2(...args){
    console.log(typeof args);
    let finalArr = args.map(e => e)
    console.log(finalArr);
}

manyArguments(1, 2, 3);
manyArgumentv2(1, 2, 3);