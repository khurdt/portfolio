(function() {
    //input validation
    let form = document.querySelector('#register-form'), emailInput1 = document.querySelector('#email'), firstNameInput1 = document.querySelector('#first-name'), lastNameInput1 = document.querySelector('#last-name'), phoneInput1 = document.querySelector('#phone');
    function showErrorMessage(input, message) {
        let container = input.parentElement;
        let error = container.querySelector('.error-message');
        if (error) container.removeChild(error);
        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }
    function validateFirstName() {
        let value = firstNameInput1.value;
        if (!value) {
            showErrorMessage(firstNameInput1, '*First name is required');
            return false;
        }
        showErrorMessage(firstNameInput1, null);
        return true;
    }
    function validateLastName() {
        let value = lastNameInput1.value;
        if (!value) {
            showErrorMessage(lastNameInput1, '*Last name is required');
            return false;
        }
        showErrorMessage(lastNameInput1, null);
        return true;
    }
    function validateEmail() {
        let value = emailInput1.value;
        if (!value) {
            showErrorMessage(emailInput1, '*Email is a required field');
            return false;
        }
        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput1, '*Enter a valid email');
            return false;
        }
        showErrorMessage(emailInput1, null);
        return true;
    }
    function validatePhone() {
        let value = phoneInput1.value;
        // if (value.length !== 10) {
        //   showErrorMessage(phoneInput, '*Enter a valid phone number');
        //   return false;
        // } else {
        //   showErrorMessage(phoneInput, '');
        // }
        showErrorMessage(phoneInput1, null);
        return true;
    }
    function addDashes() {
        let phone = phoneInput1.value;
        phone = phone.split('-').join('');
        phone = phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        console.log(phone);
    }
    function validateForm() {
        let goodEmail = validateEmail(), goodFirstName = validateFirstName(), goodLastName = validateLastName(), goodPhone = validatePhone();
        return goodEmail && goodFirstName && goodLastName && goodPhone;
    }
    //Event Listeners
    form.addEventListener('submit', (event)=>{
        event.preventDefault(); // Do not submit to the server
        if (validateForm()) alert('Success!');
    });
    emailInput1.addEventListener('input', validateEmail);
    firstNameInput1.addEventListener('input', validateFirstName);
    lastNameInput1.addEventListener('input', validateLastName);
    phoneInput1.addEventListener('input', validatePhone);
    phoneInput1.addEventListener('keyup', addDashes);
})();
let emailInput = document.querySelector('#email'), firstNameInput = document.querySelector('#first-name'), lastNameInput = document.querySelector('#last-name'), phoneInput = document.querySelector('#phone'), bodyInput = document.querySelector('#textarea'), button = document.querySelector('.button'), success = document.querySelector(".success");
button.addEventListener('click', sendContactInfo);
async function sendContactInfo(e) {
    e.preventDefault();
    let data = {
        name: firstNameInput.value + ' ' + lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        message: bodyInput.value
    };
    console.log(JSON.stringify(data));
    axios.post('https://73v00p9r39.execute-api.ca-central-1.amazonaws.com/dev/', {
        data
    }).then((response)=>{
        console.log(response);
        success.style.display = 'block';
        success.innerText = 'Thanks for submitting';
        document.querySelector('.contact__container').style.display = 'none';
    }).catch((error)=>{
        console.log(error.response);
    });
}

//# sourceMappingURL=contact.f16b0d0f.js.map
