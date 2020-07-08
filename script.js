const email = document.querySelector('.form_emailInput');
const phoneNumber = document.querySelector('.form__phoneNumber');
const tosCheckmark = document.querySelector('.form__tosCheckbox');
console.log(tosCheckmark);
const emailError = document.querySelector('.form__emailError');
const tosError = document.querySelector('.form__tosError');
const submitButton = document.querySelector('.form__submitButton');
const areaCode = document.querySelector('.form__areaCode');

// Validates email based on a regular expression
const validateEmail = (emailInput) => {
  const regex = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(emailInput).toLowerCase());
};

// Validates phone number based on a regular expression
const validatePhoneNumber = (phoneNumberInput) => {
  const regex = /[0-9]{9,10}/g;
  return regex.test(Number(phoneNumberInput).toLowerCase());
};

// If regular expressions are incorrect, displays an error
const emailFormValidation = () => {
  if (!validateEmail(email.value)) {
    emailError.style.display = 'block';
    email.classList.add('is-danger');
  }

  // if (!tosCheckmark.checked) {
  //   tosError.style.display = 'block';
  // }
};

// If regular expressions are incorrect, displays an error
const phoneFormValidation = () => {
  if (!validatePhoneNumber(phoneNumber.value)) {
    emailError.style.display = 'block';
    email.classList.add('is-danger');
  }

  if (!tosCheckmark.checked) {
    tosError.style.display = 'block';
  }
};

const removeEmailErrors = () => {
  emailError.style.display = 'none';
};

const removeCheckboxError = () => {
  if (tosCheckmark.checked) tosError.style.display = 'none';
};

// Listens for a checkbox to be checked to remove the error
tosCheckmark.addEventListener('change', removeCheckboxError);

// Performs a validation when user clicks on a submit button
submitButton.addEventListener('click', emailFormValidation);

// Removes the error message when the user starts typing email again
email.addEventListener('keydown', (e) => {
  emailError.style.display = 'none';
});

const formatPhoneArea = () => {};
