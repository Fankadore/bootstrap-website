"use strict";

// Sign Up Request Handler
const signupEmail = document.querySelector('.signup-email').value;
const signupPassword = document.querySelector('.signup-password').value;
const signupConfirmPassword = document.querySelector('.signup-confirm').value;
const signupButton = document.querySelector('.signup-submit');

function signupRequest() {
	//console.log(signupEmail + " - " + signupPassword + " - " + signupConfirmPassword);

	// Check that all fields have been entered
	if (!signupEmail || !signupPassword || !signupConfirmPassword) {
		return console.log('All fields are required.')
	}

	// Check if passwords match
	if (signupPassword !== signupConfirmPassword) {
		return console.log('Password does not match confirmed password.');
	}

	// Send HTTP Post request with email and password
	
}
signupButton.addEventListener('click', signupRequest);


// Sign In Request Handler
const signinEmail = document.querySelector('.signin-email').value;
const signinPassword = document.querySelector('.signin-password').value;
const signinButton = document.querySelector('.signin-submit');

function signinRequest() {
	// Check that all fields have been entered
	if (!signinEmail || !signinPassword) {
		return console.log('All fields are required.')
	}

	// Send HTTP Post request with email and password
	
}
signinButton.addEventListener('click', signinRequest);


// Bootstrap Popover jQuery Handler
$(document).ready(function() {
	$('[data-toggle="popover"]').popover();
});