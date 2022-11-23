// numberToString(Number)
// Converts a number a string.
// Parameters
// n: number
// Returns: string, the number as a string

let numberToString = 223;
let logger = numberToString.toString(2);
console.log(logger);

// decrease(n)
// Subtracts one from a given number
// Parameters
// n: number
// Returns: number

const increaseN = n => n - 1;
const logger2 = increaseN(20);
console.log(logger2);

// add(x, y)
// Adds two numbers.
// Parameters
// x: number
// y: number
// Returns: number, the sum

function addXandY(x, y) {
    const theSum = x + y;
    return theSum;
    }
    
    const theSumAndNumber = addXandY(2, 3);
    console.log(theSumAndNumber);

    // subtract(x, y)
// Subtracts the second number from the first.
// Parameters
// x: number
// y: number
// Returns: number, the difference



function addXandY(x, y) {
    const theSum = y - x;
    return theSum;
    }

    const theSumAndNumber2 = addXandY(10, 5);
    console.log(theSumAndNumber2);

// multiply(x, y)
// Multiplies two numbers.
// Parameters
// x: number
// y: number
// Returns: number, the product


function addXandY(x, y) {
    const theSum = x * y;
    return theSum;
    }

    const theSumAndNumber3 = addXandY(10, 5);
    console.log(theSumAndNumber3);

    // divide(x, y)
// Divides the first number by the second.
// Parameters
// x: number
// y: number
// Returns: number, the quotient

function addXandY(x, y) {
    const theSum = x / y;
    return theSum;
    }

    const theSumAndNumber4 = addXandY(20, 4);
    console.log(theSumAndNumber4);

    // square(x)
// Multiplies a number by itself.
// Parameters
// x,: number, number to be squared
// Returns: number, squared

function addXandY(x) {
    const theSum = x * x;
    return theSum;
    }

    const theSumAndNumber5 = addXandY(5);
    console.log(theSumAndNumber5);

    // calculate(operation, x, y)
// Prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4". Returns the result.
// Parameters
// operation: string, "add", "subtract", "multiply", or "divide"
// x: number
// y: number
// Returns: number, the result

const a = 10
const b = 5
const operation = "/";

switch (operation) {
    
}

// isGreaterThan(a, b)
// Returns true if a is greater than b
// Parameters
// a: number
// b: number
// Returns: boolean, a is larger than b

const isGreaterThan = function(a, b) {
    if (a > b) {
        return true;
    } else {
        return false;
    }
}

const logger3 = isGreaterThan(10, 2);
console.log(logger3);

// isLessThan(a, b)
// Returns true if a is less than b
// Parameters
// a: number
// b: number
// Returns: boolean, a is smaller than b

const isLessThan = function(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
}

const logger4 = isLessThan(4, 12);
console.log(logger4);

// areEqual(a, b)
// Returns true if a and b are equal
// Parameters
// a: number
// b: number
// Returns: boolean, the numbers are equal

const areEqual = function(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

const logger5 = areEqual(2, 2);
console.log(logger5);

// minimum(x, y)
// Returns the smallest value of two numbers.
// Parameters
// a: number
// b: number
// Returns: number, the smallest number

const minimum = function(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

const logger6 = minimum(1, 5);
console.log(logger6);

// maximum(x, y)
// Returns the largest value of two numbers.
// Parameters
// a: number
// b: number
// Returns: number, the largest number


const maximum = function(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

const logger7 = maximum(10, 5);
console.log(logger7);

// isEven(n)
// Returns true if n is even.
// Parameters
// n: number
// Returns: boolean, the number is even

const isEven = function(n) {
    if (n % 2==0) {
        return true;
    } else {return false;
    }
}

const logger8 = isEven(2);
console.log(logger8);


// isOdd(n)
// Returns true if n is odd.
// Parameters
// n: number
// Returns: boolean, the number is odd

const isOdd = function(n) {
    if (n % 2==0) {
        return false;
    } else {return true;
    }
}

const logger9 = isOdd(1);
console.log(logger9);

// letterGrade(score, total)
// Returns a letter grade. "A": 90-100% "B": 80-89% "C": 70-79% "D": 60-69% "F": 0-59%
// Parameters
// score: number
// total: number, maximum possible score
// Returns: string, the score represented as a letter grade

function letterGrade(score, total) {
   
}

const logger10 = letterGrade(90, 100);
console.log(logger10);

// combine(word1, word2)
// Joins two strings with a space.
// Parameters
// word1: string
// word2: string
// Returns: string, joined the words joined with a space

function combine(word1, space, word2) {
    return word1 + space + word2;
}

const logger11 = combine("Hello", " ", "World");
console.log(logger11);


// createCircle(radius)
// Returns a circle object with the properties circumferance and area.
// Use Math.PI for the value π.
// Parameters
// radius: number
// Returns: object, circle

function createCircle(radius) {
    return 2 * Math.PI * radius;
  }
  
  console.log(Math.PI);
  console.log(createCircle(10));

  