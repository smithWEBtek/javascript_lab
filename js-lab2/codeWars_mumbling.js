let str1 = "ZpglnRxqenU"
let str1result = "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
let str2 = "NyffsGeyylB"

function accum(s) {
  let output = s[0].toUpperCase()
  let arr = s.split('')
  for (let i = 0; i < arr.length; i++){
    let firstLetter = arr[i].toUpperCase()
    let thatthing = doXtimes(arr[i], i)
    output += firstLetter + thatthing + '-'
  }
  output = output.slice(1, output.length-1)
  output = output.replace(output[1],"")
  console.log(output)
  console.log(str1result)
}

function doXtimes(letter, num){
  let newStr = letter.toLowerCase()
  for (let i = 1; i < num; i++){
    newStr += letter.toLowerCase()
  }
  return newStr
}
