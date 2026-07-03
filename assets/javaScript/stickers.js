const adultos = document.querySelector("#adultos");
const ninos = document.querySelector("#ninos");
const cortesia = document.querySelector("#cortesia");
const boton = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

boton.addEventListener("click", function(){
    // Sumamos los valores al hacer clic
    const total = Number(adultos.value) + Number(ninos.value) + Number(cortesia.value);
    
    // El IF ahora está DENTRO de la función, por lo que sabe qué es "total"
    if (total <= 10) {
        // Añadido el signo de igual (=) para asignar el texto
        resultado.textContent = `llevas ${total} stickers`;
    } else {
        resultado.textContent = `llevas demasiados stickers`;
    }
});