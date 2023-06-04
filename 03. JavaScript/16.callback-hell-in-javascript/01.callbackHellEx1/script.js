setTimeout(() => {
    console.log("Hello");

    setTimeout(() => {
        console.log("Hey");

        setTimeout(() => {
            console.log("Namaste");

            setTimeout(() => {
                console.log("Hi");

                setTimeout(() => {
                    console.log("Bonjour");
                }, 2000);                
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);