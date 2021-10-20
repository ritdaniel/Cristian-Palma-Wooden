
function Productos( codigo, nombre, medida, color, precio, stock){
    this.codigo = codigo;
    this.nombre = nombre;
    this.medida = medida;
    this.color = color;
    this.precio = precio;
    this.stock = stock;
}

const producto1 = new Productos ("HEXAGONAL","MACETERO HEXAGONAL","30CM X 30 CM","NATURAL",15000, 8);
const producto2 = new Productos ("ALTO","MACETERO ALTO","40 CM X 18 CM","NATURAL",19000, 10);
const producto3 = new Productos ("TRIANGULAR","MACETERO TRIANGULAR","15 CM X 23 CM","NATURAL",12000, 5);
const producto4 = new Productos ("");
// declaracion de variables
let menu;
let listadoproductos;
let opcion;
let tipo;
let nuevoPrecio;
let nuevoStock;

const menuPrincipal =  `Menu Administracion de Productos:
1.-Agregar .-
2.-Modificar precio.-
3.-Modificar stock.-
4.-Salir
`;
const listado =  `Producto que desea Modificar:
1.-Macetero cuadrado .-
2.-Macetero hexagonal .-
3.-Macetero Triangular.-
4.-Salir
`;

// Funcion Validacion opcion de menus sea valida
function validacion (opcion, tipo){  
    if(!isNaN(opcion) && opcion != null && opcion != ""){ // valida que sea numero
        if(tipo ==="menu"){
                if ((opcion > 0) && (opcion <= 4)){ // valida que la seleccion este en el menu
                    return(opcion);
                }
                if ((opcion <= 0) || (opcion > 4)){
                    opcion="invalido";
                    return(opcion);
                }
            }
        if(tipo ==="numero"){
            if (opcion >= 0) { // valida que la seleccion este en el menu
                return(opcion);
            }
            if (opcion < 0){
                opcion="invalido";
                return(opcion);
            }
        }
    }else {
        opcion="invalido";
        return(opcion);
    }
}

// funcion menu inicial
function menuInicial(){
    do {
    menu = parseInt(prompt(menuPrincipal));
    menu = validacion(menu,"menu");
        if (menu === "invalido"){
            alert("Debe ingresar una Opcion Valida")
        }
    }while(menu === "invalido")
    return(menu);
}


// funcion para modificar precio validando que el numero sea mayor o igual a cero
function modificarPrecio(){
   do {
        listadoproductos = parseInt(prompt(listado));
        listadoproductos = validacion(listadoproductos, "menu");
        if (listadoproductos === "invalido"){
            alert("Debe ingresar una Opcion Valida")
        }
        if (listadoproductos != "invalido"){
            do{
                nuevoPrecio = parseInt(prompt("El Valor Actual es: $" + producto1.precio ));
                nuevoPrecio = validacion (nuevoPrecio,"numero");
                if ((nuevoPrecio != "invalido"))
                    {
                    switch (listadoproductos){
                        case 1:
                                producto1.precio = nuevoPrecio;
                                alert("Nuevo Precio: $"+producto1.precio);
                                break;
                        case 2:
                                producto2.precio = nuevoPrecio;
                                alert("Nuevo Precio: $"+producto2.precio);
                                 break;
                        case 3:
                                producto3.precio = nuevoPrecio;
                                alert("Nuevo Precio: $"+producto3.precio);
                                break;
                        default:
                                alert(" Adios");
                                break;
    
                         }
                    }
                else{
                    alert("Debe ingresar una Opcion Valida")
                    }    
        
            }while (nuevoPrecio === "invalido");
        }
    }while(listadoproductos === "invalido");
}

// modificarion de stock
function modificarStock(){
    do {
         listadoproductos = parseInt(prompt(listado));
         listadoproductos = validacion(listadoproductos, "menu");
         if (listadoproductos === "invalido"){
             alert("Debe ingresar una Opcion Valida")
         }
         if (listadoproductos != "invalido"){
             do{
                 nuevoStock = parseInt(prompt("El Stock Actual es: " + producto1.stock ));
                 nuevoStock = validacion (nuevoStock,"numero");
                 if ((nuevoStock != "invalido"))
                     {
                     switch (listadoproductos){
                        case 1:
                                producto1.stock = nuevoStock;
                                alert("Nuevo Stock: "+producto1.stock)
                                break;
                        case 2:
                                producto2.stock = nuevoStock;
                                alert("Nuevo Stock: "+producto2.stock)
                                break;
                        case 3:
                                producto3.stock = nuevoStock;
                                alert("Nuevo Stock: "+producto3.stock)
                                break;
                        default:
                                 alert(" Adios")
                                 break;

                     }
                     }
                 else{
                     alert("Debe ingresar una Opcion Valida")
                     }    
         
             }while (nuevoStock === "invalido");
         }
     }while(listadoproductos === "invalido");
 }

do{
menu = menuInicial();
if (menu === 1){
    let codigo = prompt("Ingresar CODIGO de producto").toUpperCase();
    let nombre = prompt("Ingresar NOMBRE del producto").toUpperCase();
    let medida = prompt("Ingresar MEDIDA del producto").toUpperCase();
    let color = prompt("Ingresar COLOR del producto").toUpperCase();
    let precio = prompt("Ingresar PRECIO del producto");
    let stock = prompt("Ingresar STOCK del producto");
    const producto6 = new Productos(codigo, nombre, medida, color, precio, stock);
    alert(`              PRODUCTO IMGRESADO \n
    -> Codigo: `+producto6.codigo +`
    -> Nombre: `+producto6.nombre +`
    -> Medida: `+producto6.medida+`
    -> Color: `+producto6.color+`
    -> Precio: `+producto6.precio+`
    -> Stock: `+producto6.stock+`\n
    ----------------------------\n\n`)
}
if (menu === 2){
    modificarPrecio(); 
}
if (menu === 3){
    modificarStock(); 
}
}while(menu != 4)
