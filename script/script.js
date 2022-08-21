
let paginaPrincipal = document.getElementById("pagina__principal");
let paginaLogin = document.getElementById("pagina__login");
let paginaAdministrador = document.getElementById("pagina__administrador");
let paginaAgregarProductos = document.getElementById("pagina__agregar__productos");
let btnLogin = document.getElementById("btn__login");
let btnVolver = document.getElementById("btn__Volver");
let btnConsolas = document.getElementById("btn__consolas");

paginaLogin.style.display = "none";
paginaAdministrador.style.display = "none";
paginaAgregarProductos.style.display = "none";

// Aquí empieza a gestionarse el cambio de páginas

function pritnBtnLogin () {
    paginaPrincipal.style.display = "none";
    paginaLogin.style.display = "block";
};

function printBtnVolver () {
    paginaLogin.style.display = "none";
    paginaPrincipal.style.display = "block";
};

function irSeccionConsolas () {
    window.location.href = ("#consolas");
}

btnLogin.addEventListener("click", pritnBtnLogin);
btnVolver.addEventListener("click", printBtnVolver);
btnConsolas.addEventListener("click", irSeccionConsolas);