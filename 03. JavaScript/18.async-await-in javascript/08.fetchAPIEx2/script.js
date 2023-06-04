async function getQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    console.log(data);
}

// Calling the function
getQuotes();