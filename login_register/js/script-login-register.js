const registerBtn = document.querySelector('.register-link');
const loginBtn = document.querySelector('.login-link');
const form_container =document.querySelector('.form-container');

registerBtn.addEventListener('click', () => {
    form_container.classList.toggle('active');
});

loginBtn.addEventListener('click', () => {
    form_container.classList.toggle('active');
});

