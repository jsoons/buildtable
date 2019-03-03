function buildTable() {
  addLineToHTMLTable("Michel", "Buffa");
  addLineToHTMLTable("Marie-Claire", "Forgue");
  addLineToHTMLTable("Tim", "Berners-Lee");
}

// Add a line to the HTML table
function addLineToHTMLTable(firstName, lastName) {
  // Get the body of the table using the selector API
  var tableBody = document.querySelector("#tableContactBody");

  // Add a new row at the end of the table
  var newRow = tableBody.insertRow();

  // add  new cells to the row
  var firstNameCell = newRow.insertCell();
  firstNameCell.innerHTML = firstName;

  var lastNameCell = newRow.insertCell();
  lastNameCell.innerHTML = lastName;
}


// The browser comes with some very powerful APIs (Application Programming Interfaces - a set of predefined objects/functions/variables you can use):

// "The selection API" is used for "selecting elements in the document". It uses the same syntax as CSS selectors. 
// The "DOM API" for "Document Object Model" API. When we used document.body.innerHTML += "<p>The value of x is " + x + "</p>"; in a previous example, we used the DOM API for adding content to the body of the page (page = document).
// Another API is called the HTML Table JavaScript API, and is useful for building tables on the fly,
// etc.