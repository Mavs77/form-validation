// Selecting form and input elements
const form = document.getElementById('registrationForm');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// 1. Using `checkValidity()`
// Checks if the form is valid on submission
form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
    }
});

// 2. Using `setCustomValidity()`
// Custom message if passwords do not match
confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    } else {
        confirmPassword.setCustomValidity(""); // Clear message if valid
    }
});

// 3. Using `reportValidity()`
// Display messages for individual fields
email.addEventListener('blur', () => {
    if (!email.checkValidity()) {
        email.reportValidity();
    }
});

// 4. Using `validity` properties
zipcode.addEventListener('input', () => {
    if (zipcode.validity.patternMismatch) {
        zipcode.setCustomValidity("Zip code must be 5 digits.");
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
