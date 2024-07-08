var username = localStorage.getItem('username');
var logbtn = document.getElementById('logbtn');

console.log(username);

usernamewrapper.innerHTML = username;
logbtn.addEventListener('click', function () {
    localStorage.removeItem('username')
})