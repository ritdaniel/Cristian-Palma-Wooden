class Producto {
    constructor(id, codigo, claseCSS, categoria, nombre, foto, descripcion, precio, stock, estado) {
        this.id = id;
        this.codigo = codigo;
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
    constructor(indice, id, codigo, NombCategoria, nombre, foto, descripcion, precio, cantidad, total) {
        this.indice = indice;
        this.id = id;
        this.codigo = codigo;
        this.NombCategoria = NombCategoria;
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
    'OUMCA50X18',
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
    'OURH50X57',
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
    'OUJP40X50',
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

// Funcion para Agregar producto al carro

function agregarAlCarro(id, nuevoproducto) {

    const agregar = nuevoproducto.find(productos => productos.codigo === id);

    if (carro.some(productos => productos.codigo === id)) {
        const actualizarProducto = carro.find(productos => productos.codigo === id);
        actualizarProducto.stock = actualizarProducto.stock - 1;
        actualizarProducto.cantidad++;
        actualizarProducto.total = actualizarProducto.cantidad * actualizarProducto.precio;
        Swal.fire({
            title: actualizarProducto.nombre,
            text: `Producto se encuentra en el carro
             se actualizara cantidad`,
            imageUrl: actualizarProducto.foto,
            imageWidth: 150,
            imageHeight: 150,
        })

    } else {
        var indiceproductos = carro.length;
        const productoMejorado = new Carro(indiceproductos, agregar.id, agregar.codigo, agregar.categoria, agregar.nombre, agregar.foto, agregar.descripcion, agregar.precio, 1, agregar.precio);
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

const $datos = document.querySelector(".datos"),
    $template = document.getElementById("templateOutlet").content,
    $fragment = document.createDocumentFragment();

// mostramos los productos Activados y si se ingresa admin se mostraran todos los produtos

produc.forEach(productos => {
    if (productos.estado === "Activo") {
        $template.querySelector("section").setAttribute("id", productos.claseCSS);
        $template.querySelector("h1").textContent = productos.categoria;
        $template.querySelector("div").setAttribute("class", "productos");
        $template.querySelector("img").setAttribute("src", productos.foto);
        $template.querySelector("h3").textContent = productos.nombre;
        $template.querySelector("p").textContent = productos.descripcion;
        $template.querySelector("h2").textContent = productos.precio;
        $template.querySelector("button").setAttribute("id", productos.codigo);
        $template.querySelector("button").setAttribute("value", productos.codigo);
        $template.querySelector("button").setAttribute("class", "btn btn-danger");

        $template.querySelector("h6").textContent = "Stock disponible: " + productos.stock;

        let $clone = document.importNode($template, true); // clonamos completamente el nodo templetcon toda la estructura 
        $fragment.appendChild($clone);
        $datos.appendChild($fragment);
        document.getElementById(`${productos.codigo}`).onclick = () => agregarAlCarro(`${productos.codigo}`, produc);
    }
});