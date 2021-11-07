class Producto {
    constructor(id, claseCSS, categoria, nombre, foto, descripcion, precio, stock, estado) {
        this.id = id;
        this.claseCSS = claseCSS;
        this.categoria = categoria;
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.estado = estado;
    }
}

const produc = [];
const producto1 = new Producto(
    1,
    'producMaceteros',
    'Maceteros Cuadrados',
    'Macetero Cuadrado Alto',
    'img/cuadradoalto.png',
    'Macetero alargado 50cm alto x 18cm ancho.',
    15990,
    15,
    'Activo'
);

const producto2 = new Producto(
    2,
    'producRepisa',
    'Repisas',
    'Repisa Hexagonal',
    "img/repisaout.png",
    "Medidas: 50 centímetros de alto, 57 de ancho y 12 de profundidad..",
    14990,
    10,
    "Activo"
);

const producto3 = new Producto(
    3,
    'producJardinera',
    'Jardinera',
    'Jardinera Piso',
    'img/jardineraoutlet.png',
    'Medidas: 40 centímetros de alto, 50 de ancho y 25 de profundidad.',
    24990,
    3,
    'Activo'
)

produc.push(producto1, producto2, producto3);

let total = 0;
let unidades = 0;
let carro = [];
let usuario = "";
let stock = 0;
let saludos = "Buenas";

// Funcion saludo depende de la hora
function saludo() {
    let saludoBienvenida = "";
    let fecha = new Date();
    let hora = fecha.getHours();
    let horario;
    if (hora >= 0 && hora < 12) horario = "Buenos Días";
    if (hora >= 12 && hora < 20) horario = "Buenas Tardes";
    if (hora >= 20 && hora < 24) horarios = "Buenas Noches";
    Swal
        .fire({
            title: "Ingrese Su Nombre",
            input: "text",
            confirmButtonText: "OK",
            inputValidator: name => {
                // Si el valor es válido, debes regresar undefined. Si no, una cadena
                if (!name) {
                    return "Favor ingrese su Nombre";
                } else {
                    usuario = name;
                    return undefined;
                }
            }
        })
    saludoBienvenida = horario + " " + usuario;
    return (saludoBienvenida);
};
// alert(usuario);
// Funcion para Agregar producto al carro
function agregarAlCarro(nuevoprod) {
    nuevoprod.stock = nuevoprod.stock - 1;
    carro.push(nuevoprod);

    Calcular();

    Swal.fire({
        title: nuevoprod.nombre,
        text: 'Producto Ingresado al carro Exitosamente',
        imageUrl: nuevoprod.foto,
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: nuevoprod.nombre,
    })

}

// llamamos a Funcion Saludo 
//let saludos = saludo();

// creamos el elemento saludar para poder imprimir dentro del id correspondiente
let Saludar = document.getElementById("saludoHtml");
Saludar.style.textAlign = "right"; // agregamos estilo (texto al lado derecho)
Saludar.innerText = saludos;


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
// let Nueva = document.getElementById("nueva");
// Nueva.innerText = "0";
// creamos el elemento tituloTotalUnidades (cantidad productos en el carro) para poder imprimir dentro del id correspondiente    

const $datos = document.querySelector(".datos"),
    $template = document.getElementById("templateOutlet").content,
    $fragment = document.createDocumentFragment();


// mostramos los productos Activados y si se ingresa admin se mostraran todos los produtos
produc.forEach(productos => {
    if ((productos.estado === "Activo") || (usuario === "admin")) {
        $template.querySelector("section").setAttribute("id", productos.claseCSS);
        $template.querySelector("h1").textContent = productos.categoria;
        $template.querySelector("div").setAttribute("class", "productos");
        $template.querySelector("img").setAttribute("src", productos.foto);
        $template.querySelector("h3").textContent = productos.nombre;
        $template.querySelector("p").textContent = productos.descripcion;
        $template.querySelector("h2").textContent = productos.precio;
        $template.querySelector("button").setAttribute("id", productos.id);
        $template.querySelector("button").setAttribute("value", productos.id);
        $template.querySelector("input").style.visibility = "hidden"; // se deja oculto el checkbox cuando no es admin
        if (usuario == "admin") {
            $template.querySelector("button").setAttribute("disabled", true); // se desabilita boton de compra
            $template.querySelector("input").style.visibility = "visible"; // se habilita checkbox modificar estado
            if (element.estado === "Activo") {
                $template.querySelector("label").textContent = "Desactivar";
                $template.querySelector("label").setAttribute("value", "Desactivar");
            }
            if (element.estado === "Desactivado") {
                $template.querySelector("label").textContent = "Activar";
                $template.querySelector("label").setAttribute("value", "Desactivar");
            }
        }
        $template.querySelector("h6").textContent = "Stock disponible: " + productos.stock;

        let $clone = document.importNode($template, true); // clonamos completamente el nodo templetcon toda la estructura 
        $fragment.appendChild($clone);
        $datos.appendChild($fragment);
        document.getElementById(`${productos.id}`).onclick = () => agregarAlCarro(productos);

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
    // guardamos el carro localStorage cada vez que se agrega un producto para que no se pierda
    localStorage.setItem('carro', JSON.stringify(carro));
}

// se realiza Impresion en el html
//Saludar.appendChild(Saludar);
//tituloPrecio.appendChild(tituloPrecio);
//tituloTotalUnidades.appendChild(tituloTotalUnidades);
//Nueva.appendChild(Nueva);