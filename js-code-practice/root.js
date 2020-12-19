/*
Complete the logic in the function judgeVegetable.

For this challenge, we'll need to implement a function called judgeVegetable()
that will decide which vegetable is best based on a given judging characteristic. 
Our function will receive two parameters: a list of veggies(as an array of objects), 
and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted 
(vegetables.submitter) the vegetable with the highest ranking in the provided category.

If we called the function with the following arguments.

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)
The judgeVegetable function would return the string:

"Old Man Franklin"



*/


const judgeVegetable = function (vegetables, metric) {
  let position = 0
  let index = 0

  for (let i = 0; i < vegetables.length; i++) {

    if (vegetables[i][metric] > position) {
      position = vegetables[i][metric]
      // console.log("current object:")
      // console.log(vegetables[i])
      // console.log("into if statement, position is now: metric = " + position)
      index = i
      // console.log("if statement index " + index)
    }
    // console.log("out of if statement, go with index " + index + " it is the highest")
  } return vegetables[index].submitter
};


// const judgeVegetable = function (vegetables, metric) {
//   let position = 0

//   let index = 0

//   for (let i = 0; i < vegetables.length; i ++){
//       console.log(vegetables[i][metric])
//       console.log("for loop i = " + i)
//       console.log("for loop vegetables[i][metric] = " + vegetables[i][metric])


//       if(vegetables[i][metric] > position){
//         position = vegetables[i][metric]
//         console.log("current object:")
//         console.log(vegetables[i])
//         console.log("into if statement, position is now: metric = " + position)
//         console.log("if statement i " + i)
//         index = i
//         console.log("if statement index " + index)
//       } 
//       console.log("out of if statement, go with index " + index + " it is the highest")
//     }return vegetables[index].submitter
// };


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric))








