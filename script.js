// Selecting form and input elements
const form = document.getElementById('registrationForm');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// 1. Using `checkValidity()`
// Checks if the form is valid on submission
// This sets up an event listener that checks if the form is invalid and executes additional code when it is
form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity(); //if any fields are invalid, it automatically displays validation error messages (browser default messages)
    }
});

// 2. Using `setCustomValidity()`
// Custom message if passwords do not match
confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("Make sure you match your password!!!");
    } else {
        confirmPassword.setCustomValidity(""); // Clear message if valid
    }
});

// 3. Using `reportValidity()`
// Display messages for individual fields
// The 'blur' event listener in JS is used to detect when an element loses focus. It is often used with form elements like text inputs, dropdowns, or text areas. If you click inside an input field and then click elsewhere on the page the input field loses focus, triggering the blur event. 
email.addEventListener('blur', () => {
    if (!email.checkValidity()) {
        email.reportValidity();
    }
});

// 4. Using `validity` properties
// The validity properties are like a built-in checklist the browser uses to see if a form input is OK (valid) or if something is wrong (invalid)
zipcode.addEventListener('input', () => {
    if (zipcode.validity.patternMismatch) {
        zipcode.setCustomValidity("Zip code must be 5 digits. No more, no less!!!");
    } else {
        zipcode.setCustomValidity("");
    }
});

// 5. Using `willValidate` property
// Log which fields will validate when the form is submitted
document.querySelectorAll('input').forEach((input) => {
    console.log(`${input.name} will validate: ${input.willValidate}`);
});

// Real-time visual feedback for input validity
document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', () => {
        input.style.borderColor = input.checkValidity() ? '#2ecc71' : '#e74c3c';
    });
});
