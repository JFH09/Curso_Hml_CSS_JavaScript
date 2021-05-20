//Variables

let nav = document.getElementById("nav");
let menu = document.getElementById("enlaces");
let abrirMenu = document.getElementById("abrirMenu");
let botones = document.getElementsByClassName("btn-header");
let cerrado = true;

function apertura() {
  if (cerrado) {
    menu.style.width = "70vw";
    cerrado = false;
    menu.style.transition = "1s";
  } else {
    menu.style.width = "0%";
    menu.style.overflow = "hidden";
    cerrado = true;
    menu.style.transition = "1s";
  }
}

function barramenu() {
  let cambioMenu = window.pageYOffset;

  if (cambioMenu <= 300) {
    //El menu es nav1 el que esta por defecto
    nav.classList.remove("nav2");
    nav.className = "nav1";
    nav.style.transition = "1s";
    //abrirMenu.style.color="#fff"; asi se puede cambiar el color de icono del menu .... cualquier color....
  } else {
    nav.classList.remove("nav1");
    nav.className = "nav2";
    nav.style.transition = "1s";
  }
}

window.addEventListener("load", function () {
  $("#onload").fadeOut();
  $("span").removeProperty("hidden");
  barramenu();
});
window.addEventListener("scroll", function () {
  console.log(window.pageYOffset);
  barramenu();
});

window.addEventListener("resize", function () {
  if (screen.width >= 700) {
    cerrado = true;
    menu.style.removeProperty("width");
    menu.style.removeProperty("overflow");
  }
});

window.addEventListener("click", function (e) {
  console.log(e.target); //target lo que hace es decir en que parte de la pantalla estoy pulsando

  if (cerrado == false) {
    let span = document.querySelector("span"); // Aqui lo que esta hacuendo es coger el primer span que es el icono del menu
    if (e.target !== span && e.target !== abrirMenu) {
      // lo que esta diciendo es que si toca en cualquier lado cuando este abierto el menu se va a cerrar
      menu.style.overflow = " hidden";
      menu.style.width = "0";
      cerrado = true;
    }
  }
});

abrirMenu.addEventListener("click", function () {
  apertura();
});
