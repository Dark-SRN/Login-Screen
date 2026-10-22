import {fetchUsers} from './fetch.js';

const btn = document.querySelector('#Login');
const show = document.querySelector('#show');
const username = document.querySelector("#user");
const password = document.querySelector('#password');

show.addEventListener('click', () => {
    if (show.checked) {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
});

btn?.addEventListener('click', async () => {
    if (username.value != "" && password.value != "") {
        const isValidUser = await fetchUsers(username.value, password.value);
        console.log(isValidUser);
        if (isValidUser) {
            window.location.href = 'login.html'
            sessionStorage.setItem('username', username.value);
            sessionStorage.setItem('login', 'true');
        } else {
            alert('Invalid Username or Password');
        }
    } else {
        alert('Please Fill Out All Fields')
    }
});