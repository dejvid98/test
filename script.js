const email = document.querySelector('.form_emailInput');
const tosCheckmark = document.querySelector('.form_tosCheckbox');
const emailError = document.querySelector('.form__emailError');
const tosError = document.querySelector('.form__tosError');
const emailRegistration = document.querySelector('.form__emailSubmit');

// Validates email based on a regular expression
const validateEmail = (emailInput) => {
  const regex = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(emailInput).toLowerCase());
};

const emailFormValidation = () => {
  if (!validateEmail(email.value)) {
    emailError.style.display = 'block';
    email.classList.add('is-danger');
  }

  if (!tosCheckmark.checked) {
    tosError.style.display = 'block';
  }
};

emailRegistration.addEventListener('click', emailFormValidation);
