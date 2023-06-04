async function getQuotes() {
    try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("API request closed");
    }
}


// Calling the function
getQuotes();