
age = 12

const whichSchool  = function (age) {
  if (age < 13) {
    console.log("Elementary School");
  } else if (age >= 13 && age < 19) {
    console.log("Secondary School")
  } else {
    console.log("Lighthouse Labs");
  }
}

console.log("I am " + age + ". Which school should I go to?");
whichSchool(age)


// Elementary School if age is below 13
// Secondary School if age is between 13 and 18 (both inclusive)
// Lighthouse Labs in all other cases.
// for the exercise use return not console.log
