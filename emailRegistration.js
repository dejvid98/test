const email = document.querySelector('.form_emailInput');
const tosCheckmark = document.querySelector('.form__tosCheckbox');
const emailError = document.querySelector('.form__emailError');
const tosError = document.querySelector('.form__tosError');
const submitButton = document.querySelector('.form__submitButton');
const loader = document.querySelector('.loader');
const form = document.querySelector('.wrapper__form');

// Validates email based on a regular expression
const validateEmail = (emailInput) => {
  const regex = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(emailInput).toLowerCase());
};

// If regular expressions are incorrect, displays an error
const emailFormValidation = () => {
  if (!validateEmail(email.value)) {
    emailError.style.display = 'block';
    email.classList.add('is-danger');
    return false;
  }

  if (!tosCheckmark.checked) {
    tosError.style.display = 'block';
    return false;
  }

  return true;
};

const removeEmailErrors = () => (emailError.style.display = 'none');

const removeCheckboxError = () => {
  if (tosCheckmark.checked) tosError.style.display = 'none';
};

// Listens for a checkbox to be checked to remove the error
tosCheckmark.addEventListener('change', removeCheckboxError);

// Removes the error message when the user starts typing email again
email.addEventListener('keydown', (e) => {
  emailError.style.display = 'none';
  email.classList.remove('is-danger');
});

// Completes registration after validating input
const completeRegistration = () => {
  if (emailFormValidation()) {
    form.style.display = 'none';
    loader.style.display = 'block';
    setTimeout(() => {
      window.location.href = 'registrationSuccess.html';
    }, 3000);
  }
};

submitButton.addEventListener('click', completeRegistration);
