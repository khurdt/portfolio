(function () {

  //input validation
  let form = document.querySelector('#register-form'),
    emailInput = document.querySelector('#email'),
    firstNameInput = document.querySelector('#first-name'),
    lastNameInput = document.querySelector('#last-name'),
    phoneInput = document.querySelector('#phone');


  function showErrorMessage(input, message) {
    let container = input.parentElement;

    let error = container.querySelector('.error-message');

    if (error) {
      container.removeChild(error);
    }

    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateFirstName() {
    let value = firstNameInput.value;

    if (!value) {
      showErrorMessage(firstNameInput, '*First name is required')
      return false;
    }

    showErrorMessage(firstNameInput, null);
    return true;
  }

  function validateLastName() {
    let value = lastNameInput.value;

    if (!value) {
      showErrorMessage(lastNameInput, '*Last name is required')
      return false;
    }

    showErrorMessage(lastNameInput, null);
    return true;
  }

  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, '*Email is a required field');
      return false;
    }

    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, '*Enter a valid email');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function validatePhone() {
    let value = phoneInput.value;

    // if (value.length !== 10) {
    //   showErrorMessage(phoneInput, '*Enter a valid phone number');
    //   return false;
    // } else {
    //   showErrorMessage(phoneInput, '');
    // }

    showErrorMessage(phoneInput, null);
    return true;
  }

  function addDashes() {
    let phone = phoneInput.value
    phone = phone.split('-').join('');
    phone = (phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    console.log(phone);
  }

  function validateForm() {
    let goodEmail = validateEmail(),
      goodFirstName = validateFirstName(),
      goodLastName = validateLastName(),
      goodPhone = validatePhone();
    return goodEmail && goodFirstName && goodLastName && goodPhone;
  }
  //Event Listeners
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  })

  emailInput.addEventListener('input', validateEmail);
  firstNameInput.addEventListener('input', validateFirstName);
  lastNameInput.addEventListener('input', validateLastName);
  phoneInput.addEventListener('input', validatePhone);
  phoneInput.addEventListener('keyup', addDashes);

})();


let emailInput = document.querySelector('#email'),
  firstNameInput = document.querySelector('#first-name'),
  lastNameInput = document.querySelector('#last-name'),
  phoneInput = document.querySelector('#phone'),
  bodyInput = document.querySelector('#textarea'),
  button = document.querySelector('.button'),
  success = document.querySelector(".success"),
  error = document.querySelector('.error');

button.addEventListener('click', submit);

function submit(e) {
  e.preventDefault();

  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://th4ow5edkf.execute-api.us-east-1.amazonaws.com/dev/');
  xhr.withCredentials = false
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
    }
  };
  let data = {
    name: (firstNameInput.value + '' + lastNameInput.value),
    email: emailInput.value,
    phone: phoneInput.value,
    message: bodyInput.value
  }

  if (firstNameInput.value && lastNameInput.value && emailInput.value && bodyInput.value) {
    success.style.display = 'block';
    success.innerText = 'Thanks for submitting';
    document.querySelector('.contact__container').style.display = 'none';

    xhr.send(JSON.stringify(data));

  } else {
    error.style.display = 'block';
    error.innerText = 'Please Fill All Details';
  }
}