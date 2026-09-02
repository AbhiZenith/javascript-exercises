const removeFromArray = function (arr, ...args) {
  args.forEach(num => {
    let index = arr.indexOf(num);
    

    while (index > -1) {
      arr.splice(index, 1);
      index = arr.indexOf(num); 
    }
  });
  
  return arr;
};


// const removeFromArray = function (arr, ...args) {
//     args.forEach(num => {
//         arr.forEach(item => {
//             const index = arr.indexOf(num)
//             if (index > -1) arr.splice(index, 1)

//         });
//     });
//     return arr;
// };


// Do not edit below this line
module.exports = removeFromArray;
