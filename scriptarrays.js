const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

const firstName = characters.map(function (element) {
    return element.name;
});

console.log(firstName);

const heights = characters.map(function (element) {
    return element.height;
});
console.log(heights);

const nameAndHeight = characters.map ((characters) => ({
    name: characters.name,
    name: characters.height,
}));
console.log(nameAndHeight);

const nameOnly = characters.map((characters) => characters.name.split(" ")[0]);

console.log(nameOnly);

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

const mass = characters.reduce((some, current) => some + current.mass, 0);
console.log(`Summary of all mass is ${mass}`);


const height = characters.reduce((some, current) => some + current.height, 0);
console.group(`Summary of all height is ${height}`);

const totalNumber = characters.reduce(
  (some, current) => some + current.eye_color,
  0
); 
console.log(`Total number of character by eye color is${totalNumber}`);


const totalNumOfCharacters = characters.reduce(
  (acc, cur) => acc + cur.name.length,
  0
);

console.log(totalNumOfCharacters);

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

const filterMass = characters.filter((characters) => characters.mass > 100);
console.log(filterMass);



const charLess = characters.filter((characters) => characters.height < 200);
console.log(charLess);


const charGenderMale = characters.filter(
  (characters) => characters.gender === "Male"
);
console.log(charGenderMale);


const charGenderFemale = characters.filter(
  (characters) => characters.gender === "Female"
);

console.log(charGenderFemale);


//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

const sortMass = characters.sort((a, b) => a.mass - b.mass);
console.log(sortMass);



const sortHeight = characters.sort((a, b) => a.height - b.height);
console.log(sortHeight);


const byName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  else return 1;
});
console.log(byName);


const genderSorting = characters.sort((a, b) => {
  if (a.gender === "male" && b.gender === "male") return 1;
  else return -1;
});
console.log(genderSorting);

//1. Does every character have blue eyes?
const charEvery = characters.every(
  (characters) => characters.eye_color === "blue"
);
console.log(charEvery);


//2. Does every character have mass more than 40?
const charMass = characters.every((characters) => characters.mass > 40);
console.log(charMass);
//3. Is every character shorter than 200?
const charShort = characters.every((characters) => characters.height < 200);
console.log(charShort);
//4. Is every character male?
const charGender = characters.every(
  (characters) => characters.gender === "Male"
);
console.log(charGender);

//1. Is there at least one male character?
const maleChar = characters.some((characters) => characters.gender === "Male");
console.log(maleChar);

//2. Is there at least one character with blue eyes?
const blueEyes = characters.some(
  (characters) => characters.eye_color === "blue"
);
console.log(blueEyes);

//3. Is there at least one character taller than 210?
const tallerHeight= characters.some((characters) => characters.height > 210);
console.log(tallerHeight);

//4. Is there at least one character that has mass less than 50?
const lessMass = characters.some((characters) => characters.mass < 50);
console.log(lessMass);
