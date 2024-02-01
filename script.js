/* Enlaces del Índice */
let enlaces = document.getElementById("contenedor1").getElementsByTagName("div");

window.addEventListener("load", function() {
    let activo = null;

    for (let i = 0; i < enlaces.length; i++) {
        const enlace = enlaces[i];
        enlace.addEventListener("click", function(even) {
            let evt = even;

            if (activo) {
                activo.style.opacity = "75%";
            }

            activo = enlace;
            enlace.style.opacity = "100%";
        });
    }
});

let seccionesContenedor2 = document.getElementById("contenedor2").getElementsByTagName("div");

for (let i = 0; i < seccionesContenedor2.length; i++) {
    const seccion = seccionesContenedor2[i];
    seccion.addEventListener("mouseleave", function() {
        for (let i = 0; i < enlaces.length; i++) {
            const enlace = enlaces[i];
            enlace.style.opacity = "75%";
        }
    });
}

/* Apartado de Competencias Digitales */
let divCompetencias = document.getElementById("competencias");
let divListaCompetencias = document.getElementById("lista-competencias");
let listaCompetencias = divListaCompetencias.getElementsByTagName("ul");
let eventoActivo = false;
let archivos = ["ofimatica.gif", "diseno-web.gif", "lenguajes-programacion.gif", "redes.gif", "rrss.gif", "produccion-audiovisual.gif"];
let competenciasLista = ["Aplicaciones Ofimáticas.", "Diseño Web (HTML, CSS y WordPress).", "Programación en Java, JavaScript y PHP.", "Redes Locales.", "Redes Sociales.", "Producción Audiovisual."];

function crearGifs() {
    if (eventoActivo) {
        contador = 1;

        /* Creacion de los elementos de la lista */
        let elementoLista = document.createElement("li");
        elementoLista.appendChild(document.createTextNode(competenciasLista[0]));
        listaCompetencias[0].appendChild(elementoLista);

        setTimeout(() => {
            elementoLista.style.animation = "none";
        }, 1500);

        /* Creación del gif */
        let gif = document.createElement("img");
        gif.setAttribute("src", "img/competencias/" + archivos[0]);
        gif.setAttribute("alt", " ");
        gif.setAttribute("class", "competencias");
        divListaCompetencias.appendChild(gif);

        setTimeout(() => {
            gif.remove();
        }, 2900);

        let intervalo = setInterval(() => {
            if (contador < 6) {
                let elementoLista = document.createElement("li");
                elementoLista.appendChild(document.createTextNode(competenciasLista[contador]));
                listaCompetencias[0].appendChild(elementoLista);

                let gif = document.createElement("img");
                gif.setAttribute("src", "img/competencias/" + archivos[contador]);
                gif.setAttribute("alt", " ");
                gif.setAttribute("class", "competencias");
                divListaCompetencias.appendChild(gif);

                setTimeout(() => {
                    elementoLista.style.animation = "none";
                }, 1500);

                setTimeout(() => {
                    gif.remove();
                }, 3000);

                contador += 1;
            }
        }, 3000);

        setTimeout(() => {
            clearInterval(intervalo);
            document.getElementById('contenedor2').removeEventListener('scroll', handleScroll);

            let gifFinal = document.createElement("img");
            gifFinal.setAttribute("src", "img/competencias/redes.gif");
            gifFinal.setAttribute("alt", "Gif Decorativo");
            gifFinal.setAttribute("class", "competencias");
            divListaCompetencias.appendChild(gifFinal);

            setTimeout(() => {
                gifFinal.style.opacity = "100%";
                gifFinal.style.animation = "none";
            }, 1500);
        }, 18000);
        eventoActivo = false;
    }
}

function isElementInViewport(elemento) {
    const rect = elemento.getBoundingClientRect();
    return (
      /* rect.top >= 0 && */
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth));
}

// Función para manejar el evento de scroll
function handleScroll() {
    if (isElementInViewport(divCompetencias)) {
        crearGifs();
    }
}

if (!eventoActivo) {
    eventoActivo = true;
    document.getElementById('contenedor2').addEventListener('scroll', handleScroll);

    // Llamar a la función handleScroll al cargar la página para verificar el estado inicial
    handleScroll();
}

/* Menú de Móvil */
let botonMenu = document.getElementById("menu-movil");
let contenedor2 = document.getElementById("contenedor2");
let divIndice = document.getElementById("contenedor1").querySelectorAll("div");

botonMenu.addEventListener("click", function() {
    botonMenu.innerHTML = '<img src="img/menu-movil2.png" alt=" ">';
    let divFondo = document.createElement("div");
    divFondo.setAttribute("id", "contenedor3");
    divFondo.setAttribute("style", "position: absolute; display: flex; justify-content: center; background-color: rgba(0, 0, 255, 0.168); z-index: 100; width: 100%; height: 100%;");
    
    let divMenu = document.createElement("div");
    divMenu.setAttribute("id", "contenedor-menu");

    let botonSalir = document.createElement("button");
    botonSalir.setAttribute("onclick", "ocultarMenu()");
    botonSalir.innerHTML = '<img src="img/close.png" alt="Cerrar Menú">';
    divMenu.appendChild(botonSalir);

    for (let j = 0; j < divIndice.length; j++) {
        const div = divIndice[j].cloneNode(true);
        div.addEventListener("click", ocultarMenu);
        divMenu.appendChild(div);
    }
    
    divFondo.appendChild(divMenu);
    document.body.appendChild(divFondo);
});

function ocultarMenu() {
    document.getElementById("contenedor3").remove();
    botonMenu.innerHTML = '<img src="img/menu-movil.png" alt=" ">';
}

/* Cambiar el correo al ser una pantalla menor de 720px */
if (document.documentElement.clientWidth < 720) {
    document.getElementById("lista-sin-estilo").getElementsByTagName("a")[0].innerHTML = "alejandrotorresde...";
} else {
    document.getElementById("lista-sin-estilo").getElementsByTagName("a")[0].innerHTML = "alej&#97;ndrotorre&#115;de&#112;edr&#111;&#64;&#103;ma&#105;l&#46;&#99;&#111;m";
}

window.addEventListener("orientationchange", function() {
    ocultarMenu;
    if (document.documentElement.clientWidth < 720) {
        document.getElementById("lista-sin-estilo").getElementsByTagName("a")[0].innerHTML = "alejandrotorresde...";
    } else {
        document.getElementById("lista-sin-estilo").getElementsByTagName("a")[0].innerHTML = "alej&#97;ndrotorre&#115;de&#112;edr&#111;&#64;&#103;ma&#105;l&#46;&#99;&#111;m";
    }
});