function secretPassword() {
    const password = 'xh38sk';

    return {
        guessPassword: function (guess) {
            if (guess === password) 
                return true;
            else 
                return false;            
        }        
    }

}

const passwordGame = secretPassword();
console.log(passwordGame.guessPassword('heyisthisit?'));    // false
console.log(passwordGame.guessPassword('xh38sk'));         // true