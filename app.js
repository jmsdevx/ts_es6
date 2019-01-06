//es6
//let & const
var variable = "let test";
console.log(variable);
variable = "another test";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
//block scope
function reset() {
    var variable = null;
    console.log(variable);
}
console.log(variable);
//arrow functions
////normal
console.log("AF");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
////arrow
var multiplyNumber = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumber(3, 10));
var greet = function () {
    console.log("hello");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("friend");
//DEFAULT PARAMETERS
console.log("DP");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
// Rest and Spread Operators
console.log("R/S");
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 10, -3));
//spread operator turns an array into a list of values like above
console.log(Math.max.apply(Math, numbers));
//rest parameter
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 6));
//can now also use tuples for rest operator type expression!
//destructuring
console.log("DESTRUCTURING");
////arrays
var myHobbies = ["Cooking", "Sports"];
console.log(myHobbies[0], myHobbies[1]);
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
////objects
var userData = { userName: "Max", age: 27 };
var userName = userData.userName, age = userData.age;
console.log(userName, age);
