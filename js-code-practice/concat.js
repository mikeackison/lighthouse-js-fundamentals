/*
Define a function called concat

The function should, when given two arrays, concatenate the arrays together.

For example:

concat([ 1, 2, 3 ], [ 4, 5, 6 ]);	    =>[ 1, 2, 3, 4, 5, 6 ]
concat([ 0, 3, 1 ], [ 9, 7, 2 ]);	    =>[ 0, 3, 1, 9, 7, 2 ]
concat([], [ 9, 7, 2 ]);	            =>[ 9, 7, 2 ]
concat([ 5, 10 ], []);	              =>[ 5, 10 ]

You may paste the following code after your function definition to help you verify it works correctly:
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

*/

const concat = function (arrayOne, arrayTwo) {
  for (let i = 0; i < arrayTwo.length; i++) {
    arrayOne.push(arrayTwo[i])
  }
  return arrayOne;
}

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);