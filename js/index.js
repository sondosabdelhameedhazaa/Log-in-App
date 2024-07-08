var signupform = document.getElementById('registerform');
var signname = document.getElementById('signname');
var signemail = document.getElementById('signemail')
var signpassword = document.getElementById('signpassword')
var namealert = document.getElementById('namealert');
var emailalert = document.getElementById('emailalert')
var passwordalert = document.getElementById('passwordalert')
var existalert = document.getElementById('existlalert')
var successalert = document.getElementById('successalert')
var allusers = []
console.log('hello');
if (localStorage.getItem('allusers') != null) {
    allusers = JSON.parse(localStorage.getItem('allusers'))
}

signupform.addEventListener('submit', function (e) {
    e.preventDefault();
    if (checkvalid()) {
        adduser()
    }
});

function adduser() {
    console.log('Add USER cALEED');
    var newuser = {
        name: signname.value,
        email: signemail.value,
        password: signpassword.value
    }
    console.log(newuser);
    if (alreadyexist(newuser) == true) {
        console.log('already exist')
        existalert.classList.replace('d-none', 'd-block')
    }
    else {
        existalert.classList.replace('d-block', 'd-none');
        successalert.classList.replace('d-none', 'd-block');
        window.location.href = "login.html"

        allusers.push(newuser)
        console.log(allusers)
        localStorage.setItem('allusers', JSON.stringify(allusers))
    }
}

function alreadyexist(newuser) {
    console.log(newuser, ' alreadyexist');
    console.log(allusers, 'alreadyexist');
    for (var i = 0; i < allusers.length; i++) {
        if (allusers[i].email.toLowerCase() == newuser.email.toLowerCase()) {
            console.log('email is already exist');
            return true
        }
    }
}

function validateinput(regex, element, alert) {
    var pattern = regex
    if (pattern.test(element.value)) {
        alert.classList.replace('d-block', 'd-none')
        element.classList.remove('is-invalid')
        element.classList.add('is-valid')
        return true
    }
    else {
        alert.classList.replace('d-none', 'd-block')
        element.classList.add('is-invalid')
        return false
    }
}

function checkvalid() {
    if (
        validateinput(/^[a-zA-Z0-9$_]{2,}$/, signname, namealert) == true &&
        validateinput(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, signemail, emailalert) == true &&
        validateinput(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/, signpassword, passwordalert) == true
    ) {
        console.log("all input are valid");
        return true
    }
    else {
        console.log(' something wrong');
        return false
    }
}