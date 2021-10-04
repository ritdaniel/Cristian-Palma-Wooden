// PRECIOS MACETEROS ALTOS
function valorAlto() {
    var alto = document.getElementById("medidaAlto");
    const VALORALTO40="$ 19.990.- ";
    const VALORALTO50="$ 21.990.- ";
    const VALORALTO60="$ 23.990.- ";

    if(alto.selectedIndex == "0"){
        document.getElementById("precioA").innerHTML ="";
        }
    if(alto.selectedIndex == "1"){
        document.getElementById("precioA").innerHTML =VALORALTO40;
        }
    if(alto.selectedIndex == "2"){
        document.getElementById("precioA").innerHTML =VALORALTO50;
           }
    if(alto.selectedIndex == "3"){
        document.getElementById("precioA").innerHTML =VALORALTO60;
            }
  }

  // PRECIOS MACETEROS TIPO PIRAMIDE INVERTIDA
  function valorPiramide() {
    var piramide = document.getElementById("medidaPiramide");
    const VALORPIRAMIDE18="$ 12.990.- ";
    const VALORPIRAMIDE23="$ 15.990.- ";
    const VALORPIRAMIDE30="$ 18.990.- ";

    if(piramide.selectedIndex == "0"){
        document.getElementById("precioP").innerHTML ="";
        }
    if(piramide.selectedIndex == "1"){
        document.getElementById("precioP").innerHTML =VALORPIRAMIDE18;
        }
    if(piramide.selectedIndex == "2"){
        document.getElementById("precioP").innerHTML =VALORPIRAMIDE23;
           }
    if(piramide.selectedIndex == "3"){
        document.getElementById("precioP").innerHTML =VALORPIRAMIDE30;
            }
   }

    // PRECIOS MACETEROS CUADRADO BAJO
    function valorBajo() {
        var bajo = document.getElementById("medidaBajo");
        const VALORBAJO25="$ 14.990.- ";
        const VALORBAJO30="$ 17.990.- ";
        const VALORBAJO39="$ 21.990.- ";

        if(bajo.selectedIndex == "0"){
            document.getElementById("precioB").innerHTML ="";
            }
        if(bajo.selectedIndex == "1"){
            document.getElementById("precioB").innerHTML =VALORBAJO25;
            }
        if(bajo.selectedIndex == "2"){
            document.getElementById("precioB").innerHTML =VALORBAJO30;
               }
        if(bajo.selectedIndex == "3"){
            document.getElementById("precioB").innerHTML =VALORBAJO39;
                }
      }

      
    // PRECIOS MACETEROS TIPO CUADRADOS
    function valorCuadrado() {
        var cuadrado = document.getElementById("medidaCuadrado");
        const VALORCUADRADO30="$ 1200.990.- ";
        const VALORCUADRADO40="$ 18.990.- ";
        const VALORCUADRADO50="$ 23.990.- ";
    
        if(cuadrado.selectedIndex == "0"){
            document.getElementById("precioC").innerHTML ="";
            }
        if(cuadrado.selectedIndex == "1"){
            document.getElementById("precioC").innerHTML =VALORCUADRADO30;
            }
        if(cuadrado.selectedIndex == "2"){
            document.getElementById("precioC").innerHTML =VALORCUADRADO40;
               }
        if(cuadrado.selectedIndex == "3"){
            document.getElementById("precioC").innerHTML =VALORCUADRADO50;
                }
      }


  // PRECIOS MACETEROS TIPO HEXAGONAL
    function valorHexagonal() {
        var hexagonal = document.getElementById("medidaHexagonal");
        const VALORHEXAGONAL18="$ 12.990.- ";
        const VALORHEXAGONAL23="$ 16.990.- ";
        const VALORHEXAGONAL30="$ 20.990.- ";
        const VALORHEXAGONAL40="$ 24.990.- ";

        if(hexagonal.selectedIndex == "0"){
            document.getElementById("precioH").innerHTML ="$______ ";
            }
        if(hexagonal.selectedIndex == "1"){
            document.getElementById("precioH").innerHTML =VALORHEXAGONAL18;
            }
        if(hexagonal.selectedIndex == "2"){
            document.getElementById("precioH").innerHTML =VALORHEXAGONAL23;
            }
        if(hexagonal.selectedIndex == "3"){
            document.getElementById("precioH").innerHTML =VALORHEXAGONAL30;
                }
        if(hexagonal.selectedIndex == "4"){
            document.getElementById("precioH").innerHTML =VALORHEXAGONAL40;
                }
    }

     // PRECIOS MACETEROS TIPO TRIANGULAR
     function valorTriangulo() {
        var triangulo = document.getElementById("medidaTriangulo");
        const VALORTRIANGULO10="$ 12.990.- ";
        const VALORTRIANGULO15="$ 16.990.- ";

        if(triangulo.selectedIndex == "0"){
            document.getElementById("precioT").innerHTML ="$______ ";
            }
        if(triangulo.selectedIndex == "1"){
            document.getElementById("precioT").innerHTML =VALORTRIANGULO10;
            }
        if(triangulo.selectedIndex == "2"){
            document.getElementById("precioT").innerHTML =VALORTRIANGULO15;
            }
    }
    
     // PRECIOS PORTA LLAVE
     function valorPortaLlave() {
        var porta = document.getElementById("medidaPortaLlave");
        const VALORPORTA20="$ 12.000.- ";
        const VALORPORTA25="$ 15.000.- ";

        if(porta.selectedIndex == "0"){
            document.getElementById("precioPL").innerHTML ="$______ ";
            }
        if(porta.selectedIndex == "1"){
            document.getElementById("precioPL").innerHTML =VALORPORTA20;
            }
        if(porta.selectedIndex == "2"){
            document.getElementById("precioPL").innerHTML =VALORPORTA25;
            }
     }

    // PRECIOS PORTA LLAVE CON SUCULENTA
    function valorPortaMacetero() {
        var portas = document.getElementById("medidaPortaMacetero");
        const VALORPORTAM13="$ 13.990.- ";
        const VALORPORTAM18="$ 17.990.- ";

        if(portas.selectedIndex == "0"){
            document.getElementById("precioPM").innerHTML ="$______ ";
            }
        if(portas.selectedIndex == "1"){
            document.getElementById("precioPM").innerHTML =VALORPORTAM13;
            }
        if(portas.selectedIndex == "2"){
            document.getElementById("precioPM").innerHTML =VALORPORTAM18;
            }
    }


    // PRECIOS REPISA
    function valorRepisa() {
        var repisa = document.getElementById("medidaRepisa");
        const VALORREPISA51="$ 30.000.- ";
        const VALORREPISA61="$ 33.000.- ";

        if(repisa.selectedIndex == "0"){
            document.getElementById("precioR").innerHTML ="$______ ";
            }
        if(repisa.selectedIndex == "1"){
            document.getElementById("precioR").innerHTML =VALORREPISA51;
            }
        if(repisa.selectedIndex == "2"){
            document.getElementById("precioR").innerHTML =VALORREPISA61;
            }
    }

 // PRECIOS MEDIA LUNA
 function valorMediaLuna() {
    var luna = document.getElementById("medidaMediaLuna");
    const VALORMEDIALUNA51="$ 19.000.- ";
    const VALORMEDIALUNA61="$ 21.000.- ";

    if(luna.selectedIndex == "0"){
        document.getElementById("precioML").innerHTML ="$______ ";
        }
    if(luna.selectedIndex == "1"){
        document.getElementById("precioML").innerHTML =VALORMEDIALUNA51;
        }
    if(luna.selectedIndex == "2"){
        document.getElementById("precioML").innerHTML =VALORMEDIALUNA61;
        }
}

