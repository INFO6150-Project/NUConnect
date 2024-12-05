(function () {
	'use strict'

	var forms = document.querySelectorAll('.needs-validation')

	Array.prototype.slice.call(forms)
		.forEach(function (form) {
			form.addEventListener('submit', function (event) {
				var emailInput = form.querySelector('input[type="email"]');
				var passwordInput = form.querySelector('input[type="password"]');
				
				var emailPattern = /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/;

				if (passwordInput.value.length < 6 || passwordInput.value.length > 30) {
					passwordInput.setCustomValidity('Password must be between 6 and 30 characters.');
				} else {
					passwordInput.setCustomValidity('');
				}

				if (!emailPattern.test(emailInput.value)) {
					emailInput.setCustomValidity('Email must be a valid @northeastern.edu address.');
				} else {
					emailInput.setCustomValidity('');
				}

				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add('was-validated');
			}, false);
		});
})();