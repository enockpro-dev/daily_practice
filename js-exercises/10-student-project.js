// Small Practice Project

// Project 1: Student Profile
// Here we use variables, an object, an array, and if statement together.

let student = {
  name: "Edv",
  age: 20,
  country: "Uganda",
  isLearningJS: true
};

let hobbies = ["music", "football", "reading"];

console.log("Student name: " + student.name);
console.log("Age: " + student.age);
console.log("Country: " + student.country);
console.log("Hobbies: " + hobbies.join(", "));

if (student.isLearningJS) {
  console.log(student.name + " is learning JavaScript.");
} else {
  console.log(student.name + " is not learning JavaScript yet.");
}


// Task 46: Change the student information to your own
// Change the name, age, country, and hobbies.


// Task 47: Add one more hobby
hobbies.push("coding");
console.log(hobbies);


// Task 48: Print all hobbies one by one
for (let i = 0; i < hobbies.length; i++) {
  console.log("Hobby: " + hobbies[i]);
}


// Task 49: Check the student's age
if (student.age >= 18) {
  console.log(student.name + " is an adult.");
} else {
  console.log(student.name + " is not an adult.");
}


// Task 50: Write a function for the student
function introduceStudent(person) {
  console.log(
    "My name is " + person.name + ", I am " + person.age + " years old, and I live in " + person.country + "."
  );
}

introduceStudent(student);


// Mini challenge 10:
// 1. Make a new object called teacher
// 2. Give it name, age, subject, and country
// 3. Make an array of 3 subjects or skills
// 4. Print the teacher information
// 5. Use a loop to print the skills
// 6. Write a function to introduce the teacher
