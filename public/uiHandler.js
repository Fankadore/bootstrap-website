"use strict";

const username = document.querySelector('input-username').value;
const email = document.querySelector('input-email').value;
const password = document.querySelector('input-password').value;
const confirmPassword = document.querySelector('input-confirm').value;
const button = document.querySelector('button-submit');

function submitRequest() {
    // Check that all fields have been entered
    if (!username || !email || !password || !confirmPassword) {
        return console.log('All fields are required.')
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        return console.log('Password does not match confirmed password.');
    }

    // Send HTTP Post request with email and password
    
}

button.addEventListener('click', submitRequest);