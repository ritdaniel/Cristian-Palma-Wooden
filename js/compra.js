//================= declaracion de globales a Usar
let total = 0;
let unidades = 0;
let carro = [];
let stock = 0;
let totalAPagar;
let tituloPrecio;


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
            contenedor.innerHTML += `
            <div class="mostrandoCarro cajaProductos" >
                <div class="contenidoImg">
                        <img src="${productoCarro.foto}" class="imgCarro">
                </div>
                <div class="contenidoInfo">
                    <h7>${productoCarro.categoria}</h7> 
                    <h6> ${productoCarro.nombre}</h6>
                    <h6> ${productoCarro.descripcion}</h6>
                    <h8> Código ${productoCarro.id}</h8>
                </div>
                <div class="contenidoCant">
                    <button class="restar">&nbsp - &nbsp</button>
                        <input type="text" minlength="1" maxlength="2" size="1" value="${productoCarro.cantidad}">
                    <button class="sumar">&nbsp + &nbsp</button>
                <br>
                <br>
                    <button class="btn btn-danger" onclick="">Eliminar</button>
                </div>
                <div class="contenidoValor">
                    <span> $ </span>
                    <span> ${productoCarro.precio}</span>
                    <span> C / U </span>
                 </div>
                <div class="contenidoTotal">
                    <span>Total producto:</span> 
                     <span> $${productoCarro.total} </span>
                </div>
            </div>`;
        });
        ////============= construimos un elemento el cual sera boton y llamara a la funcion limpiarcarro    
        const limpiar = document.getElementById('limpiarCarro');
        limpiar.setAttribute('id', 'vaciar');
        limpiar.setAttribute('class', 'btn btn-danger');
        limpiar.innerText = 'Vaciar Carro';
        document.getElementById('vaciar').addEventListener('click', vaciarCarro); // evento click llama a la funcion



        tituloPrecio = document.getElementById("montoCompra");
        tituloPrecio.innerHTML = "Total a pagar $" + totalAPagar;
        console.log("este es el total" + tituloPrecio);
        datoscompra.appendChild(tituloPrecio);

        const btnComprar = document.getElementById('botonComprar');
        btnComprar.innerText = 'Comprar';
        btnComprar.setAttribute('class', 'btn btn-secondary');
        datoscompra.appendChild(btnComprar);
        descripcionTotal.parendChild(limpiar);

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

function actualizarCantidad(entrada, id) {
    console.log(id);
    // productoCarro[id].cantidad = entrada;

    // alert("PRESIONASTE EL ENTER !!!" + enter);
}