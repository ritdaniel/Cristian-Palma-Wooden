function mostrarEstudiantes() {
    const ProductoJson = "productos.json";
    $.getJSON(ProductoJson, function(respuesta, estado) {

        if (estado === "success") {
            let varios = respuesta.Productos;
            $("#datos").append(`<section class="cajaProductos"> `);
            varios.forEach(producto => {
                $(".cajaProductos").append(`<div class="productos" id="productos">
        <h1 class="cajaProductos__title--orange">${producto.categoria}</h1>
        <img src="${producto.foto}"alt = "Maceteros Altos cuadrados">
        <h3 class ="cajaProductos__text--grey" > ${producto.nombre}</h3>
        <p class ="descripcion" >${producto.descripcion}</p>
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
    });
}

mostrarEstudiantes();