var loginform = document.getElementById('loginform')
var signname = document.getElementById('signname');
var signemail = document.getElementById('signemail')
var signpassword = document.getElementById('signpassword')
var all=[]

if (localStorage.getItem('allusers')!=null){
    allusers = JSON.parse(localStorage.getItem('allusers'))
}
console.log(allusers);

loginform.addEventListener('submit', function(e){
    e.preventDefault()
    login()
})

function login(){
    var userdata = {
        name: signname.value,
        email: signemail.value,
        password: signpassword.value
    }
    if (isloginvalid(userdata)== true){
    console.log('you logged in');
    alertlogin.classList.replace('d-block', 'd-none')
    window.location.href="home.html"

    }
    else{
        console.log('user not found');
        alertlogin.classList.replace('d-none', 'd-block')
    }
}

function isloginvalid (userdata){
for (var i = 0; i<allusers.length; i++){
    if (allusers[i].email.toLowerCase() == userdata.email.toLowerCase() && allusers[i].password == userdata.password ) {
        console.log('userfound');
        localStorage.setItem ('username' ,allusers[i].name )
        return true
}
}
}