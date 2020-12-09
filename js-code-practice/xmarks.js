/*
Complete the logic in the function finalPosition.

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);

The finalPosition function should return the array:

[-1, 4]
*/



const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const finalPosition = function (moves) {
  let x = 0
  let y = 0
  let position = []
  for (let move of moves) {
    // console.log(move)
    if (move === "north") {
      y = y + 1
    } else if (move === 'west') {
      x = x - 1
    } else if (move === 'south') {
      y = y - 1
    } else if (move === 'east') {
      x = x + 1
    }
  }
  position.push(x, y)
  return position
}

console.log(finalPosition(moves))

console.log(finalPosition(moves))

console.log(finalPosition(moves))




// {
//   if (moves === 'north') {
//     x = x + 1
//   } if (moves === 'west') {
//     y = y - 1
//   } if (moves === 'south') {
//     x = x - 1
//   } if (moves === 'east') {
//     y = y + 1
//   }
// } 