// 1.Using if..else, write the code which gets a number via prompt and then shows in alert: 
// •	1, if the value is greater than zero, 
// •	-1, if less than zero, 
// •	0, if equals zero. 
// In this task we assume that the input is always a number. 

let value = prompt("Write down a number here");

if(value > 0) {
    alert(1);
} else if(value < 0) {
    alert(-1);
} else {
    alert(0);
}

// 3 Rewrite a code using tenerary operators 
// let result; 
// let a = 1; 
// let b = 2; 
 
// if (a + b < 5) { 
//   result = 'Below'; 
// } else { 
//   result = 'Over'; 
// } 

let results;
let a = 1;
let b = 2;

a + b < 5 ? results = 'Below' : results = 'Over';
console.log(results);

// 4. Want to find out how old you'll be? Calculate it!
// •	Store your birth year in a variable.
// •	Store a future year in a variable example 2050
// •	Calculate your 2 possible ages for that year based on the stored values.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

const birthYear = 1997;
const futureYear = 2050;
const result = futureYear - birthYear;
alert(`I will be ${result} in ${futureYear}`);
const secondResult = birthYear - futureYear;
alert(`I will be ${secondResult}`)

// 5.Give user the info!
// •	Write a javascript program that will ask user 3 questions in order
// •	What is your age?
// •	What is your name?
// •	what do you do for a living?
// •	After the user has given all the answers, alert the user that Username is {name answer from your user} age is {age answer from user} and he is doing {work answer from user)

let age = prompt('What is your age?');
let userName = prompt('What is your name');
let job = prompt('What do you do for a living?');
alert(`Username is ${userName}, age is ${age}, and you are doing ${job} for a living.`);
