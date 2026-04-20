// Function Practice

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
