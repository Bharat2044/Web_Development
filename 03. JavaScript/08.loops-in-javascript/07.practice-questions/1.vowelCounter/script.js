// We want to count the number of vowels in a person's name. Given a name as input, the program should iterate
// through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should becounted


let name = "Bharat Kumar";
let count = 0;

for(let i=0; i<name.length; i++) {
    if(name[i]=='a' || name[i]=='A' || name[i]=='e' || name[i]=='E' || name[i]=='i' || name[i]=='I' || name[i]=='o' || name[i]=='O' || name[i]=='u' || name[i]=='U')
        count++;
}

console.log(count);