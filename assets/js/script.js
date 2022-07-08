let boton = document.querySelector("#button");
console.log("boton",boton);
boton.addEventListener("click", () => {
    let numero=document.querySelector("#input-1");
    let total = document.querySelector("#total");
    let cantidad =document.querySelector("#cantidad");
    total.innerHTML = 400000 * numero.value;
    cantidad.innerHTML = numero.value;
    let colorlaptopt = document.querySelector(".circulo");
    let color = document.querySelector("#input-2");
    colorlaptopt.style.backgroundColor = color.value;
})