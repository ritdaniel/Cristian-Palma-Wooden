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

const productos = [];
const producto1 = new Producto(1, 'producMaceteros', 'Maceteros Cuadrados', 'Macetero Cuadrado Alto', 'img/cuadradoalto.png',
    'Macetero alargado 50cm alto x 18cm ancho.', 15990, 15, 'Activo');

const producto2 = new Producto(2, 'producMaceteros', 'Maceteros Cuadrados', 'Maceteros Bajos', 'img/cuadradobajo.png',
    'Maceteros bajos de madera con protector de madera acabado mate ', 15990, 15, 'Activo');

const producto3 = new Producto(3, 'producMaceteros', 'Maceteros Cuadrados', 'Maceteros Tipo piramide', 'img/cuadradodif.png',
    'Medidas: 40 cm de alto, 50 de ancho y 25 de profundidad.', 15990, 9, 'Activo');

const producto4 = new Producto(4, 'producMaceteros', 'Maceteros Cuadrados', 'Maceteros Cuadrados', 'img/cuadrado.png',
    'Macetero de madera con protector de madera acabado mate .', 24990, 3, 'Activo');

const producto5 = new Producto(5, 'producMaceteros', 'Maceteros Hexagonales', 'Maceteros Hexagonales', 'img/hexagonal.png',
    'Macetero de madera con protector de madera acabado mate .', 24990, 6, 'Activo');

const producto6 = new Producto(6, 'producMaceteros', 'Maceteros triangulares', 'Maceteros triangulares', 'img/triangular.png',
    'Macetero especial para suculentas o plantas pequeñas .', 15990, 6, 'Activo');

const producto7 = new Producto(7, 'portaLlave', 'Porta LLaves', 'Porta LLaves', "img/detalles.png",
    "Porta LLave forma montaña con 5 ganchos.", 14990, 10, "Activo");

const producto8 = new Producto(8, 'producJardinera', 'Jardinera', 'Jardinera Piso', 'img/jardineraoutlet.png',
    'Medidas: 40 cm de alto, 50 de ancho y 25 de profundidad.', 18990, 9, 'Activo');

const producto9 = new Producto(9, 'portaLlave', 'Porta LLaves', 'Porta LLaves con suculenta', 'img/portaconplanta.png',
    'Porta LLave con macetero y suculenta', 12990, 5, 'Activo');

const producto10 = new Producto(10, 'Repisa', 'Repisa', 'Repisa', 'img/repisa.png',
    'Hermosa repisa decagono con divisiones', 32990, 10, 'Activo');

const producto11 = new Producto(11, 'Repisas', 'Media Luna', 'Media Luna', 'img/mediaLuna.png',
    'Repisa tipo media luna 3 divisiones', 19990, 5, 'Activo');

const producto12 = new Producto(12, 'Repisas', 'Repisas', 'Pack 3 Repisas Hexagono', 'img/hexagono.png',
    'Porta LLave con macetero y suculenta', 12990, 5, 'Activo');

const producto13 = new Producto(13, 'producJardinera', 'Jardinera', 'Jardinera Dinamica Muro', 'img/jardinera.png',
    'jardinera Dinamica para pared diferentes medidas', 12990, 5, 'Activo');


productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7,
    producto8, producto9, producto10, producto11, producto12, producto13);

MostrarProductos(productos)

function MostrarProductos(productosTienda) {

    $(".datos").append(`<section id="" class="cajaProductos"> `);
    productosTienda.forEach(productoc => {

        $(".cajaProductos").append(`<div class="productos" id="productos">
        <h1 class="cajaProductos__title--orange">${productoc.categoria}</h1>
        <img src="${productoc.foto}"alt = "Maceteros Altos cuadrados">
        <h3 class ="cajaProductos__text--grey" > ${productoc.nombre}</h3>
        <p class ="descripcion" >${productoc.descripcion}</p>
        <form >
                <h6 > Seleccione medida: </h6> 
                <select id = "medidaAlto"onchange = "valorAlto()" >
                        <option > Medida Macetero </option> 
                        <option > 40 cm x 18 cm </option> 
                        <option > 50 cm x 20 cm </option> 
                        <option > 60 cm x 25 cm </option> 
                        </select > 
        </form> 
                                <p id = "precioA"class = "precio"> </p>
                    <div class="btn btn-danger"> Agregar Carro </div> <br>
                    </div>
                    </section>`);


    });

}