MostrarProductos()
if (localStorage.getItem('carro')) {
    carro = JSON.parse(localStorage.getItem('carro'));
}

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
}

function MostrarProductos() {
    const ProductoJson = "productos.json";

    $.getJSON(ProductoJson, function(respuesta, estado) {
        if (estado === "success") {
            let categoria = respuesta.Productos;

            //------------- hacemos un array de las categorias para ir mostrando los productos segun categorias
            const categorias = [];
            categoria.forEach((item) => {
                if (!categorias.includes(item.categoria)) {
                    categorias.push(item.categoria);
                }
            });
            const nombreCategorias = [];
            categoria.forEach((item) => {
                if (!nombreCategorias.includes(item.NombCategoria)) {
                    nombreCategorias.push(item.NombCategoria);
                }
            });
            let varios = respuesta.Productos;
            for (var k = 0; k < categorias.length; k++) {
                $(".datos").append(`<section class="cajaProductos"  id="${categorias[k]}">  
                    <h1 class="cajaProductos__title--orange">${nombreCategorias[k]}
                     <a href="#mLateral">
                       <img class="subir" src="icono/subir.png" alt="subir"></a> </h1> 
                       </section>`);

            }
            varios.forEach(producto => {
                console.log("esta es categoria" + producto.categoria);

                $(`#${producto.categoria}`).append(`<div class="productos" id="productos">
                            <img src="${producto.foto}"alt = "Maceteros Altos cuadrados">
                            <h3 class ="cajaProductos__text--grey" > ${producto.nombre}</h3>
                            <p class ="descripcion" >${producto.descripcion}</p>
                            <form >
                                <h6 > Seleccione medida: </h6> 
                                <select id = "medidaAlto" onchange = "valorAlto()" >
                                    <option > Medida Macetero </option> 
                                    <option > 40 cm x 18 cm </option> 
                                    <option > 50 cm x 20 cm </option> 
                                    <option > 60 cm x 25 cm </option> 
                                </select > 
                            </form> 
                                <p id = "precioA"class = "precio"> </p>
                            <div class="btn btn-danger onclick = "agregarAlCarro(${producto.id}, ${varios})" "> Agregar Carro </div> <br>
                            </div>`);

            });


        }

    });
}