const ProductoJson = "productos.json";

function MuestraPrecios(seleccion, indice) {
    var muestraprecio = document.getElementById(`precio${indice}`);
    if (!isNaN(seleccion.options[seleccion.selectedIndex].value)) {
        muestraprecio.innerHTML = '$ ' + seleccion.options[seleccion.selectedIndex].value + ' </br>';
    } else {

        muestraprecio.innerHTML = 'seleccione medida';
    }
}

MostrarProductos();

function MostrarProductos() {
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
                $(".datos").append(
                    `<section class="cajaProductos"  id="${categorias[k]}">  
                        <h1 class="cajaProductos__title--orange">${nombreCategorias[k]}
                        <a href="#mLateral">
                        <img class="subir" src="icono/subir.png" alt="subir"></a> 
                        </h1> 
                    </section>`);

            }

            varios.forEach(producto => {
                console.log("esta es categoria" + producto.categoria);

                $(`#${producto.categoria}`).append(`<div class="productos" id="productos">
                            <img src="${producto.foto}"alt = "Maceteros Altos cuadrados">
                            <h3 class ="cajaProductos__text--grey" > ${producto.nombre}</h3>
                            <p class ="descripcion" id="${producto.codigo}">${producto.descripcion}</p>
                                <h6 > Seleccione medida: </h6> 
                                <select id ="${producto.id}" onchange ="MuestraPrecios(this,${producto.id})">
                                <option>-- ${producto.nombre} --</option>
                                </select > 
                                <p id ="precio${producto.id}" class = "precio"> &nbsp </p>
                            <button class="btn btn-danger" onclick = "agregarAlCarro(${producto.id},${producto})"> Agregar Carro</button><br> <br>
                            </div>`);

                for (var i = 0; i < producto.variedad.length; i++) {

                    $(`#${producto.id}`).append(
                        `<option value="${producto.variedad[i]['precio']}">${producto.variedad[i]['medida']}</option>`);
                }
            });
        }
    });
}