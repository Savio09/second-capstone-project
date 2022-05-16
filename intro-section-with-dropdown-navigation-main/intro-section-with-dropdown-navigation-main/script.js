const submit = document.querySelector('.submit');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

const input = document.querySelector('.email');
const info = document.querySelector('#info');
const password = document.querySelector('.passkey')
const confirmPassword = document.querySelector('.confirm')
const infoPass = document.querySelector('#info-pass')

// The validation process for the email

const validateEmail = (userInput) => {
    let emailRegExp = /.@./ig;
    let result = userInput.match(emailRegExp);
    (result === null) ? info.innerHTML = 'This is not a valid email' : info.innerHTML = ''; // Playing with the tenary operator
    if (!userInput) {
        info.innerHTML = ''
    }
}

const checkPassword = () => {
    (password.value === confirmPassword.value) ? infoPass.innerHTML = "" : infoPass.innerHTML = "Passwords don't match";
    if (!confirmPassword.value) {
        infoPass.innerHTML = '';
    }
}

input.addEventListener('keyup', () => {
    validateEmail(input.value)
})

confirmPassword.addEventListener('keyup', () => {
    checkPassword()
})
