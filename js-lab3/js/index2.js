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
 
// class Item {
//   constructor(name, manufacturePrice, marketType){
//     this.name = name
//     this.manufacturePrice = manufacturePrice
//   }
//   retailPrice(marketMultiplier){
//     let manufacturePrice;
//     return function(marketMultiplier){
//       return marketMultiplier * manufacturePrice;
//     }
//   }
// }


function createItem(){
  let ItemId = 0
  // return the class
  return class {
    constructor(name, manufacturePrice){
      this.name = name
      this.manufacturePrice = manufacturePrice
      this.id = ++ItemId;
    }
    retailPrice(marketType){
      return marketMultiplier * manufacturePrice;
    }
  }
}

const Item = createItem()

function retailPriceMaker(manufacturePrice){
  return function(marketMultiplier){
    return marketMultiplier * manufacturePrice;
  }
}

const retailPriceForTen = retailPriceMaker(10)
const retailPriceForThree = retailPriceMaker(3)
const retailPriceForNine = retailPriceMaker(9)

const retailPriceForNH = retailPriceMaker(1)
const retailPriceForMA = retailPriceMaker(3.5)
const retailPriceForCA = retailPriceMaker(7.5)


let tennisShoe = new Item('tennis shoe', 15)