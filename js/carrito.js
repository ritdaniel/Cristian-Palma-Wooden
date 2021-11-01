const productos = [{
        id: 1,
        claseCSS: "producMaceteros",
        categoria: "Maceteros Cuadrados",
        nombre: "Macetero Cuadrado Alto",
        foto: "img/cuadradoalto.png",
        descripcion: "Macetero alargado 50cm alto x 18cm ancho.",
        precio: 15990,
        stock: 15,
        estado: "Activo"
    },
    {
        id: 2,
        claseCSS: "producRepisa",
        categoria: "Repisas",
        nombre: "Repisa Hexagonal",
        foto: "img/repisaout.png",
        descripcion: "edidas: 50 centímetros de alto, 57 de ancho y 12 de profundidad..",
        precio: 14990,
        stock: 10,
        estado: "Activo"
    },
    {
        id: 3,
        claseCSS: "producJardinera",
        categoria: "Jardinera",
        nombre: "Jardinera Piso",
        foto: "img/jardineraoutlet.png",
        descripcion: "Medidas: 40 centímetros de alto, 50 de ancho y 25 de profundidad.",
        precio: 24990,
        stock: 3,
        estado: "Activo"
    },

];

function saludo() {
    fecha = new Date();
    let hora = fecha.getHours();
    let texto;

    if (hora >= 0 && hora < 4) texto = "Buenos Días";
    if (hora >= 4 && hora < 18) texto = "Buenas Tardes";
    if (hora >= 18 && hora < 24) texto = "Buenas Noches";
    return (texto);
}


//Variable Operaciones
let total = 0;
let carro = [];
let nombre = prompt("Ingrese su nombre");
let saludos = saludo();
let bienvenida = document.createElement("h1");
bienvenida.innerText = saludos + " " + nombre;
let tituloTotalCompra = document.createElement("h2");
let tituloPrecio = document.createElement("h1");
tituloTotalCompra.innerText = "Total de la compra $:";

//imprimir en html
document.body.appendChild(bienvenida);
document.body.appendChild(tituloTotalCompra);
document.body.appendChild(tituloPrecio);


let tituloTotalUnidades = document.createElement("h3");
tituloTotalUnidades.innerText = "0";
let Cantidad = document.createElement("h2");
Cantidad.innerText = "Cantidad de productos en el carro:";
document.body.appendChild(Cantidad);
document.body.appendChild(tituloTotalUnidades);

for (const producto of productos) {
    let section = document.createElement("section");
    //Definimos el innerHTML del elemento con una plantilla para mostrar todos los productos
    if ((producto.stock >= 1) && (producto.estado == "Activo")) {
        section.innerHTML = ` <section id = "${productos.claseCSS}"class = "cajaProductos">
        <h1 class = "cajaProductos__title--orange" > ${ producto.categoria } </h1> 
        <div class = "productos" ><img src = "${producto.foto}"alt = "Maceteros Cuadrados Altos" >
        <h3 class = "cajaProductos__text--grey" > ${ producto.nombre } </h3> <br >
        <p > ${producto.descripcion } </p> <h2 class = "precios-outlet" > ${ producto.precio }</h2> 
        <button id = "${producto.id}" > COMPRAR </button><br> 
        <button id = "${producto.estado}"> Desactivar </button><br>`;
        document.body.appendChild(section);
        document.getElementById(`${producto.id}`).onclick = () => agregarAlCarro(`${producto.id}`);
        // document.getElementById(`${producto.estado}`).onclick = () => Esconder(`${producto.estado="Desactivado"}`);

    }
}

function agregarAlCarro(id) {
    carro.push(productos[id - 1]);
    CalcularTotal();
}


function CalcularTotal() {
    total = 0;
    for (const prod of carro) {
        total += prod.precio;
    }
    tituloPrecio.innerText = total;
    tituloTotalUnidades.innerText = carro.length;
}