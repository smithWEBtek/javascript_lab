class User {
  constructor(name, favoriteBand){
    this.name = name
    this.favoriteBand = favoriteBand
  }
  favoriteBandMatches(bands){
    bands.filter(function(band){
      if(band === this.favoriteBand){
        console.log(band)
      }
    }.bind(this))
  }
}
 

let billy = new User('billy', 'paul simon')
let jane = new User('jane', 'deli creeps')
// 'paul simon'
// 'deli creeps'

billy.favoriteBandMatches(['paul simon', 'the kooks', 'pat sayjack', 'deli creeps'])
jane.favoriteBandMatches(['paul simon', 'the kooks', 'pat sayjack', 'deli creeps'])