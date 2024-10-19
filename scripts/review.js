new Date().getFullYear()
const currentyear = document.getElementById("currentyear").innerHTML = new Date().getFullYear();

let oLastModif = document.getElementById("lastModified").innerHTML = new Date(document.lastModified);

///// locale storagee //////

const visits = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visits.textContent = numVisits;
} else {
    visits.textContent = `STRANGER DANGER`;
}

if (numVisits === 1) {
    visits.textContent = `1 never mind you'r ok:)`
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
