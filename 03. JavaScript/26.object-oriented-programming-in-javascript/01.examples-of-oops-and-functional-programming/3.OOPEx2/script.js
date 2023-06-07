let purchase = {
    shoes: 100, 
    stateTax: 1.2,

    totalPrice: function() {
        let calculation = this.shoes * this.stateTax;

        console.log(calculation);
    }
}

purchase.totalPrice();