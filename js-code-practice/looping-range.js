/*
Define a function called range

The function takes 3 integer parameters: start, end, and step.
The function should return an array of numbers from start to end counting by step.
range(0, 10, 2);  ==> output	[ 0, 2, 4, 6, 8, 10 ]

The function should return an empty array [] if given incorrect parameters, such as:

start, end, or step being undefined
start being greater than end
step being 0, or negative

At some point in your code, you may want to use some_array.push(some_value)
You may paste the following code after your function definition to help you verify it works correctly:
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

*/

const range = function (start, end, step) {
  let someArray = []; 
    if (start > end)
      return someArray;
    else if ((step <= 0))
      return someArray;
    else if ((start === undefined) || (end === undefined) || (step === undefined)) 
      return someArray;
    else {
      for (let i = start; i <= end; i = i + step) {
        someArray.push(i)
      }
      return someArray
    }
  
}



console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));