new Date().getFullYear()
const currentyear = document.getElementById('currentyear').innerHTML = new Date().getFullYear();

let lastModified = document.getElementById('lastmodified').innerHTML = new Date(document.lastModified);

// hamburger time

const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
});