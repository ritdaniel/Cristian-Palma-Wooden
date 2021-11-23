function mostrarEstudiantes(mostrar) {
    $('#datos').empty();
    const URLGET = "http://hp-api.herokuapp.com/api/characters/students";
    $.get(URLGET).done(function(respuesta, estado) {

        if (estado === "success") {
            let listadoEstudiantes = respuesta;
            listadoEstudiantes.forEach(estudiantes => {
                if (mostrar === estudiantes.house) {
                    $("#datos").append(`<div class="productos">
                <h1 class="cajaProductos__title--orange">${estudiantes.name}</h1>
                <img src="${estudiantes.image}"alt = "${estudiantes.name}">
                <h3 class ="cajaProductos__text--grey" > ${estudiantes.actor}</h3>
                <p class ="descripcion" >${estudiantes.house}</p>
                </div>`);
                }
                if (mostrar === "todos") {
                    $("#datos").append(`<div class="productos">
                <h1 class="cajaProductos__title--orange">${estudiantes.name}</h1>
                <img src="${estudiantes.image}"alt = "${estudiantes.name}">
                <h3 class ="cajaProductos__text--grey" > ${estudiantes.actor}</h3>
                <p class ="descripcion" >${estudiantes.house}</p>
                </div>`);
                }
            });
        }

    });
}

//mostrarEstudiantes()