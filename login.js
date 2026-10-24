const div = document.querySelector('#welcome');
const action = document.querySelector('#theme-toggle')

if (!sessionStorage.getItem('username')) {
    window.location.href = "index.html";
}
    
document.body.setAttribute('data-theme', localStorage.getItem('theme'));
if (sessionStorage.getItem('login') === 'true') {
    div.textContent = `Welcome Back, ${sessionStorage.getItem('username')}`;
} else {
    div.textContent = `Welcome, ${sessionStorage.getItem('username')}`;
}
action.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === "dark") {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light')
    } else {
        document.body.setAttribute("data-theme", "dark")
        localStorage.setItem('theme', 'dark')
    }
});
