import {postUserData} from './fetch.js';

const btn = document.querySelector('#Register');
const show = document.querySelector('#show');
const username = document.querySelector("#user");
const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm-password')

show.addEventListener('click', () => {
    if (show.checked) {
        password.type = 'text'
        confirm.type = 'text'
    } else {
        password.type = 'password'
        confirm.type = 'password'
    }
});

btn?.addEventListener('click', () => {
    if (username.value != "" && password.value != "" && confirm.value != "") {
        if (confirm.value === password.value) {
            postUserData(username.value, password.value)
            window.location.href = 'login.html'
            sessionStorage.setItem('username', username.value);
            sessionStorage.setItem('login', 'false');
        } else {
            alert('Passwords do not match')
        }
    } else {
        alert('Please Fill Out All Fields')
    }
});