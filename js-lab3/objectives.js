class User {
  constructor(name){
    this.id = ++userId
    this.name = name
 
    // insert in the user to the store
    store.users.push(this)
  }
  setUser(user){
    this.userId = user.id
  }
}

let itemId = 0
class Item {
  constructor(price, name){
    this.id = ++itemId
    // increment itemId, then assign the itemId as the instance's id
    this.name = name
    this.price = price
  }
}

let item = new Item('trousers', 24)
// {id: 1, name: 'trousers', price: 24}
let secondItem = new Item('tshirt', 8)
// {id: 2, name: 'tshirt', price: 8}
new User('bob')

let store = {items: [], users: []}
// initialize store with key of items and users that each point to an empty array
 
let userId = 0
 