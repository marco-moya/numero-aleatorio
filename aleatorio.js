

const valorMaximo = document.querySelector("#valor-maximo")
const valorMinimo = document.querySelector("#valor-minimo")
const resultado = document.querySelector("#resultado")
const boton = document.querySelector("#boton")

boton.addEventListener("click", () => aleatorio(+valorMaximo.value, +valorMinimo.value))

function aleatorio(max, min){
    const numero = ( Math.round( Math.random() * (max - min) ) + min )
    resultado.innerHTML = numero
}

