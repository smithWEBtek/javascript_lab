
// create element
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  // and give it some content 
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  newDiv.appendChild(newContent); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}

// append child
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

// Create a new paragraph element, and append it to the end of the document body
var p = document.createElement("p");
document.body.appendChild(p);