const CUADRADO = 15000;
const HEXAGONAL = 18000;
const TRIANGULAR = 10000;
const PORTALLAVE = 13000;
const REPISA = 20000;
const JARDINERA = 16500;
let opc;
let menu;
let cant = 0;
let cantidad = 0;
let total = 0;
let totalcompra = 0;
let continuar;
const listado =  `Escoge un Producto que desea comprar:
1.-Macetero cuadrado ________________ $ 15.000.-
2.-Macetero hexagonal _______________ $ 18.000.-
3.-Macetero Triangular _______________ $ 10.000.-
4.-Porta LLave ________________________ $ 13.000.-
5._Repisa ______________________________ $ 20.000.-
6._Jardinera ___________________________ $ 16.500.-
7.-Salir
`;


// funcion validacion opcion menu
function validacion(opc){  
    if(!isNaN(opc) && opc != null && opc != ""){ // valida que sea numero
        if ((opc > 0) || (opc <= 7)){ // valida que la seleccion este en el menu
            return(opc);
        }else{
            opc="invalido";
            return(opc);
        }
    }else {
        opc="invalido";
        return(opc);
    }
    
}


// funcion validacion  cantidad
function validarCantidad(cant){  
    if(!isNaN(cant) && cant != null && cant != ""){ // valida que sea numero
        if ((cant > 0)||(cant <= 50) ){ // valida que la cantidad sea mayor a 1
            return(cant);
        }else{
            cant="nulo";
            return(cant);
        }
    }else {
        cant="nulo";
        return(cant);
    }
    
}


//funcion para pedir cantidad
function pedircantidad (){
    do{
        cantidad = parseInt(prompt("Ingrese cantidad "));
        cantidad = validarCantidad(cantidad)
        if (cantidad === "nulo"){
             alert("favor ingrese cantidad valida (maximo 50 unidades)")
            }
        else{
            return (cantidad);
        }
    }while(cantidad === "nulo")
}

function menuInicial(){
do {
menu = parseInt(prompt(listado));
    menu = validacion(menu)
    if (menu === "invalido"){
        alert("Debe ingresar una Opcion Valida")
    }
}while(menu === "invalido")

switch(menu){
    case 1:
        cantidad = pedircantidad();
        total = cantidad * CUADRADO;
        alert("Producto ingresado exitosamente");
        continuar=prompt("desea seguir comprando   S");
        return(continuar);
        break

    case 2:
        cantidad = pedircantidad();
        total = cantidad * HEXAGONAL;
        alert("Producto ingresado exitosamente");
        continuar=prompt("desea seguir comprando   S");
        return(continuar);
        break

    case 3:
        cantidad = pedircantidad();
        total = cantidad * TRIANGULAR;
        alert("Producto ingresado exitosamente");
        continuar=prompt("desea seguir comprando   S");
        return(continuar);
        break
    case 4:
        cantidad = pedircantidad();
        total = cantidad * PORTALLAVE;
        alert("Producto ingresado exitosamente");
        continuar=prompt("desea seguir comprando   S");
        return(continuar);
        break
    case 5:
        cantidad = pedircantidad();
        total = cantidad * REPISA;
        alert("Producto ingresado exitosamente");
        continuar=prompt("desea seguir comprando   S");
        return(continuar);
        break
    case 6:
        cantidad = pedircantidad();
        total = cantidad * JARDINERA;
        alert("Producto ingresado exitosamente");
        continuar=prompt("desea seguir comprando   S");
        return(continuar);
        break
    default:
        alert("adios");
}
}

do{
continuar = menuInicial();
totalcompra= totalcompra + total;
}while(continuar ==="S")

alert("Monto total de la compra es $ "+ totalcompra);
/*Funcion addToCart ejectuta la venta del producto seleccionado
RECIBE
Opt: Opcion seleccionada
Qty: Cantidad deseada por el usuario
*/ 
    
// INGRESOS VARIABLES 
// const IVA = 1.19;
// let resultadoParcial= 0;
// let fleteNeto = 0;
// let productoNeto = 0;
// let costoProducto = 0;
// let ganancia = 0;
// let kilos = 0;
// let precioKilo = 0;
// let numero = 0;





// // calcula el valor NETO de despacho 
// function valorFlete(kilos,precioKilo){
//     fleteNeto= kilos * precioKilo;
//     let fleteIva = (fleteNeto*IVA);
//     return (fleteIva);
// }


// // Calcula el valor neto del producto incluido el margen de ganancia
// function precioProducto(costoProducto, ganancia) {
//     let margen = (ganancia/100)
//     productoNeto= (costoProducto *(1+margen));
//     let productoIva = productoNeto*IVA;
//     return(productoIva);
// }

// // funcion para validar que dato ingresado sea numero mayor a cero de lo contario devuelve nulo 
// // para que en el ciclo vuelva a solicitar la informacion
// function validacion(numero){  
//     if(!isNaN(numero) && numero != null && numero != ""){
//         if (numero > 0){
//             return(numero);
//         }else{
//             numero="nulo";
//             return(numero);
//         }
//     }else {
//         numero="nulo";
//         return(numero);
//     }
    
// }


// // Solicitud de datos llamando a la funcion validar (que sea mayor a cero y que no sea letra)
// do{
//     costoProducto = parseInt(prompt("Ingrese costo del producto (NETO)"));
//     costoProducto = validacion(costoProducto)
//     if (costoProducto === "nulo"){
//         alert("favor ingrese precio mayor a 0")
//     }
// }while(costoProducto === "nulo")

// do{
//     ganancia = parseInt(prompt("Ingrese margen ganancia en %  (ej. 15)"));
//     ganancia = validacion(ganancia)
//     if (ganancia === "nulo"){
//          alert("favor ingrese precio mayor a 0")
//     }
// }while(ganancia === "nulo")

// do{
//     precioKilo = parseInt(prompt("Ingrese Costo de flete (por kg)"));
//     precioKilo = validacion(precioKilo)
//     if (precioKilo === "nulo"){
//       alert("favor ingrese precio mayor a 0")
//     }
// }while(precioKilo === "nulo")

// do{
//     kilos = parseInt(prompt("Ingrese peso del Producto kg (Ej: 5)"));
//     kilos = validacion(kilos)
//     if (kilos === "nulo"){
//       alert("favor ingrese precio mayor a 0")
//     }
// }while(kilos === "nulo")



// // llamaos a funciones entregandole valores y recibiendo un retorno
// let flete = valorFlete (kilos,precioKilo);
// let producto = precioProducto(costoProducto, ganancia);

// let totalNeto=fleteNeto + productoNeto;
// let total= flete + producto;
// let impuesto = total - totalNeto;


// //se imprime valor de producto desglosado (valor flete y producto total y luego desglose neto  impuesto y total)

// alert("Valor Producto       $ "+ producto.toFixed(1) + "\nValor flete              $ "+ flete.toFixed(1) + "\n\nTotal neto              $ "+ totalNeto.toFixed(1) +"\nImpuesto               $ "+impuesto.toFixed(1) + "\nTOTAL________ $"+total.toFixed(0) +"\n\nValor recomendado para venta del producto al publico $"+total.toFixed(0))