String.prototype.truelength = function() {
    console.log(`True length is ${this.trim().length}`);
}

"Bharat  ".truelength();
"  Bharat Kumar".truelength();
"  Deepak    Singh   ".truelength();