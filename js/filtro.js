$(function () {
  $(".filtro").click(function () {
    //Da click en filtro.. haga
    $(this).addClass("active").siblings().removeClass("active"); //cuando click en esto agregue la clase active, la clase active es la que hace parecer que esta presionada
    let valor = $(this).attr("data-nombre"); //a valor le esta dando el atributo data-nombre el cual distingue que es de diseño, programacion etc...

    if (valor == "todos") {
      //Si valor es igual a todos, es decir que si se pulsa en todos es decir en data-nombre todos
      $(".cont-nuestroTrabajo").show("1000"); // Muestre en el contenedor de Nuestro Trabajo lo que esta en data-nombre(valor)
    } else {
      //El mil es para la rapidez que muestre el cambio, sino es igual a todos haga...
      $(".cont-nuestroTrabajo")
        .not("." + valor) //No entiendo bien pero creo que le remueve el valor que tiene en la var valor
        .hide("1000"); // a una rapidez de mil segundos o milisegundos algo asi... y no lo muestra por que no hay necesidad
      $(".cont-nuestroTrabajo") // y le dice que filter que creo que es lo que cambia asi rapido
        .filter("." + valor) // sea igual a lo que pulso y
        .show("1000"); // Muestrelo a 1000 s o mlss
    }
  });

  let equipo = $("#equipo").offset().top,
    servicio = $("#servicios").offset().top,
    trabajo = $("#trabajo").offset().top, //CREO QUE NO ESTA SIRVIENDO POR QUE jvscript no esta
    contacto = $("#contacto").offset().top; // reconociendo "top"

  //El offset().top muestra la posicion exacta del top de la seccion al cual se le coloca....
  //PARA OBSERVAR COMO FUNCIONA COLOCAR $("#servicio").offset().top en la consola

  window.addEventListener("resize", function () {
    //Este es para el resposive por lo que cambia el tamñ de la pag
    let equipo = $("#equipo").offset().top,
      servicio = $("#servicios").offset().top,
      trabajo = $("#trabajo").offset().top,
      contacto = $("#contacto").offset().top;
  });

  $("#enlace-inicio").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrolltop: 0,
      },
      600
    );
  });

  $("#enlace-equipo").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrolltop: 520,
    });
  });

  $("#enlace-servicios").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrolltop: servicio,
    });
  });
});
