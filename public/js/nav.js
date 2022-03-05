/*
    Java script for the nav
*/
let icone=document.querySelector('#icon');

icone.addEventListener('click',()=>
{
    let navbar=document.querySelector('#navbar-container');
    navbar.classList.toggle('responsive');

});