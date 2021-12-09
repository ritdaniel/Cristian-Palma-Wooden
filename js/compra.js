//================= declaracion de globales a Usar
let total = 0;
let unidades = 0;
let carro = [];
let stock = 0;
let totalAPagar;
let buscado;

//=================  recuperamos del storage el carro de compras guardado siempre que tenga informacion
if (localStorage.getItem('carro')) {
    carro = JSON.parse(localStorage.getItem('carro'));
}


//================ comstruimos el elemento para mostrar en el HTML
const contenedorCarro = document.getElementById('listado');

////================ creamos la funcion para mostrar El carro que recibe el carro [] y el elemento
function mostrarCarro(maceteros, contenedor) {

    let estotal = maceteros.length;
    contenedor = document.getElementById("listado");
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);

    }

    if (maceteros.length > 0) { //================ validamos que maceteros no este vacio (carro = macetero)
        totalAPagar = 0;
        buscado = 0;
        maceteros.forEach(productoCarro => {
            totalAPagar += productoCarro.total; // Va sumando el total del carro
            ////================ valida que la cantdad de producto no sea 0 para mostrar carro
            if (productoCarro.cantidad > 0) {
                const mostrandoCarro = document.createElement('div');
                mostrandoCarro.setAttribute('class', 'mostrandoCarro cajaProductos');

                const contenidoImg = document.createElement('div');
                contenidoImg.setAttribute('class', 'contenidoImg');

                const imgCarro = document.createElement('img');
                imgCarro.setAttribute('class', 'imgCarro');
                imgCarro.setAttribute("src", `${productoCarro.foto }`);
                contenidoImg.appendChild(imgCarro);

                mostrandoCarro.appendChild(contenidoImg);

                const contenidoInfo = document.createElement('div');
                contenidoInfo.setAttribute('class', 'contenidoInfo');

                const categoria = document.createElement('h6');
                categoria.setAttribute('class', 'fontCategoria');
                categoria.innerHTML = `${productoCarro.NombCategoria}`;
                contenidoInfo.appendChild(categoria);

                const nombre = document.createElement('h6');
                nombre.setAttribute('class', 'fontNombre');
                nombre.innerHTML = `${productoCarro.nombre}`;
                contenidoInfo.appendChild(nombre);

                const descripcion = document.createElement('h6');
                descripcion.setAttribute('class', 'fontDescripcion');
                descripcion.innerHTML = `${productoCarro.descripcion}<br>`;
                contenidoInfo.appendChild(descripcion);

                const carroid = document.createElement('h6');
                carroid.setAttribute('class', 'fontcarroid');
                carroid.innerHTML = `Código: ${productoCarro.codigo}`;
                contenidoInfo.appendChild(carroid);

                mostrandoCarro.appendChild(contenidoInfo);

                const contenidoCant = document.createElement('div');
                contenidoCant.setAttribute('class', 'contenidoCant');

                const restarcant = document.createElement('button');
                restarcant.setAttribute('class', 'restar');
                restarcant.setAttribute('id', `resta${productoCarro.indice}`);
                // desabilita el boton restar cuando la cantidad es 1
                if (productoCarro.cantidad == 1) {
                    restarcant.setAttribute("disabled", true);
                }
                restarcant.innerHTML = `&nbsp - &nbsp`;
                contenidoCant.appendChild(restarcant)

                const inputcant = document.createElement('input');
                inputcant.setAttribute('minlength', 1);
                inputcant.setAttribute('maxlength', 2);
                inputcant.setAttribute('size', 2);
                inputcant.setAttribute('value', `${productoCarro.cantidad}`);
                contenidoCant.appendChild(inputcant)

                const sumarcant = document.createElement('button');
                sumarcant.setAttribute('class', 'sumar');
                sumarcant.setAttribute('id', `suma${productoCarro.indice}`);
                sumarcant.innerHTML = `&nbsp + &nbsp <br>`;
                contenidoCant.appendChild(sumarcant);

                const eliminarprod = document.createElement('button');
                eliminarprod.setAttribute('class', 'btn btn-danger');
                eliminarprod.setAttribute('id', `elimina${productoCarro.indice}`);
                eliminarprod.innerHTML = `Eliminar`;
                contenidoCant.appendChild(eliminarprod);

                mostrandoCarro.appendChild(contenidoCant);

                const contenidoValor = document.createElement('div');
                contenidoValor.setAttribute('class', 'contenidoValor')

                const precioprod = document.createElement('h5');
                precioprod.setAttribute('class', 'fontPrecioUnitario')
                precioprod.innerText = `$ ${productoCarro.precio}.- c/u`;
                contenidoValor.appendChild(precioprod);

                mostrandoCarro.appendChild(contenidoValor);

                const contenidoTotal = document.createElement('div');
                contenidoTotal.setAttribute('class', 'contenidoTotal')

                const totalproducto = document.createElement('h5');
                totalproducto.setAttribute('class', 'fontPrecio');
                totalproducto.innerText = `$ ${productoCarro.total}.-`;

                contenidoTotal.appendChild(totalproducto);

                mostrandoCarro.appendChild(contenidoTotal);
                contenedor.appendChild(mostrandoCarro);

                document.getElementById(`suma${productoCarro.indice}`).addEventListener('click', () => {
                    sumarcantidad(`${productoCarro.indice}`);
                });

                document.getElementById(`resta${productoCarro.indice}`).addEventListener('click', () => {
                    restarcantidad(`${productoCarro.indice}`);
                });
                document.getElementById(`elimina${productoCarro.indice}`).addEventListener('click', () => {
                    eliminarProducto(`${productoCarro.indice}`, estotal);
                });
            }
        });




        ////================ si esta vacio maceteros indicara que esta vacio el carro
    } else {
        totalAPagar = 0;
        contenedor.innerHTML = `
                <div class="datos__title--tprincipal cajaProductos" >
                    <div>
                     <br>
                             <h3> Carro Vacio </h3>
                    </div>
                <div >
                 <img src="icono/carro2.svg" class="carro" >
        </div>
    </div>`;
    }

    //=============  Eliminados los nodos hijos para mostrar nuevamente los valores  actualizados
    const descripcionTotal = document.getElementById('descripcionTotal');
    while (descripcionTotal.firstChild) {
        descripcionTotal.removeChild(descripcionTotal.firstChild);
    }

    ////============= construimos un elemento el cual sera boton y llamara a la funcion limpiarcarro 
    const limpiar = document.createElement('div');
    limpiar.setAttribute('id', 'vaciar');
    limpiar.setAttribute('class', 'btn btn-danger');
    limpiar.innerText = 'Vaciar Carro';
    descripcionTotal.appendChild(limpiar);


    //=============  Muestra los datos del total 
    const datoscompra = document.createElement('div');
    datoscompra.setAttribute('id', 'formulario');
    descripcionTotal.appendChild(datoscompra)
    const montoCompra = document.createElement('h4');
    montoCompra.innerText = `Total a pagar $ ${totalAPagar}.-`;
    datoscompra.appendChild(montoCompra);


    //=============  Crea el boton comprar  
    const btnComprar = document.createElement('div');
    btnComprar.setAttribute('id', 'comprar');
    btnComprar.innerText = 'Comprar';
    btnComprar.setAttribute('class', 'btn btn-secondary');

    //=============  Muestra el boton cuando el total no sea vacio
    if (totalAPagar > 0) {

        //=============  Agregamos 2 botones utilizados para mostrar u ocultar el formulario de datos para el despacho
        $("#formulario").append(`<button id="mostrarFormulario"> Agregar Datos despacho </button><br>`);
        $("#formulario").append(`<button id="OcultarFormulario" style="display:none"> Ocultar datos despacho </button><br>`);

        //=============  Agregamos Animaciones concatenadas para mostrar formulario y ocultar botones
        $("#mostrarFormulario").click(function() {
            $("#formularioEntrega").css("background-color", "#CCC").slideDown(2000, function() {
                $("#mostrarFormulario").fadeOut(function() {
                    $("#OcultarFormulario").fadeIn();
                });
            });
        });

        $("#OcultarFormulario").click(function() {
            $("#formularioEntrega").slideUp(2000, function() {
                $("#OcultarFormulario").fadeOut(function() {
                    $("#mostrarFormulario").fadeIn();
                });
            });
        });


        $("#formulario").append(`
        <form id="formularioEntrega" style= "display:none " style= "padding: 10px">
        <br>
            <input name="name" placeholder="Introduce tu hombre" class="required"/><br>
            <br><input name="phone" placeholder="Telefono"/>             <br>
            <br><input name="name" placeholder="Direccion entrega" class="required"/><br>
            <br><input name="mail" placeholder="Email" class="required"/>       <br><br>      
    </form> <br> `);
        datoscompra.appendChild(btnComprar);
        document.getElementById(`comprar`).addEventListener('click', () => {
            pagarCarro();
        });
    }

    document.getElementById(`vaciar`).addEventListener('click', () => {
        vaciarCarro();
    });


    // document.getElementById('vaciar').addEventListener('click', vaciarCarro); // evento click llama a la funcion
}
mostrarCarro(carro, contenedorCarro);


