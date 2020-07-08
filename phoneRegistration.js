const areaCode = document.querySelector('.form__areaCode');
const phoneNumber = document.querySelector('.form__phoneNumber');
const tosCheckmark = document.querySelector('.form__tosCheckbox');
const tosError = document.querySelector('.form__tosError');
const phoneNumberError = document.querySelector('.form__phoneNumberError');
const areaCodeError = document.querySelector('.form__areaCodeError');
const submitButton = document.querySelector('.form__submitButton');
const loader = document.querySelector('.loader');
const form = document.querySelector('.wrapper__form');

// Validates phone number based on a regular expression
const validatePhoneNumber = (phoneNumberInput) => {
  const regex = /[0-9]{9,10}/g;
  return regex.test(Number(phoneNumberInput));
};

// Validates phone number based on a regular expression
const validateAreaCode = (areaCodeInput) => {
  const regex = /[+][0-9]{1,3}/;
  return regex.test(String(areaCodeInput));
};

// If regular expressions are incorrect, displays an error
const phoneFormValidation = () => {
  if (!validateAreaCode(areaCode.value)) {
    areaCodeError.style.display = 'block';
    areaCode.classList.add('is-danger');
    return false;
  }
  if (!validatePhoneNumber(phoneNumber.value)) {
    phoneNumberError.style.display = 'block';
    phoneNumber.classList.add('is-danger');
    return false;
  }

  if (!tosCheckmark.checked) {
    tosError.style.display = 'block';
    return false;
  }

  return true;
};

const removeCheckboxError = () => {
  if (tosCheckmark.checked) tosError.style.display = 'none';
};

// Formats area code input so it always starts with +
const formatAreaCode = () => {
  if (!areaCode.value) areaCode.value = `+${areaCode.value}`;
};

// Completes registration after validating input
const completeRegistration = () => {
  if (phoneFormValidation()) {
    form.style.display = 'none';
    loader.style.display = 'block';
    setTimeout(() => {
      window.location.href = 'registrationSuccess.html';
    }, 3000);
  }
};

// Allows user to submit the form with enter key
areaCode.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    completeRegistration();

    event.preventDefault();
  }
});

// Allows user to submit the form with enter key
phoneNumber.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    completeRegistration();
  }
});

// Removes the error message when the user starts typing area code again
areaCode.addEventListener('keydown', (e) => {
  areaCodeError.style.display = 'none';
  areaCode.classList.remove('is-danger');
});

// Removes the error message when the user starts typing phone number again
phoneNumber.addEventListener('keydown', (e) => {
  phoneNumberError.style.display = 'none';
  phoneNumber.classList.remove('is-danger');
});

// Listens for the checkbox to be checked to remove the error
tosCheckmark.addEventListener('change', removeCheckboxError);

// Performs a validation when a user clicks on a submit button
submitButton.addEventListener('click', completeRegistration);

// Automatically formats area code input when user types
areaCode.addEventListener('keydown', formatAreaCode);
