// 11. if 1-9 fail, this fires.
// jquery $(the id element where html is placed).html(the html msg, in this case it is a string of text.)
function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.");
}

// 3. giturl is instantiated with the string value to prefix our search url
// 4. searchRepositories() has been called when user clicked in #2
const giturl = 'https://api.github.com/search/repositories?q=';
function searchRepositories() {
// 5. searchTerm is set to the value of the string entered by User in #1
  const searchTerm = $('#searchTerm').val();
// 6. jquery function $.get(), 1st argument is combined giturl + searchTerm
// 7. jquery function $.get(), 2nd argument is function w/block (foo) 
  $.get(giturl+searchTerm, foo => {
// 8. template variable is set to the string of HTML resulting from Handlebars compiling the #results-template
      const template = Handlebars.compile($('#results-template').html());
// 9. jquery function .html() with combined argument of template(compiled Handlebars template) with 'foo(data from api call)' passed in.
// the data has keys that match the Handlebars template
// 10. see index.html <div id="results"></div>, this is where resulting data appears
      $('#results').html(template(foo));
// if 1-10 succeed, this function is over, otherwise .fail() is chained on here
// to handle errors. 
    }).fail(error => {
// see 11. displayError() above...
      displayError();
    });
}

// 13. user has clicked link under repo, to 'show commits' for that repo 
function showCommits(el) {
  debugger;
// 14. 'el' event listener I guess?
// in console, el shows the HTML of the link for Show Commits
// el is not data, it is an event object that has occured
// el.dataset is a DOMStringMap that has data in it, we can access via dot notation
// el.dataset.owner = "gemgon"
// el.dataset.repository = "octocat"
// el.dataset.repository.anchor() = "<a name="undefined">Octocat</a>"
debugger;
  const owner = el.dataset.owner;
  const repo = el.dataset.repository;
// 15. we use 'owner' and 'repository' from el.dataset, to populat a new URL that will get us the commit data
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
// 16. the template is compiled from #commits-template
    const template = Handlebars.compile($('#commits-template').html());
// 17. the data is applied to the template, with keys matching {{fields}} in our index.html page
// each row of data is turned into an HTML string and sent to the #details <div> for display
// 17b. it is done by creating a new <div id="details"></div>
// and assigning its .html value to the results of template(data)    
  $('#details').html(template(data));
  }).fail(error => {
// 18. if any errors in steps 13-17, displayError() is chained on and will fire
    displayError();
  });
}

// 0b, register the userDetails partial
function handlebarsSetup() {
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

// 0. when the document has loaded, call the handlebarSetup() function
$(document).ready(function (){
  handlebarsSetup();
});