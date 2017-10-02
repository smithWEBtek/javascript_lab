// function declaration
// has a name, so you can call it

function name([param[, param[, ... param]]]) {
   statements
}

// function expression
// doesn't need a name,
// might have a name, helps debugging,
// used inside another function
function [name]([param[, param[, ... param]]]) {
   statements
}

// function declared anonymously in a variable:
// anonymous function expression
var myFunction = function() {
    statements
}

// function declared & named (theName)in a variable:
// named function expression
var myFunction = function theName() {
    statements
}



(function() {
    statements
})();
