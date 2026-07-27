const name  = "SATYAM"
const repoCount = 50

console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('Satyamhd-sg-com')

console.log(gameName[5]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4)

console.log(newString);

const anotherString = gameName.slice(-9,4)

console.log(anotherString);

const newStringOne = "   Satyam    "
console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://satyam.com/satyam%20kumar"

console.log(url.replace ('%20', '-'));

console.log(url.includes ("satyam"));

console.log(gameName.split('-'))