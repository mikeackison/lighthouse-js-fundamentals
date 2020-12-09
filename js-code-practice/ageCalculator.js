/*

Define a function called ageCalculator. This function should take 3 parameters:

name – a string representing someone's name
yearOfBirth – a number representing their year of birth
currentYear – a number representing the current year
The ageCalculator function should return a string explaining 
how old the person is. For example, if we called ageCalculator
("Suzie", 1983, 2015);, the return value should be as follows.
"Suzie is 32 years old."

You may paste the following code after your function definition to help you verify it works correctly.

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

*/

const ageCalculator = function (name, yearOfBirth, currentYear) {
   return name + " is " + (currentYear - yearOfBirth) + " years old."
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(ageCalculator("Ali", 2016, 2016));
console.log(ageCalculator("Suzie", 1984, 2016));
console.log(ageCalculator("Jack", 2004, 2016));