////============= funcion para vaciar el carro
function vaciarCarro() {
    carro = [];
    localStorage.setItem('carro', JSON.stringify(carro));
    Swal
        .fire(
            `carro vacio!!!`
        )
    mostrarCarro(carro, contenedorCarro); ////====llama a funcion para mostrar en la pagina el carro vacio
}


function sumarcantidad(indices) {
    const productoEncontrado = carro.find(producto => producto.indice === parseInt(indices));
    productoEncontrado.cantidad++;
    productoEncontrado.total = productoEncontrado.cantidad * productoEncontrado.precio;
    localStorage.setItem('carro', JSON.stringify(carro));
    mostrarCarro(carro, contenedorCarro)
}



function restarcantidad(indicer) {
    const restarProducto = carro.find(producto => producto.indice === parseInt(indicer));
    restarProducto.cantidad--;
    restarProducto.total = restarProducto.cantidad * restarProducto.precio;
    localStorage.setItem('carro', JSON.stringify(carro));
    mostrarCarro(carro, contenedorCarro)
}



function eliminarProducto(indicee, cant) {
    if (cant == 1) vaciarCarro();

    const eliminarproducto = carro.find(producto => producto.indice === parseInt(indicee));
    var otro = carro.splice(indicee, 1);
    localStorage.setItem('carro', JSON.stringify(carro));
    mostrarCarro(carro, contenedorCarro)
}




