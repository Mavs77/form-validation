const form = document.getElementById('signupForm');
        const password = document.getElementById('password');
        const passwordConfirmation = document.getElementById('passwordConfirmation');
        const passwordError = document.getElementById('passwordError');

        form.addEventListener('submit', function(event) {
            // Clear previous error
            passwordError.textContent = '';

            // Check if passwords match
            if (password.value !== passwordConfirmation.value) {
                passwordError.textContent = "Passwords do not match.";
                event.preventDefault(); // Prevent form from submitting
            }
        });