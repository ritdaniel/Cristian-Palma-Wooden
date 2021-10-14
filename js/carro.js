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