const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#psw');
const userList = document.querySelector('#users');
const seeMoreBt = document.querySelector('#seeMore');

if (seeMoreBt) {
    seeMoreBt.addEventListener('click', link);
} else {
    myForm.addEventListener('submit', onSubmit);
}




function link() {
    window.location.href = "about.html";
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
        alert('Please enter all fields');
    } else if (!validateEmail(emailInput.value)) {
        alert('Your email is invalid, please try again');
    } else {
        const li = document.createElement('li');

        li.appendChild(document.createTextNode(`Name: ${nameInput.value}, Email:${emailInput.value}, Password:${passwordInput.value}`));

        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';

        alert('Thank you for your registration');
    }
}