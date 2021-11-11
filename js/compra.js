//================= declaracion de globales a Usar
let total = 0;
let unidades = 0;
let carro = [];
let stock = 0;
let totalAPagar;



//=================  recuperamos del storage el carro de compras guardado siempre que tenga informacion
if (localStorage.getItem('carro')) {
    carro = JSON.parse(localStorage.getItem('carro'));
}

//================ comstruimos el elemento para mostrar en el HTML
const contenedorCarro = document.getElementById('listado');

////================ creamos la funcion para mostrar El carro que recibe el carro [] y el elemento
function mostrarCarro(maceteros, contenedor) {
    if (maceteros.length > 0) { //================ validamos que maceteros no este vacio (carro = macetero)
        totalAPagar = 0;
        maceteros.forEach(productoCarro => {
            totalAPagar = totalAPagar + productoCarro.total;

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
            categoria.innerHTML = `${productoCarro.categoria}`;
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
            carroid.innerHTML = `Código: ${productoCarro.id}`;
            contenidoInfo.appendChild(carroid);

            mostrandoCarro.appendChild(contenidoInfo);

            const contenidoCant = document.createElement('div');
            contenidoCant.setAttribute('class', 'contenidoCant');

            const restarcant = document.createElement('button');
            if (productoCarro.id == 1) {
                restarcant.setAttribute("disabled", true);
            }
            restarcant.setAttribute('class', 'restar');
            restarcant.setAttribute('id', `resta${productoCarro.id}`);
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
            sumarcant.setAttribute('id', `suma${productoCarro.id}`);
            sumarcant.innerHTML = `&nbsp + &nbsp <br>`;
            contenidoCant.appendChild(sumarcant);

            const eliminarprod = document.createElement('button');
            eliminarprod.setAttribute('class', 'btn btn-danger');
            eliminarprod.setAttribute('id', `elimina${productoCarro.id}`);
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

            document.getElementById(`suma${productoCarro.id}`).addEventListener('click', () => {
                sumarcantidad(`${productoCarro.id}`);
            });

            document.getElementById(`resta${productoCarro.id}`).addEventListener('click', () => {
                restarcantidad(`${productoCarro.id}`);
            });

        });
        ////============= construimos un elemento el cual sera boton y llamara a la funcion limpiarcarro    
        const limpiar = document.getElementById('limpiarCarro');
        limpiar.setAttribute('id', 'vaciar');
        limpiar.setAttribute('class', 'btn btn-danger');
        limpiar.innerText = 'Vaciar Carro';
        document.getElementById('vaciar').addEventListener('click', vaciarCarro); // evento click llama a la funcion

        const tituloPrecio = document.getElementById("montoCompra");
        tituloPrecio.innerHTML = "Total a pagar $" + totalAPagar;
        console.log("este es el total" + totalAPagar);
        datoscompra.appendChild(tituloPrecio);

        const btnComprar = document.getElementById('botonComprar');
        btnComprar.innerText = 'Comprar';
        btnComprar.setAttribute('class', 'btn btn-secondary');
        datoscompra.appendChild(btnComprar);
        //limpiar.parendChild(limpiar);

        ////================ si esta vacio maceteros indicara que esta vacio el carro
    } else {

        contenedor.innerHTML = `
    <div class="datos__title--tprincipal cajaProductos" >
        <div>
            <br>
            <h3> Carro Vacio </h3>
        </div>
        <div >
            <img src="icono/carro.svg" class="carro" >
        </div>
    </div>`;
    }

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

    const productoEncontrado = carro.find(producto => producto.id === parseInt(indices));
    productoEncontrado.cantidad++;
    productoEncontrado.total = productoEncontrado.cantidad * productoEncontrado.precio;
    localStorage.setItem('carro', JSON.stringify(carro));
    // const actcant = document.createElement('input');
    // actcant.setAttribute('value', `${productoEncontrado.cantidad}`);
    // contenidoCant.appendChild(actcant)
}

function restarcantidad(indicer) {
    const restarProducto = carro.find(producto => producto.id === parseInt(indicer));
    restarProducto.cantidad--;
    restarProducto.total = restarProducto.cantidad * restarProducto.precio;
    localStorage.setItem('carro', JSON.stringify(carro));

}

function eliminarProducto(indicee) {
    //const productoeliminados = carro.find(producto => producto.id === parseInt(id));
    alert("aprete Eliminar")
    console.log(indicee);
    localStorage.setItem('carro', JSON.stringify(carro));
    mostrarCarro(carro, contenedorCarro);
}