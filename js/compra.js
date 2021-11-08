//================= declaracion de globales a Usar
let total = 0;
let unidades = 0;
let carro = [];
let stock = 0;

//=================  recuperamos del storage el carro de compras guardado siempre que tenga informacion
if (localStorage.getItem('carro')) {
    carro = JSON.parse(localStorage.getItem('carro'));
}


//================ comstruimos el elemento para mostrar en el HTML
const contenedorCarro = document.getElementById('listado');

////================ creamos la funcion para mostrar El carro que recibe el carro [] y el elemento
function mostrarCarro(maceteros, contenedor) {
    if (maceteros.length > 0) { //================ validamos que maceteros no este vacio (carro = macetero)
        let totalAPagar = 0;
        maceteros.forEach(productoCarro => {
            totalAPagar = totalAPagar + productoCarro.total;
            contenedor.innerHTML += `
            <div class="mostrandoCarro cajaProductos" >
                <div class="contenidoImg">
                    <a href ="" >
                        <img src="${productoCarro.foto}" class="imgCarro">
                    </a>
                </div>
                <div class="contenidoInfo">
                    <h7>${productoCarro.categoria}</h7> 
                    <h6> ${productoCarro.nombre}</h6>
                    <h6> ${productoCarro.descripcion}</h6>
                    <h8> Código ${productoCarro.id}</h8>
                </div>
                <div class="contenidoCant">
                    <button>&nbsp - &nbsp</button>
                        <input type="text" minlength="1" maxlength="2" size="1" value="${productoCarro.cantidad}" >
                    <button>&nbsp + &nbsp</button>
                    <a> Eliminar </a>
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
        ////================ si esta vacio maceteros indicara que esta vacio el carro
    } else contenedor.innerHTML = `
    <div class="datos__title--tprincipal cajaProductos" >
        <div>
            <br>
            <h3> Carro Vacio </h3>
        </div>
        <div >
            <img src="icono/carro.svg" class="carro" >
        </div>
    </div>`;

    ////============= construimos un elemento el cual sera boton y llamara a la funcion limpiarcarro    
    const limpiar = document.getElementById('limpiarCarro');
    limpiar.setAttribute('id', 'vaciar');
    limpiar.innerText = 'Vaciar Carro';

    document.getElementById('vaciar').addEventListener('click', vaciarCarro); // evento click llama a la funcion
    limpiar.appendChild(limpiar);

    let tituloPrecio = document.getElementById("montoCompra");
    tituloPrecio.innerHTML = totalAPagar;
    console.log("este es el total" + tituloPrecio);
    //tituloPrecio.appendChild(limpiar);

}
mostrarCarro(carro, contenedorCarro);

function vaciarCarro() {
    carro = [];
    localStorage.setItem('carro', JSON.stringify(carro));
    Swal
        .fire(
            `carro vacio!!!`
        )
    mostrarCarro(carro, contenedorCarro);


}