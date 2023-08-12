// Target all classes and id from the HTML
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

// Store the classes and id inside these variables
let username = id("username");
let email = id("email");
let password = id("password");
let form = id("form");

let errorMsg = classes("error");
let successIcon = classes("success-icon");
let failureIcon = classes("failure-icon");

// Target the form and add the submit event listener
form.addEventListener('submit', (e) => {
	e.preventDefault();
})

// Create a function named engine which will do
// all sorts of form validation work
// It will have three arguments - id, serial, message
//
// id will target id
// serial will target the classes [error class, success and failure icons]
// message will print a message inside the .error class

let engine = (id, serial, message) => {
	if (id.value.trim() === "") {

	}
	else {

	}
}

