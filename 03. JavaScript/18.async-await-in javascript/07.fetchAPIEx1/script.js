// fetch("URL") // URL of the API end-point
// .then((response) => response.json())
// .then((data) => console.log(data));


fetch("https://type.fit/api/quotes")
    .then(function f(response) {
        return response.json();
    })
    .then(function f(value) {
        console.log(value);
    })

// fetch("https://type.fit/api/quotes")
//     .then((response) => response.json())
//     .then((data) => console.log(data));