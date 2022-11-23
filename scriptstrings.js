// 1. Given the user input make all letters uppersase and log it to console.

const userInput = prompt("Write something");
console.log(userInput.toUpperCase());

// 2. Given the user inptu make all letters in lowercase format.
const userInput2 = prompt("Write something");
console.log(userInput2. toLowerCase());

// 3. Given the user input make every first letter of new word capitilized.

const userInput3 = prompt("Write something longer");

const arr = userInput3.split(" ");

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

const str = arr.join(" ");
console.log(str);


// 5. Given the user input reverse it and log it to console.

const userInput4 = prompt("Write something");

const userInputReverse = userInput4.split("").reverse().join("");
console.log(userInputReverse);


