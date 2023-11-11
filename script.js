// DOM
let body = document.body;
let word = document.getElementsByClassName('word')[0];
let mode = document.getElementById('mode');
let user = document.getElementById('username');
let tittle = document.getElementById('tittle');
let navbar = document.getElementById('navbar');
let password = document.getElementById('pass');
let btnlogin = document.getElementById('btnlogin');
let container = document.getElementById('container');
let containerUser = document.getElementById('containerUser');
let containerAdmin = document.getElementById('containerAdmin');

containerAdmin.style.display = 'none';
containerUser.style.display = 'none';
navbar.style.display = 'none';
tittle.style.display = 'none';

// Function
function login(){
    localStorage.setItem('Role', user.value);
    if (user.value == 'Admin' && password.value ==  'abiganteng'){
        alert('login berhasil');

        navbar.style.display = 'block';
        containerAdmin.style.display = 'block';
        containerUser.style.display = 'none';
        container.style.display = 'none';
    }
    else if (user.value == 'Rama' && password.value == 'qoy20070814'){
        alert('login berhasil');
        
        containerUser.style.display = 'block';
        containerAdmin.style.display = 'none';
        container.style.display = 'none';
        tittle.innerHTML = `<marquee>Selamat Datang ${user.value}</marquee>`;
        tittle.style.display = 'block';
    }
    else if (user.value == 'Ahfary' && password.value == '12345'){
        alert('login berhasil');
        
        containerUser.style.display = 'block';
        containerAdmin.style.display = 'none';
        container.style.display = 'none';
        tittle.innerHTML = `<marquee>Selamat Datang ${user.value}!</marquee>`;
        tittle.style.display = 'block';
    }else {
        alert('innorect user or password !');
    }
}

btnlogin.addEventListener('click', login);
mode.addEventListener('click', function(){
    body.classList.toggle('darkMode');
    navbar.classList.toggle('darknavbar');
});