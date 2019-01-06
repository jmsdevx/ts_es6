//es6

//let & const
let variable = "let test";
console.log(variable);

variable = "another test";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);

//block scope
function reset() {
  let variable = null;
  console.log(variable);
}

console.log(variable);

//arrow functions

////normal
console.log("AF");
const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};
console.log(addNumbers(10, 3));

////arrow
const multiplyNumber = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumber(3, 10));

const greet = () => {
  console.log("hello");
};
greet();

const greetFriend = (friend: string) => console.log(friend);
greetFriend("friend");

//DEFAULT PARAMETERS

console.log("DP");

const countdown = (start: number = 10): void => {
  console.log(start);
  while (start > 0) {
    start--;
  }
  console.log("Done!", start);
};

countdown();

// Rest and Spread Operators
console.log("R/S");

const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
//spread operator turns an array into a list of values like above
console.log(Math.max(...numbers));

//rest parameter
function makeArray(...args: number[]) {
  return args;
}

console.log(makeArray(1, 2, 6));

//can now also use tuples for rest operator type expression!

//destructuring
console.log("DESTRUCTURING");

////arrays
const myHobbies = ["Cooking", "Sports"];
console.log(myHobbies[0], myHobbies[1]);

const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

////objects
const userData = { userName: "Max", age: 27 };
const { userName, age } = userData;
console.log(userName, age);

//CLASSES AND OBJECTS
