(function() {
    console.log("Hello");
}) ();

(function(num) {
    console.log(num*num);
}) (5);

//named self-invoking function
(function sum(num1, num2) {
    console.log(num1+num2);
}) (5, 7);