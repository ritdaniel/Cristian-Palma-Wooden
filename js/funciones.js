class Carro {
    constructor(indice, id, codigo, NombCategoria, nombre, foto, descripcion, precio, cantidad, total) {
        this.indice = indice;
        this.id = id;
        this.codigo = codigo;
        this.NombCategoria = NombCategoria;
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.total = total;
    }
}
let este = 1;
let total = 0;
let unidades = 0;
let carro = [];
let stock = 0;
let cantidadProductos = 0;


if (localStorage.getItem('carro')) {
    carro = JSON.parse(localStorage.getItem('carro'));
}


function agregarAlCarro(id, idvariedad) {
    if (localStorage.getItem('carro')) {
        carro = JSON.parse(localStorage.getItem('carro'));
    }
    var indiceproductos = carro.length;
    let i = idvariedad - 1;
    const ProdJson = "productos.json";
    $.getJSON(ProdJson, function(respuesta, estado) {
        if (estado === "success") {
            let idProd = respuesta.Productos;
            idProd.forEach(agregar => {
                if (agregar.id === id) {
                    if (carro.some(listaproductos => listaproductos.codigo === agregar.variedad[i]['codigo'])) {
                        const actualizarProducto = carro.find(product => product.codigo === agregar.variedad[i]['codigo']);
                        actualizarProducto.stock = actualizarProducto.stock - 1;
                        actualizarProducto.cantidad++;
                        actualizarProducto.total = actualizarProducto.cantidad * actualizarProducto.precio;
                        Swal.fire({
                            title: agregar.nombre,
                            text: `Producto se encuentra en el carro se actualizara cantidad`,
                            imageUrl: agregar.foto,
                            imageWidth: 150,
                            imageHeight: 150,
                        })

                    } else {
                        let medida = agregar.variedad[i]['medida'];
                        const productoMejorado = new Carro(indiceproductos, agregar.id, agregar.variedad[i]['codigo'], agregar.NombCategoria, agregar.nombre, agregar.foto, agregar.variedad[i]['descripcion'], agregar.variedad[i]['precio'], 1, agregar.variedad[i]['precio']);
                        console.log(productoMejorado)
                        carro.push(productoMejorado);
                        Swal.fire({
                            title: agregar.nombre + ' ' + medida,
                            text: 'Producto Ingresado al carro Exitosamente',
                            imageUrl: agregar.foto,
                            imageWidth: 150,
                            imageHeight: 150,
                        });
                    }
                    localStorage.setItem('carro', JSON.stringify(carro));
                    Calcular();
                }
            });
        }
    });
}

function Calcular() {
    total = 0;
    cantidadProductos = 0;
    carro.forEach(element => {
        total += element.total;
        cantidadProductos = cantidadProductos + element.cantidad;
    });
    tituloPrecio.innerText = total;
    tituloTotalUnidades.innerText = cantidadProductos;
    // guardamos el carro localStorage cada vez que se agrega un producto para que no se pierda
    localStorage.setItem('carro', JSON.stringify(carro));
}

// creamos el elemento tituloPrecio (valor acumilado de productos en el carro) para poder imprimir dentro del id correspondiente
let tituloPrecio = document.getElementById("montoCompra");
tituloPrecio.style.textAlign = "right"; // agregamos estilo (texto al lado derecho)
tituloPrecio.innerText = "0";

// creamos el elemento tituloTotalUnidades (cantidad productos en el carro) para poder imprimir dentro del id correspondiente    
let tituloTotalUnidades = document.getElementById("Cantidad");
tituloTotalUnidades.style.textAlign = "right"; // agregamos estilo (texto al lado derecho)
tituloTotalUnidades.innerText = "0";
// recuperamos el carro cuando la persona se cambio de pagina
if (localStorage.getItem('carro')) {
    carro = JSON.parse(localStorage.getItem('carro'));
    tituloTotalUnidades.innerText = carro.length;
    Calcular();
}