const text = [
  ["Mark Johansson", "waffle iron", "80", "2"],
  ["Mark Johansson", "blender", "200", "1"],
  ["Mark Johansson", "knife", "18", "4"],
  ["Nikita Smith", "waffle iron", "80", "2"],
  ["Nikita Smith", "blender", "10", "2"],
  ["Nikita Smith", "pot", "20", "3"]
]

const output = text.reduce((customers, line) => {
  customers[line[0]] = customers[line[0]] || []
  customers[line[0]].push({ 
    name: line[1],
    price: parseInt(line[2]),
    qty: parseInt(line[3]) 
  })
  return customers
}, {})

console.log('output', JSON.stringify(output, null, 2))


// output {
//   "Mark Johansson": [
//     {
//       "name": "waffle iron",
//       "price": 80,
//       "qty": 2
//     },
//     {
//       "name": "blender",
//       "price": 200,
//       "qty": 1
//     },
//     {
//       "name": "knife",
//       "price": 18,
//       "qty": 4
//     }
//   ],
//   "Nikita Smith": [
//     {
//       "name": "waffle iron",
//       "price": 80,
//       "qty": 2
//     },
//     {
//       "name": "blender",
//       "price": 10,
//       "qty": 2
//     },
//     {
//       "name": "pot",
//       "price": 20,
//       "qty": 3
//     }
//   ]
// }