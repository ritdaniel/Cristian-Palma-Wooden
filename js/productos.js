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

const producto4 = new Producto(
    4,
    'producJardinera',
    'Maceteros Cuadrados',
    'Maceteros Tipo piramide',
    'img/cuadradodif.png',
    'Medidas: 40 cm de alto, 50 de ancho y 25 de profundidad.',
    24990,
    3,
    'Activo'
)


produc.push(producto1, producto2, producto3, producto4);


for (const producto of produc) {
    $(".datos").append(`<section id="${producto.claseCSS}" class="cajaProductos">
<h1 class="cajaProductos__title--orange">${producto.categoria}</h1>
<div class = "productos" id="productos" >
<img src="${producto.foto}"alt = "Maceteros Altos cuadrados">
        <h3 class = "cajaProductos__text--grey" > ${producto.nombre} </h3> 
        <p class = "descripcion" >${producto.descripcion}</p> 
        <form >
        <h6 > Seleccione medida: </h6> 
        <select id = "medidaAlto"onchange = "valorAlto()" >
        <option > Medida Macetero </option> 
        <option > 40 cm x 18 cm </option> 
        <option > 50 cm x 20 cm </option> 
        <option > 60 cm x 25 cm </option> 
        < /select > </form> 
        <p id = "precioA"class = "precio" > < /p> <br >
        </div>`);
}