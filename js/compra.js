let total = 0;
let unidades = 0;
let carro = [];
let stock = 0;

if (localStorage.getItem('carro')) {
    carro = JSON.parse(localStorage.getItem('carro'));
}

const contenedorCarro = document.getElementById('listado');

function mostrarCarro(maceteros, contenedor) {
    if (maceteros.length > 0) {
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
    } else contenedor.innerHTML = `carro vacio`;
    const limpiar = document.getElementById('limpiarCarro');
    limpiar.setAttribute('id', 'vaciar');
    limpiar.innerText = 'Vaciar Carro';
    document.getElementById('vaciar').addEventListener('click', vaciarCarro);
    limpiar.appendChild(limpiar);
    let tituloPrecio = document.getElementById("montoCompra");
    tituloPrecio.innerText = totalAPagar;
    tituloPrecio.appendChild(tituloPrecio);

}
mostrarCarro(carro, contenedorCarro);

let tituloPrecio = document.getElementById("montoCompra");
tituloPrecio.innerText = totalAPagar;
tituloPrecio.appendChild(tituloPrecio);

function vaciarCarro() {
    carro = [];
    localStorage.setItem('carro', JSON.stringify(carro));
    mostrarCarro(carro, contenedorCarro);
    Swal.fire(
        `carro vacio!!!`
    )

}