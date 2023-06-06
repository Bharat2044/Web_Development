const names = ["superman", "flash"];
const newNames = ["Batman", ...names, "thor"];  // SPREAD

const sitename = "pwskills";
console.log([...sitename]);         // SPREAD

function pwskills(...values){       // REST
    return values;
}

console.log(pwskills("superman", "flash"));