 
// let arrowFunction = function() {
//   return "arrow Functions are great!"
// }
 
 
// updating to use an arrow function
// let arrowFunction = (num1, num2) => {
//   // return 'Arrow functions are great!'
//   return (num1 * num2)
// };

let arrowFunction = (num1, num2) => num1 * num2

let square = (n) => n * n

square(3) // 9

let notSquare = (n) => { n * n }
notSquare(3)
// undefined

let backToSquared = (n) => { return n * n }
backToSquared(3)
// 9

function iHaveAName() {
  console.log(iHaveAName.name)
}

(() => {}).name // ''

let myMapper = function(arr){return arr.map((n) => n*n)}

// let person = {
//   firstName: 'bob',
//   greet: function(){
//     return function reallyGreet(){
//       return `Hi, I'm ${this.firstName}`
//  // }.bind(this)
//     }
//   }
// }
// person.greet()

// with arrow function
 
// let person = {
//   firstName: 'bob',
//   greet: function(){
//     return () => {
//       return () => {
//         return () => {
//           return () => {
//             return () => {
//               return () => {
//                 return () => {
//                   return () => {
//                     return `Hi, I'm ${this.firstName}`
//                   }
//                 }
//               } 
//             }
//           }
//         }
//       } 
//     }
//   }
// }

let person = {
  firstName: 'bob',
  greet: function(){
    return [1, 2, 3].map(() => { return this })
  }
}