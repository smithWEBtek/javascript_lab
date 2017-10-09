const text = 
"Mark Johansson, waffle iron, 80, 2, \
Mark Johansson, blender, 200, 1, \
Mark Johansson, knife, 18, 4, \
Nikita Smith, waffle iron, 80, 2, \
Nikita Smith, blender, 10, 2, \
Nikita Smith, knife, 20, 3"

const newText = []
const newJson = {}

const textArr = function (textSample){
  let newText = textSample.split(', ')
  for (let el of newText){
    el.trim
  }
  newTextToArrays(newText)
}
 
const newTextToArrays = function (arr){
  for (let i = 0, counter = 0; i < arr.length; i++){
    if (i === 0 && i < arr.length/4){
      newText.push({ 
        "name": arr[i],
        "product": arr[i+1],
        "price": parseInt(arr[i+2]),
        "qty": parseInt(arr[i+3])
      })
    } else {
      i += 3
      if (i < arr.length){
        newText.push({ 
          "name": arr[i],
          "product": arr[i+1],
          "price": parseInt(arr[i+2]),
          "qty": parseInt(arr[i+3])
        })
      }
    }
  }
  console.log(newText)
}
