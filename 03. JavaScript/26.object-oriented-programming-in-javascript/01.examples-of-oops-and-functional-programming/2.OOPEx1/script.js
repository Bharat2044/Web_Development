let purchase = {
    shoes: 100, 
    stateTax: 1.2,

    totalPrice: function() {
        let calculation = purchase.shoes * purchase.stateTax;

        console.log(calculation);
    }
}

purchase.totalPrice();