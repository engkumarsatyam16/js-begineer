// permitive

// 7 types = string, number, boolean, null, undefined, BigInt, symbol

const score=100
const scoreValue= 100.4

const isloggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 93429428483842492n

// Refrence (Non Permitive)= Arrray , object, function

const heros = ["Shaktiman", "naagraaj", "doga"]

let myObj = {
    name: "satyam",
    age: 21,
}


const myFunction = function(){
    // console.log("hello world");
}
 
console.log(typeof outsideTemp);


// __________________________________________________________________________________


// Heap Memory(Permitive) , Stack Memory(Non Permitive)

let myYoutubename = "satyam kumar"

let anothername = myYoutubename
anothername = "toon world"

console.log(myYoutubename);
console.log(anothername);


let userOne ={
     email : "user@google.com",
     upi : "user@ybl"
}

let userTwo = userOne

   userTwo.email =  "satyam@google.com"

   console.log(userOne.email);
   console.log(userTwo.email);
   






