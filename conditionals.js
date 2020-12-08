
//if statements
// EXAMPLE 1
const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside.")



// temperature example
// EXAMPLE 2

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

// temperature example using numbers
// EXAMPLE 3
const temp = -1;

if (temp < 0) {
  console.log("Make sure to pick out a scarf.");
} else if (temp < 15) {
  console.log("Short sleeves won't cut it.");
} else {
  console.log("Short sleeves are fine!");
}


// Logical Operators
// EXAMPLE 1

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are elligable to vote.")
}

// EXAMPLE 2 

const temperature = 41

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

// EXAMPLE 3 

if (!raining) {
  console.log("Leave your umbrella at home!");
}
