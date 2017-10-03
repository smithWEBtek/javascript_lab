function capCollection(collection){
  collection.map1(function (item) { console.log(item.toUpperCase())
  })
}

function capOne(element){
  return element.toUpperCase()
}

function map1(arr){
  let newArr = []
  for(const element of arr){
    if (typeof element === 'number'){
     newArr.push(multiplyBySame(element))
    } else 
    if (typeof element === 'string'){
      newArr.push(capOne(element))
    }
  }
  return newArr
}

function multiplyBySame(num){
  return (num * num)
}

function map2(array, callback) {
  const newArr = [];
  for (const element of array) {
    newArr.push(callback(element));
  }
  return newArr;
}

const newEngineers = map2(oldAccounts, function (account) {
  return Object.assign({}, account, { accessLevel: 'admin' })
})

const userIDs = map2(newEngineers, function(engineer){
  return engineer.name + ': ' + engineer.userID
})

const equippedEngineers = newEngineers.map(function (eng) {
  return Object.assign({}, eng, { equipment: 'Laptop' })
})