// PRECIOS REPISA
function valorRepisaH() {
    var repisa = document.getElementById("medidaRepisaH");
    const VALORREPISAH51="$ 32.000.- ";
    const VALORREPISAH61="$ 38.000.- ";

    if(repisa.selectedIndex == "0"){
        document.getElementById("precioRH").innerHTML ="$______ ";
        }
    if(repisa.selectedIndex == "1"){
        document.getElementById("precioRH").innerHTML =VALORREPISAH51;
        }
    if(repisa.selectedIndex == "2"){
        document.getElementById("precioRH").innerHTML =VALORREPISAH61;
        }
}

// PRECIOS JARDINERA MURO
function valorJardineraMuro() {
    var jardinera = document.getElementById("medidaJardineraMuro");
    const VALORJARDINERAM100="$ 25.000.- ";
    const VALORJARDINERAM120="$ 29.000.- ";
    const VALORJARDINERAM150="$ 32.000.- ";

    if(jardinera.selectedIndex == "0"){
        document.getElementById("precioJM").innerHTML ="$______ ";
        }
    if(jardinera.selectedIndex == "1"){
        document.getElementById("precioJM").innerHTML =VALORJARDINERAM100;
        }
    if(jardinera.selectedIndex == "2"){
        document.getElementById("precioJM").innerHTML =VALORJARDINERAM120;
        }
    if(jardinera.selectedIndex == "3"){
        document.getElementById("precioJM").innerHTML =VALORJARDINERAM150;
        }
}

// PRECIOS JARDINERA PISO
function valorJardineraPiso() {
    var obj = document.getElementById("medidaJardineraPiso");
    const VALORJARDINERAP60="$ 29.990.- ";
    const VALORJARDINERAP50="$ 26.990.- ";
    const VALORJARDINERAP40="$ 21.990.- ";

    if(obj.selectedIndex == "0"){
        document.getElementById("precioJP").innerHTML ="$______ ";
        }
    if(obj.selectedIndex == "1"){
        document.getElementById("precioJP").innerHTML =VALORJARDINERAP60;
        }
    if(obj.selectedIndex == "2"){
        document.getElementById("precioJP").innerHTML =VALORJARDINERAP50;
        }
    if(obj.selectedIndex == "3"){
        document.getElementById("precioJP").innerHTML =VALORJARDINERAP40;
        }
//document.getElementById("demo").innerHTML = obj.options[obj.selectedIndex].text;
}