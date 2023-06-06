const btn = document.getElementById("button");

btn.addEventListener("click", () => {
    let heading = document.getElementById("heading");
    if (heading.innerText === "The most affordable learning platform")
        heading.innerText = "PW Skills";
    else
        heading.innerText = "The most affordable learning platform";
});