function pagarCarro() {
    Swal.fire({
        title: 'Confirmar Pago de productos',
        text: `Total a pagar $ ${totalAPagar}.-`,
        imageUrl: 'icono/carro.svg',
        imageWidth: 150,
        imageHeight: 150,
    });
    carro = [];
    localStorage.setItem('carro', JSON.stringify(carro));
    mostrarCarro(carro, contenedorCarro);
    //MostrarCarroPagado(carro);

}

// function MostrarCarroPagado(carropagado) {
//     carro = [];
//     localStorage.setItem('carro', JSON.stringify(carro));
//     mostrarCarro(carro, contenedorCarro);

//     $(".cajaProductos").append(` 
//                     <table>
//                     <tr>
//                         <th> Producto </th> 
//                         <th> Cantidad </th>
//                         <th> Total </th>
//                     </tr>`);

//     carropagado.forEach(pagado => {
//         $(".cajaProductos").append(`
//                 <tr >
//                     <td>${pagado.nombre}</td> 
//                     <td>${pagado.cantidad} </td> 
//                     <td>${totalAPagar} </td> 
//                     </tr> <
//                  </table>`);

//     });

//     carro = [];
//     localStorage.setItem('carro', JSON.stringify(carro));
// }
//indice, id, categoria, nombre, foto, descripcion, precio, cantidad, total