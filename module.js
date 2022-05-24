import axios from 'axios';

export async function sendContactInfo(name, email, phone, message, success) {

    let data = {
        name,
        email,
        phone,
        message
    }
    console.log(JSON.stringify(data));

    axios.post('https://73v00p9r39.execute-api.ca-central-1.amazonaws.com/dev/', {
        name: name,
        email: email,
        phone: phone,
        message: message,
        headers: {
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
        }
    })
        .then(response => {
            console.log(response);
            success.style.display = 'block';
            success.innerText = 'Thanks for submitting';
            document.querySelector('.contact__container').style.display = 'none';
        })
        .catch(error => {
            console.log(error.response)
        });
}