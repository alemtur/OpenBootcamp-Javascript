const boton1 = document.getElementById("btn1")

boton1.addEventListener("click", () => {
    alert("Hola, NO estoy utilizando jQuery")
})

const boton2 = document.querySelector("#btn2")

boton2.addEventListener("click", () => {
    alert("Hola, estoy utilizando jQuery")
})