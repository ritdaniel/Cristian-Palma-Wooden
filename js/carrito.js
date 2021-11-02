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
let total = 0;
let carro = [];

function saludo() {
    let fecha = new Date();
    let hora = fecha.getHours();
    let saludos;
    if (hora >= 0 && hora < 12) saludos = "Buenos Días";
    if (hora >= 12 && hora < 18) saludos = "Buenas Tardes";
    if (hora >= 18 && hora < 24) saludos = "Buenas Noches";
    let nombre = prompt("Ingrese su nombre");
    let bienvenida = document.createElement("h1");
    bienvenida.innerText = saludos + " " + nombre;
    document.body.appendChild(bienvenida);
    return (nombre);

}

function agregarAlCarro(id) {
    carro.push(productos[id]);
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

let usuario = saludo();

let tituloTotalCompra = document.createElement("h2");
let tituloPrecio = document.createElement("h1");
tituloTotalCompra.innerText = "Total de la compra $:";
// //imprimir en html
document.body.appendChild(tituloTotalCompra);
document.body.appendChild(tituloPrecio);
let tituloTotalUnidades = document.createElement("h3");
tituloTotalUnidades.innerText = "0";
let Cantidad = document.createElement("h2");
Cantidad.innerText = "Cantidad de productos en el carro:";
document.body.appendChild(Cantidad);
document.body.appendChild(tituloTotalUnidades);


const $datos = document.querySelector(".datos"),
    $template = document.getElementById("templateOutlet").content,
    $fragment = document.createDocumentFragment();
const produc = [{
        id: 1,
        claseCSS: "producMaceteros",
        categoria: "Maceteros Cuadrados",
        nombre: "Macetero Cuadrado Alto",
        foto: "img/cuadradoalto.png",
        descripcion: "Macetero alargado 50cm alto x 18cm ancho.",
        precio: 15990,
        stock: 15,
        estado: "Desactivado"
    },
    {
        id: 2,
        claseCSS: "producRepisa",
        categoria: "Repisas",
        nombre: "Repisa Hexagonal",
        foto: "img/repisaout.png",
        descripcion: "Medidas: 50 centímetros de alto, 57 de ancho y 12 de profundidad..",
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

// mostramos los productos Activados y si se ingresa admin se mostraran todos los produtos
produc.forEach(element => {
    if ((element.estado === "Activo") || (usuario === "admin")) {
        $template.querySelector("section").setAttribute("id", element.claseCSS);
        $template.querySelector("h1").textContent = element.categoria;
        $template.querySelector("div").setAttribute("class", "productos");
        $template.querySelector("img").setAttribute("src", element.foto);
        $template.querySelector("h3").textContent = element.nombre;
        $template.querySelector("p").textContent = element.descripcion;
        $template.querySelector("h2").textContent = element.precio;
        $template.querySelector("button").setAttribute("id", element.id);
        //document.getElementById(element.id).onclick = () => agregarAlCarro(element.id);
        if (usuario === "admin") {
            $template.querySelector("button").setAttribute("disabled", true);
            if (element.estado === "Activo")
                $template.querySelector("label").textContent = "Desactivar";
            if (element.estado === "Desactivado")
                $template.querySelector("label").textContent = "Activar";
        }

        let $clone = document.importNode($template, true); // clonamos completamente el nodo templetcon toda la estructura 
        $fragment.appendChild($clone);
        //  document.getElementById(element.id).onclick = () => agregarAlCarro(element.id);
    }

});

$datos.appendChild($fragment);


//Variable Operaciones



// for (const producto of productos) {
//     let section = document.createElementsbyclass("datos");
//     if ((producto.stock >= 1) && (producto.estado == "Activo")) {
//         section.innerHTML = `<section id = "${productos.claseCSS}" class = "cajaProductos">
//                                  <h1 class = "cajaProductos__title--orange" > ${ producto.categoria } </h1> 
//                                 <div class = "productos" >
//                                     <img src = "${producto.foto}"alt = "Maceteros Cuadrados Altos" ></img>
//                                     <h3 class = "cajaProductos__text--grey" > ${ producto.nombre } </h3> <br >
//                                     <p > ${producto.descripcion } </p> 
//                                     <h2 class = "precios-outlet" > ${ producto.precio }</h2> 
//                                     <button id = "${producto.id}" > COMPRAR </button><br> 
//                                     <button id = "${producto.estado}"> Desactivar </button><br>
//                                 </div>
//                                 </section>`;
//         document.body.appendChild(section);
//         document.getElementById(`${producto.id}`).onclick = () => agregarAlCarro(`${producto.id}`);
//         // document.getElementById(`${producto.estado}`).onclick = () => Esconder(`${producto.estado="Desactivado"}`);

//     }
// }