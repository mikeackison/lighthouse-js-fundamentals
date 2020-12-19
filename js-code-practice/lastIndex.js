/*
Define a function lastIndexOf.
When this function is given an array and a value, 
it should return the index of the last time the value occurs in the array. 
If the value never occurs, the function should return -1.

For example:
lastIndexOf([ 0, 1, 4, 1, 2 ], 1);	 ==> 3
lastIndexOf([ 0, 1, 4, 1, 2 ], 2);	 ==> 4
lastIndexOf([ 0, 1, 4, 1, 2 ], 3);	 ==>-1
lastIndexOf([ 5, 5, 5 ], 5);	2      ==> 2
lastIndexOf([], 3);	-1               ==>-1

You may paste the following code after your function definition to help you verify it works correctly:

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

*/

const lastIndexOf = function (array, value) {
  let output = -1
  if (array.length === 0) {
    return output = -1;
  } else {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] === value) {
        return output = i
      }
    }
  }
  return output;
}






console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([0, 0, 0, 0, 5, 0], 5), "=?", 4);
console.log(lastIndexOf([5, 5, 5, 5, 0], 5), "=?", 3);


// const lastIndexOf = function (array, value) {
//   if (array.length === 0) {
//     return -1;
    
//   } else {
//     for (let i = array.length - 1; i >= 0; i--) {
//      if (array[i] !== value) {
//         return -1;
//       } else if (array[i] === value) {
//         return i
//       }
//     }
//   }
// }