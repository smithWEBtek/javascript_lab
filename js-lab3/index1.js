let savedStoreNH1 = 
{
  "state": "NH",
  "multiplier": 1,
  "items": {
    "crackers": 4,
    "soup": 2,
    "produce": {
      "fruits": {
        "figs": 4,
        "grapes": 7,
        "kiwi": 6
      },
      "vegetables": {
        "tomatoes": 3,
        "celery": 1,
        "beets": 2
      }
    }
  }
}

let items = [
  ["bread", 12],
  ["cheese", 3],
  ["jelly", 2],
  ["peanut butter", 4]
]
let store = []
const retailPriceForTen = retailPriceMaker(10)
const retailPriceForThree = retailPriceMaker(3)
const retailPriceForNH = retailPriceMaker(1)
const retailPriceForMA = retailPriceMaker(3.5)
const retailPriceForCA = retailPriceMaker(7.5)

class Item {
  constructor([name, manufacturePrice]){
    this.name = name
    this.manufacturePrice = manufacturePrice
    store.push(this)
  }
  retailPrice(marketMultiplier){
    return marketMultiplier * this.manufacturePrice;
  }
}

class Store {
  constructor(state, multiplier, items = {} ){
    this.state = state
    this.multiplier = multiplier 
    this.items = {}
  }
}

function retailPriceMaker(manufacturePrice){
  return function(marketMultiplier){
    return marketMultiplier * manufacturePrice;
  }
}
 
function loadItems(){
  items.forEach((item) => {
    let newItem = new Item(item)
  })
  console.log(store)
}

//  add retail price to each item w/ marketMultiplier of 1.4
function loadItemsByState(state, cb){
  `loadItems${state}(${cb})`
}