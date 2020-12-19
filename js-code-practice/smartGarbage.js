/*
We need to complete a function called smartGarbage(trash, bins),
which will be responsible for increasing the garbage count for waste,
recycling, or compost depending on what trash is submitted.

Our function will receive two arguments:

The first argument, trash, is a string that will tell our function what type of item is being submitted.
The second argument, bins, is an object containing three properties
(waste, recycling, and compost), which hold some numerical value.
Our function must increase the correct value in the bins object, and then return the newly updated object.
Objects in JavaScript
We will need to access the proper value in the bins object using the `trash` as the key.
If you're having trouble with this, take a look online to see how to use 
square bracket notation to access values in a JavaScript object.

Note: When we’re referencing a variable in the bracket notation, we can skip the quotes.

For example, say we called the function with the following arguments.

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

The smartGarbage function should return the object:

{
  waste: 4,
  recycling: 3,
  compost: 5
}
*/




const smartGarbage = function (trash, bins) {
  if (trash === 'recycling') {
    bins.recycling = bins.recycling + 1
  } else if (trash === 'waste') {
    bins.waste = bins.waste + 1
  } else if (trash === 'compost') {
    bins.compost = bins.compost + 1
  } else {
    return undefined
  }
  return bins
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))

// smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 })
// smartGarbage('waste', { waste: 1, recycling: 2, compost: 5 })
// smartGarbage('compost', { waste: 0, recycling: 2, compost: 5 })