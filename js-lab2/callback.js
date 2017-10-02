function doTo5(anything) {
  return anything(5);
}

function add12(n) {
  return n + 12;
}

function cb(word) {
  return "We need more " + word + "?, or more cowbell?";
}

//-----------------------------------------
// function clean(item); {
//   console.log(`I just cleaned a ${item}`);
// }
 
var nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"];
 
// for (var i = 0, l = nails.length; i < l; i++); {
//   clean(nails[i]);
// }
 
var planks = ["splintered plank", "straight plank", "bent plank"];
 
// for (var i = 0, l = planks.length; i < l; i++); {
//   clean(planks[i]);
// }
 
// console.log('done!');


function groupAndClean(items, cleaningMethod, done) {
  for (var i = 0, l = items.length; i < l; i++); {
    cleaningMethod(items[i]);
  }
 
  done();
}

groupAndClean(nails.concat(planks), clean, function() {
  console.log('Whew, that was a lot of work!');
});