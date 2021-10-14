

// INGRESOS VARIABLES 
const IVA = 1.19;
let resultadoParcial= 0;
let fleteNeto = 0;
let productoNeto = 0;
let costoProducto = 0;
let ganancia = 0;
let kilos = 0;
let precioKilo = 0;
let numero = 0;


// calcula el valor NETO de despacho 
function valorFlete(kilos,precioKilo){
    fleteNeto= kilos * precioKilo;
    let fleteIva = (fleteNeto*IVA);
    return (fleteIva);
}


// Calcula el valor neto del producto incluido el margen de ganancia
function precioProducto(costoProducto, ganancia) {
    let margen = (ganancia/100)
    productoNeto= (costoProducto *(1+margen));
    let productoIva = productoNeto*IVA;
    return(productoIva);
}

// funcion para validar que dato ingresado sea numero mayor a cero de lo contario devuelve nulo 
// para que en el ciclo vuelva a solicitar la informacion
function validacion(numero){  
    if(!isNaN(numero) && numero != null && numero != ""){
        if (numero > 0){
            return(numero);
        }else{
            numero="nulo";
            return(numero);
        }
    }else {
        numero="nulo";
        return(numero);
    }
    
}


// Solicitud de datos llamando a la funcion validar (que sea mayor a cero y que no sea letra)
do{
    costoProducto = parseInt(prompt("Ingrese costo del producto (NETO)"));
    costoProducto = validacion(costoProducto)
    if (costoProducto === "nulo"){
        alert("favor ingrese precio mayor a 0")
    }
}while(costoProducto === "nulo")

do{
    ganancia = parseInt(prompt("Ingrese margen ganancia en %  (ej. 15)"));
    ganancia = validacion(ganancia)
    if (ganancia === "nulo"){
         alert("favor ingrese precio mayor a 0")
    }
}while(ganancia === "nulo")

do{
    precioKilo = parseInt(prompt("Ingrese Costo de flete (por kg)"));
    precioKilo = validacion(precioKilo)
    if (precioKilo === "nulo"){
      alert("favor ingrese precio mayor a 0")
    }
}while(precioKilo === "nulo")

do{
    kilos = parseInt(prompt("Ingrese peso del Producto kg (Ej: 5)"));
    kilos = validacion(kilos)
    if (kilos === "nulo"){
      alert("favor ingrese precio mayor a 0")
    }
}while(kilos === "nulo")



// llamaos a funciones entregandole valores y recibiendo un retorno
let flete = valorFlete (kilos,precioKilo);
let producto = precioProducto(costoProducto, ganancia);

let totalNeto=fleteNeto + productoNeto;
let total= flete + producto;
let impuesto = total - totalNeto;


//se imprime valor de producto desglosado (valor flete y producto total y luego desglose neto  impuesto y total)

alert("Valor Producto       $ "+ producto.toFixed(1) + "\nValor flete              $ "+ flete.toFixed(1) + "\n\nTotal neto              $ "+ totalNeto.toFixed(1) +"\nImpuesto               $ "+impuesto.toFixed(1) + "\nTOTAL________ $"+total.toFixed(0) +"\n\nValor recomendado para venta del producto al publico $"+total.toFixed(0));
