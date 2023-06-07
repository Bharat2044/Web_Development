function noDefaultParameters(num) {
    console.log(num * num);
}
noDefaultParameters();
console.log();


class withDefaultParameters {

    constructor(num1=1, num2=2, num3= 3, str1="Result", isPass=true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.str1 = str1;
        this.isPass = isPass;
    }

    calculate() {
        if(this.isPass) {
            console.log(`${this.str1}: ${this.num1+ this.num3}`);
            return;
        }

        return "The value of isPass is incorrect";
    }
}

let better = new withDefaultParameters();
better.calculate();