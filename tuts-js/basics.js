var asdf = ["cheese", "bacon", "salad", "cigar"];

function goodMorning(){
  asdf.forEach(function(item) {
  console.log(item);  
  });
  // function burf();
  // myAlertFunction();
  // qwert();
  // burf(); can't call function directly, I guess it has to be in scoped variable accessible here
}

var qwert = function burf(){
  alert('var declared, before calling burf');
}

var myAlertFunction = function showAlert(){
  alert('function assigned to variable, var called in another function');
}

var theMeaningOfLife = 42, 
    foo = "bar", //indented 4 spaces for vars on multple lines
    baz = "baz", //each one ends in comma, last one ends in semi-colon;
    qwer, zxcv = "pretty bird",
foo, 
dfg, 
dfg = qwer,
qwer = zxcv, 
foo;