let user = document.getElementById("user");
let password = document.getElementById("password");
let entrar = document.getElementById("entrar");
let showPass = document.getElementById("show__password");

let usario = "pedro@alura.com";
let contrasenha = "As123456789";

function mostrar() {
    if(password.type == 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}


showPass.addEventListener("click", mostrar);
entrar.addEventListener("click", (e) => {
    e.preventDefault();
    ingresarAdmin();
});

