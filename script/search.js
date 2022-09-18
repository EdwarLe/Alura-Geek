let campoFiltrar = document.querySelector(".filtrar__search");

campoFiltrar.addEventListener("input", () => {

    let productos = document.querySelectorAll(".container-products__line__products__product");

    if (campoFiltrar.value.length > 0) {
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i];
            let prodNombre = producto.querySelector(".container-products__line__products__product__text");
            let nombre = prodNombre.textContent;
            let expresion = RegExp(campoFiltrar.value, "i");

            if (!expresion.test(nombre)) {
                producto.classList.add("invisible");
            } else {
                producto.classList.remove("invisible");
            }

        }
    } else {
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i];
            producto.classList.remove("invisible");
        }


    }
});