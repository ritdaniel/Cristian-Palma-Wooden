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

class Carro {
    constructor(indice, id, categoria, nombre, foto, descripcion, precio, cantidad, total) {
        this.indice = indice;
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.total = total;
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
    "Medidas: 50 cm de alto, 57 de ancho y 12 de profundidad.",
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
    'Medidas: 40 cm de alto, 50 de ancho y 25 de profundidad.',
    24990,
    3,
    'Activo'
)

produc.push(producto1, producto2, producto3);

let total = 0;
let unidades = 0;
let carro = [];
let usuario;
let stock = 0;
let saludos = "";
let cantidadProductos = 0;


// Funcion saludo depende de la hora
function saludo() {
    let saludoBienvenida = "";
    let fecha = new Date();
    let hora = fecha.getHours();
    let horario;
    if (hora >= 0 && hora < 12) horario = "Buenos Días";
    if (hora >= 12 && hora < 20) horario = "Buenas Tardes";
    if (hora >= 20 && hora < 24) horario = "Buenas Noches";
    Swal
        .fire({
            title: "Ingrese Su Nombre",
            input: "text",
            inputPlaceholder: 'Ingrese su nombre...',
            confirmButtonText: "OK",
            inputValidator: name => {
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
//id, categoria, nombre, foto, descripcion, precio, cantidad, total  este es el carro

function agregarAlCarro(id, nuevoproducto) {
    const agregar = nuevoproducto.find(productos => productos.id === parseInt(id));

    if (carro.some(productos => productos.id === parseInt(id))) {
        const actualizarProducto = carro.find(productos => productos.id === parseInt(id));
        actualizarProducto.stock = actualizarProducto.stock - 1;
        actualizarProducto.cantidad++;
        actualizarProducto.total = actualizarProducto.cantidad * actualizarProducto.precio;
        Swal.fire({
            title: agregar.nombre,
            text: `Producto se encuentra en el carro
             se actualizara cantidad`,
            imageUrl: agregar.foto,
            imageWidth: 150,
            imageHeight: 150,
        })

    } else {
        var indiceproductos = 0;
        const productoMejorado = new Carro(indiceproductos, agregar.id, agregar.categoria, agregar.nombre, agregar.foto, agregar.descripcion, agregar.precio, 1, agregar.precio);
        productoMejorado.stock = productoMejorado.stock - 1;
        carro.push(productoMejorado);
        console.log(carro);
        Swal.fire({
            title: agregar.nombre,
            text: 'Producto Ingresado al carro Exitosamente',
            imageUrl: agregar.foto,
            imageWidth: 150,
            imageHeight: 150,
        });
    }
    localStorage.setItem('carro', JSON.stringify(carro));
    Calcular();

}


function Calcular() {
    total = 0;
    cantidadProductos = 0;
    carro.forEach(element => {
        total += element.total;
        cantidadProductos = cantidadProductos + element.cantidad;
    });
    tituloPrecio.innerText = total;
    tituloTotalUnidades.innerText = cantidadProductos;
    // guardamos el carro localStorage cada vez que se agrega un producto para que no se pierda
    localStorage.setItem('carro', JSON.stringify(carro));

}
// llamamos a Funcion Saludo 
//saludos = saludo();

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
console.log(" este es :" + saludos);
// recuperamos el carro cuando la persona se cambio de pagina
if (localStorage.getItem('carro')) {
    carro = JSON.parse(localStorage.getItem('carro'));
    tituloTotalUnidades.innerText = carro.length;
    Calcular();
}

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
        document.getElementById(`${productos.id}`).onclick = () => agregarAlCarro(`${productos.id}`, produc);

    }
});