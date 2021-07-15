// function randomFraction() {

//   // Only change code below this line
//   let result = 0;
//   while (result === 0) {
//     result = Math.random();
//   }


//   return result;

//   // Only change code above this line
// }


function randomWholeNum() {

  // Only change code below this line
  let result = 0;
  while (result === 0) {
  result = Math.floor(Math.random() * 10);
  return result;
  }
}

console.log(randomWholeNum());
 
 