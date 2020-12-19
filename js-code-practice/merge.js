


// const merge = function (arrayOne, arrayTwo) {
//   for (let i = 0; i < arrayTwo.length; i++) {
//     arrayOne.push(arrayTwo[i])
//   }
  
//   for (let i = 0; i < arrayOne.length; i++) {
//     console.log("first loop " + arrayOne[i])

//     for (let j = 0; j < arrayOne.length; j++) {
//       console.log("second loop " + arrayOne[j])

//       if (arrayOne[j] > arrayOne[j + 1]) {
//         console.log("j + 1 " + arrayOne[j + 1])
//         let newArray = arrayOne[j];
//         console.log("new array :" + newArray)

//         arrayOne[j] = arrayOne[j + 1];

//         console.log("j " + arrayOne[j])
//         console.log("new Array :" + newArray)
//         arrayOne[j + 1] = newArray

//         console.log("new array " + newArray)

//         console.log("arry j :" + arrayOne[j])
//       }
  
//     }
//   }
//   return arrayOne
// }


// console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);

const merge = function (arrayOne, arrayTwo) {
  
  for (let i = 0; i < arrayTwo.length; i++) {
    arrayOne.push(arrayTwo[i])
  }
  
  for (let i = 0; i < arrayOne.length; i++) {
    
    for (let j = 0; j < arrayOne.length; j++) {
    
      if (arrayOne[j] > arrayOne[j + 1]) {
        let newArray = arrayOne[j];
        arrayOne[j] = arrayOne[j + 1];
        arrayOne[j + 1] = newArray
      }
  
    }
  }
  return arrayOne
}




console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);