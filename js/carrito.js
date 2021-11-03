let total = 0;
let unidades = 0;
let carro = [];
let usuario = "";


function saludo() {
    let fecha = new Date();
    let hora = fecha.getHours();
    let saludos;
    if (hora >= 0 && hora < 12) saludos = "Buenos Días";
    if (hora >= 12 && hora < 18) saludos = "Buenas Tardes";
    if (hora >= 18 && hora < 24) saludos = "Buenas Noches";
    usuario = prompt("Ingrese su nombre");
    let saludoBienvenida = saludos + " " + usuario;
    return (saludoBienvenida);
};

function agregarAlCarro(id) {
    carro.push(produc[id - 1].precio, produc[id - 1].nombre);
    alert("Se Agrego Producto al carro: " + produc[id - 1].nombre + ".  $: " + produc[id - 1].precio);
    CalcularTotal();
}

function CalcularTotal() {
    total = 0;
    for (const productos of carro) {
        total += productos.precio;
    }
    tituloPrecio.innerText = total;
    tituloTotalUnidades.innerText = carrito.length;
}
let saludoUsuario = saludo();


let tituloTotalCompra = document.createElement("h3");
tituloTotalCompra.innerText = "Total de la compra $:";
document.body.appendChild(tituloTotalCompra);

let tituloTotalUnidades = document.createElement("h3");
tituloTotalUnidades.innerText = "0";
document.body.appendChild(tituloTotalUnidades);



const $datos = document.querySelector(".datos"),
    $template = document.getElementById("templateOutlet").content,
    $fragment = document.createDocumentFragment();

const $datos2 = document.querySelector(".datos"),
    $templateCarro = document.getElementById("templateCarro").content,
    $fragmentCarro = document.createDocumentFragment();

$templateCarro.querySelector("h4").textContent = saludoUsuario;
$templateCarro.querySelector("h5").textContent = "Total de la compra $:";
$templateCarro.querySelector("h6").textContent = "Cantidad de productos en el carro:";
let $clone2 = document.importNode($templateCarro, true); // clonamos completamente el nodo templetcon toda la estructura 
$fragmentCarro.appendChild($clone2);
$datos.appendChild($fragmentCarro);

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
        $template.querySelector("button").setAttribute("value", element.id);
        if (usuario === "admin") {
            $template.querySelector("button").setAttribute("disabled", true);
            if (element.estado === "Activo") {
                $template.querySelector("label").textContent = "Desactivar";
                $template.querySelector("label").setAttribute("value", "Desactivar");
            }
            if (element.estado === "Desactivado") {
                $template.querySelector("label").textContent = "Activar";
                $template.querySelector("label").setAttribute("value", "Desactivar");
            }
        }

        let $clone = document.importNode($template, true); // clonamos completamente el nodo templetcon toda la estructura 
        $fragment.appendChild($clone);
        $datos.appendChild($fragment);
        document.getElementById(`${element.id}`).onclick = () => agregarAlCarro(`${element.id}`);

    }
});