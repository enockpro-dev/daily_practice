// JavaScript Beginner Practice
// Task 1: Print a message
console.log("Hello, world!");

// Change the text above to your name, for example:
// console.log("Hello, Edv!");


// Task 2: Try simple math
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);

// Change the numbers and run the file again.


// Task 3: Store a value in a variable
let name = "Edv";
console.log(name);

// Change "Edv" to your own name.


// Task 4: Store your age
let age = 20;
console.log(age);

// Change 20 to your real age.


// Task 5: Print a full sentence with your values
console.log("My name is " + name);
console.log("I am " + age + " years old.");


// Mini challenge:
// 1. Change the name
// 2. Change the age
// 3. Add one more console.log() line about your favorite food


// ----------------------------
// Next Practice Tasks
// ----------------------------

// Task 6: Add two numbers from variables
let num1 = 4;
let num2 = 6;
console.log(num1 + num2);

// Change the numbers and run again.


// Task 7: Join words together
let firstName = "Edv";
let lastName = "Student";
console.log(firstName + " " + lastName);

// Change the values to your real names.


// Task 8: Make a sentence with variables
let country = "Uganda";
console.log("I live in " + country + ".");

// Change Uganda to your country.


// Task 9: Compare numbers
console.log(5 > 3);
console.log(2 > 8);
console.log(10 === 10);

// These print true or false.


// Task 10: Check your age
let myAge = 20;
console.log(myAge > 18);

// Change the number and see what happens.


// Mini challenge 2:
// 1. Create a variable called favoriteColor
// 2. Create a variable called favoriteNumber
// 3. Print: "My favorite color is blue"
// 4. Print: "My favorite number is 7"


// ----------------------------
// If Statement Practice
// ----------------------------

// Task 11: Simple if statement
let isRaining = true;

if (isRaining) {
  console.log("Take an umbrella.");
}

// Change true to false and run again.


// Task 12: If and else
let isHungry = false;

if (isHungry) {
  console.log("Eat some food.");
} else {
  console.log("You are okay for now.");
}

// Change the value and test again.


// Task 13: Check age
let studentAge = 20;

if (studentAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult yet.");
}

// Try different ages.


// Task 14: Check a number
let number = 7;

if (number > 10) {
  console.log("The number is big.");
} else {
  console.log("The number is small.");
}


// Task 15: Check your favorite color
let favoriteColor = "blue";

if (favoriteColor === "blue") {
  console.log("Blue is a cool color.");
} else {
  console.log("That is a nice color too.");
}


// Mini challenge 3:
// 1. Create a variable called hasMoney
// 2. If it is true, print "I can buy a snack"
// 3. If it is false, print "I need to save money"
// 4. Create a variable called score
// 5. If score is 50 or more, print "You passed"
// 6. Else, print "You failed"


// ----------------------------
// Function Practice
// ----------------------------

// Task 16: A simple function
function sayHello() {
  console.log("Hello!");
}

sayHello();


// Task 17: A function with a name
function greetUser(userName) {
  console.log("Hello, " + userName + "!");
}

greetUser("Edv");

// Change "Edv" to your name.


// Task 18: A function that adds numbers
function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(4, 5);
addNumbers(10, 3);

// Change the numbers and test again.


// Task 19: A function that returns a value
function multiplyNumbers(a, b) {
  return a * b;
}

let answer = multiplyNumbers(3, 4);
console.log(answer);


// Task 20: Use a function with if
function checkPass(mark) {
  if (mark >= 50) {
    console.log("You passed.");
  } else {
    console.log("You failed.");
  }
}

checkPass(80);
checkPass(30);


// Mini challenge 4:
// 1. Create a function called sayFood
// 2. Let it print your favorite food
// 3. Create a function called showAge that takes one number
// 4. Let it print: "I am 20 years old"
// 5. Call both functions


// ----------------------------
// Loop Practice
// ----------------------------

// Task 21: Count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// Task 22: Count from 5 to 1
for (let i = 5; i >= 1; i--) {
  console.log(i);
}


// Task 23: Print the same word many times
for (let i = 1; i <= 3; i++) {
  console.log("JavaScript");
}

// Change 3 to another number.


// Task 24: Use a variable in a loop
let message = "I am learning JS";

for (let i = 1; i <= 4; i++) {
  console.log(message);
}


// Task 25: Add numbers in a loop
let total = 0;

for (let i = 1; i <= 5; i++) {
  total = total + i;
}

console.log(total);

// This adds 1 + 2 + 3 + 4 + 5


// Mini challenge 5:
// 1. Write a loop that prints numbers from 1 to 10
// 2. Write a loop that prints your name 5 times
// 3. Make a variable called sum
// 4. Use a loop to add numbers from 1 to 3
// 5. Print the final sum


// ----------------------------
// Array Practice
// ----------------------------

// Task 26: Make an array
let fruits = ["apple", "banana", "mango"];
console.log(fruits);


// Task 27: Get one item from an array
console.log(fruits[0]);
console.log(fruits[1]);

// Arrays start counting at 0.


// Task 28: Change an item
fruits[1] = "orange";
console.log(fruits);


// Task 29: Add a new item
fruits.push("grapes");
console.log(fruits);


// Task 30: Loop through an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// Mini challenge 6:
// 1. Create an array called colors
// 2. Put 3 colors inside it
// 3. Print the first color
// 4. Change the second color
// 5. Add one more color
// 6. Use a loop to print all colors


// ----------------------------
// Object Practice
// ----------------------------

// Task 31: Make an object
let person = {
  name: "Edv",
  age: 20,
  country: "Uganda"
};

console.log(person);


// Task 32: Get values from an object
console.log(person.name);
console.log(person.age);


// Task 33: Change a value
person.age = 21;
console.log(person.age);


// Task 34: Add a new value
person.favoriteFood = "Rice";
console.log(person.favoriteFood);


// Task 35: Use object values in a sentence
console.log(person.name + " is " + person.age + " years old.");
console.log(person.name + " lives in " + person.country + ".");


// Mini challenge 7:
// 1. Create an object called car
// 2. Give it these values: brand, color, year
// 3. Print the brand
// 4. Change the color
// 5. Add a new value called owner
// 6. Print one full sentence about the car


// ----------------------------
// Array Method Practice
// ----------------------------

// Task 36: Find how many items are in an array
let animals = ["dog", "cat", "cow", "goat"];
console.log(animals.length);


// Task 37: Add an item at the end
animals.push("sheep");
console.log(animals);


// Task 38: Remove the last item
animals.pop();
console.log(animals);


// Task 39: Check if an array has a value
console.log(animals.includes("cat"));
console.log(animals.includes("lion"));

// This prints true or false.


// Task 40: Join array items into one string
let animalText = animals.join(", ");
console.log(animalText);


// Mini challenge 8:
// 1. Create an array called foods
// 2. Put 4 foods inside it
// 3. Print the length of the array
// 4. Add one more food
// 5. Remove the last food
// 6. Check if one food is inside the array
// 7. Join all foods into one line and print it
