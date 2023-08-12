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

	engine(username, 0, 'Username cannot be blank');
	engine(email, 1, 'Email cannot be blank');
	engine(password, 2, 'Password cannot be blank');
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
		errorMsg[serial].innerHTML = message;
		id.style.border = '2px solid red';

		//icons
		failureIcon[serial].style.opacity = "1";
		successIcon[serial].style.opacity = "0";
	}
	else {
		errorMsg[serial].innerHTML = "";
		id.style.border = "2px solid green";

		// icons
		failureIcon[serial].style.opacity = "0";
		successIcon[serial].style.opacity = "1";
	}
}

