// es solo para mostrar el carro de compra 

let total = 0;
let unidades = 0;
let carro = [];
let cantidadProductos = 0;

function Calcular() {
    cantidadProductos = 0;
    carro.forEach(element => {
        total += element.total;
        cantidadProductos = cantidadProductos + element.cantidad;
    });
    tituloPrecio.innerText = total;
    tituloTotalUnidades.innerText = cantidadProductos;
}

// creamos el elemento tituloPrecio (valor acumilado de productos en el carro) para poder imprimir dentro del id correspondiente
let tituloPrecio = document.getElementById("montoCompra");
tituloPrecio.style.textAlign = "right"; // agregamos estilo (texto al lado derecho)
tituloPrecio.innerText = "0";
// creamos el elemento tituloTotalUnidades (cantidad productos en el carro) para poder imprimir dentro del id correspondiente    
let tituloTotalUnidades = document.getElementById("Cantidad");
//tituloTotalUnidades.style.textAlign = "right"; // agregamos estilo (texto al lado derecho)
tituloTotalUnidades.innerText = "0";
// recuperamos el carro cuando la persona se cambio de pagina
if (localStorage.getItem('carro')) {
    carro = JSON.parse(localStorage.getItem('carro'));
    tituloTotalUnidades.innerText = carro.length;
    Calcular();
}