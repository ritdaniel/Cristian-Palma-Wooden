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
let total = 0;
let unidades = 0;
let carro = [];
let usuario = "";
let stock=0;
// Funcion saludo solicita el nombre y retorna el saludo dependiendo de la hora
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

// Funcion para Agregar producto al carro
function agregarAlCarro(id) {
    stock=produc[id-1].stock - 1;
    carro.push(produc[id-1]);
    produc[id-1].stock = stock;
    alert("Se Agrego Producto al carro: " + produc[id-1].nombre + ".  $: " + produc[id-1].precio);
    Calcular();
    
}


// llamamos a Funcion Saludo 
let saludoUsuario = saludo();

// creamos el elemento saludar para poder imprimir dentro del id correspondiente
let saludar = document.getElementById("saludoHtml");
saludar.style.textAlign= "right"; // agregamos estilo (texto al lado derecho)
saludar.innerText = saludoUsuario;

// creamos el elemento tituloPrecio (valor acumilado de productos en el carro) para poder imprimir dentro del id correspondiente
let tituloPrecio = document.getElementById("montoCompra");
tituloPrecio.style.textAlign= "right"; // agregamos estilo (texto al lado derecho)
tituloPrecio.innerText = "0";

// creamos el elemento tituloTotalUnidades (cantidad productos en el carro) para poder imprimir dentro del id correspondiente    
let tituloTotalUnidades = document.getElementById("cantidad");
tituloTotalUnidades.style.textAlign= "right"; // agregamos estilo (texto al lado derecho)
tituloTotalUnidades.innerText = "0";

// creamos el elemento tituloTotalUnidades (cantidad productos en el carro) para poder imprimir dentro del id correspondiente    

const $datos = document.querySelector(".datos"),
    $template = document.getElementById("templateOutlet").content,
    $fragment = document.createDocumentFragment();


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
        $template.querySelector("input").style.visibility="hidden"; // se deja oculto el checkbox cuando no es admin
        if (usuario === "admin") {
            $template.querySelector("button").setAttribute("disabled", true); // se desabilita boton de compra
            $template.querySelector("input").style.visibility="visible"; // se habilita checkbox modificar estado
            if (element.estado === "Activo") {
                $template.querySelector("label").textContent = "Desactivar";
                $template.querySelector("label").setAttribute("value", "Desactivar");
            }
            if (element.estado === "Desactivado") {
                $template.querySelector("label").textContent = "Activar";
                $template.querySelector("label").setAttribute("value", "Desactivar");
            }
        }
            $template.querySelector("h5").textContent = "Stock disponible: "+ element.stock;

        let $clone = document.importNode($template, true); // clonamos completamente el nodo templetcon toda la estructura 
        $fragment.appendChild($clone);
        $datos.appendChild($fragment);
        document.getElementById(`${element.id}`).onclick = () => agregarAlCarro(`${element.id}`);

    }
});

// realiza el calculo del carro  suma y cantidad de items
function Calcular() {
    
    total = 0;
    carro.forEach(element => {
        total += element.precio;
    }); 
    tituloPrecio.innerText = total;
    tituloTotalUnidades.innerText = carro.length;
}

// se realiza Impresion en el html
saludar.appendChild(saludar);

tituloPrecio.appendChild(tituloPrecio);
tituloTotalUnidades.appendChild(tituloTotalUnidades);

