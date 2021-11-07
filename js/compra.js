let total = 0;
let unidades = 0;
let carro = [];
let stock = 0;

// creamos el elemento tituloPrecio (valor acumilado de productos en el carro) para poder imprimir dentro del id correspondiente
let tituloPrecio = document.getElementById("montoCompra");
tituloPrecio.style.textAlign = "right"; // agregamos estilo (texto al lado derecho)
tituloPrecio.innerText = "0";

if (localStorage.getItem('carro')) {
    carro = JSON.parse(localStorage.getItem('carro'));
    console.log(carro)
}

const contenedorCarro = document.getElementById('listado');

function mostrarCarro(maceteros, contenedor) {
    maceteros.forEach(productoCarro => {
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
                        <input type="text" minlength="1" maxlength="2" size="1" >
                    <button>&nbsp + &nbsp</button>
                    <a> Eliminar </a>
                </div>
                <div class="contenidoValor">
                    <span> $ </span>
                    <span> 4.220 </span>
                    <span> C / U </span>
                 </div>
                <div class="contenidoTotal">
                    <span>Total producto:</span> 
                     <span> $4.220 </span>
                </div>
            </div>`;
    });
    const limpiar = document.getElementById('limpiarCarro');
    limpiar.setAttribute('id', 'vaciar');
    limpiar.innerText = 'Vaciar Carro';
    document.getElementById('vaciar').addEventListener('click', vaciarCarro);
    limpiar.appendChild(limpiar);
}
mostrarCarro(carro, contenedorCarro);



function vaciarCarro() {
    carro = [];
    localStorage.setItem('carro', JSON.stringify(carro));
    Swal.fire(
        `carro vacio!!!`
    )
}