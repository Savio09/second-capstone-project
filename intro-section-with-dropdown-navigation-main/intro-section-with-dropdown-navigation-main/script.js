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
const reveal = document.querySelector('#togglePassword');
const strength = document.querySelector('#strength')

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
reveal.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');

});

const passwordStrength = () => {
    if(!password){
        strength.innerHTML = ''
    }
  else if (password.value.length <= 5) {
        strength.innerHTML = 'Strength: weak'
        strength.style.color = 'red'
    }
    else if(password.value.length > 5) {
        strength.innerHTML = 'Strength: strong'
        strength.style.color = 'green'
    }
}

input.addEventListener('keyup', () => {
    validateEmail(input.value)
})

confirmPassword.addEventListener('keyup', () => {
    checkPassword()
})

password.addEventListener('keyup', () => {
    passwordStrength()
})
