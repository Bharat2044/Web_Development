let pattern = "pw";

let regExOne = new RegExp(pattern);

let flag = "gi"
let regExTwo = new RegExp(pattern, flag);

let regExThree = /pw/gi;

const strToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent";

let result = regExThree.test(strToCheck);
console.log(result);

const anotherResult = strToCheck.match(regExThree);
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regExThree, 'p-w');
console.log(oneMoreResult);


const webUrl = "https://pwskills.com/bharat%20kumar";

const useableUrl1 = webUrl.replace(/%20/, '-');
console.log(useableUrl1);

const useableUrl2 = webUrl.replace(/%\d0/, '-');
console.log(useableUrl2);