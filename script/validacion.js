const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

inputs.forEach (input => {
    input.addEventListener("blur", (input) => {
        validar(input.target)
    })
})

textareas.forEach (textarea => {
    textarea.addEventListener("blur", (textarea) => {
        validar(textarea.target)
    })
})


function validar (input, textarea) {
    if(input.validity.valid) {
        input.parentElement.classList.remove("input__invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }
    else {
        input.parentElement.classList.add("input__invalid");
    }
    if(textarea.validity.valid) {
        input.parentElement.classList.remove("input__invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }
    else {
        input.parentElement.classList.add("input__invalid");
    }
}