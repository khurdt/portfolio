//selecting HTML elements
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message')
let submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', function(e) {
	e.preventDefault();
	console.log('clicked button')

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;

	console.log('Email: ', emailValue)
	console.log('Message: ', messageValue )

	if(emailValue.includes('@')) {
		//all good
		alert('thank you for your message')
	} else {
		alert('I am sorry, that was not a correct email address, please try again');
		}

	function addSpaces(initial){
        initial.replace("[0-9]{3}[d-][0-9]{3}");
        initial.replace("[0-9]{3}[d-][0-9]{3}[d-][0-9]{4}");
        return initial;
    }
})




//attaching "quick listener"
//getting user entered values
//javascript validations
