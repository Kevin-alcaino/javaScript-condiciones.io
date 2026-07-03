const temperatura = Number(prompt("ingrese su temperatura"))
if (isNaN(temperatura)) {
    alert("debe ingresar numeros")
}
else if (temperatura < 0) {
    alert("hace mucho frio")
} else if (temperatura < 10) {
    alert("hace frio")
} else if (temperatura > 11 && temperatura <=20) {
    alert("temperatura agradable ")
} else if (temperatura <=30) {
    alert("hace calor")
 else {
    alert("hace mucho calor")
 }