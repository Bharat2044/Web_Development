let obj = {
    x: 10,

    fun1() {
        console.log(this.x);
    },

    fun2: () => {
        console.log(this.x);
    }, 

    fun3() {
        y = {
            gun: () => {
                console.log(this.x);
            }
        }

        y.gun();
    }
}

obj.fun1();
obj.fun2();
obj.fun3();