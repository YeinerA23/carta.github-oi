function mostrarCarta() {
    let params = new URLSearchParams(window.location.search);
    let titulo = params.get("titulo");
    let mensaje = params.get("mensaje");

    document.getElementById("tituloCarta").innerText = titulo;

    // Mostrar la barra de carga y ocultar el mensaje al inicio
    document.getElementById("mensajeCarta").style.display = "none";
    document.getElementById("progressContainer").style.display = "block";

    let progressBar = document.getElementById("progressBar");
    let width = 0;
    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            document.getElementById("progressContainer").style.display = "none";
            document.getElementById("mensajeCarta").innerText = mensaje;
            document.getElementById("mensajeCarta").style.display = "block";
        } else {
            width += 2;
            progressBar.style.width = width + "%";
        }
    }, 110);
}

function quitarMute() {
    let audio = document.getElementById("audio");
    audio.muted = false;
    audio.play();
}

function actualizarEstadoCarga() {
    let estado = document.getElementById("estadoCarga");
    estado.innerText = "Cargando..."; // Muestra el mensaje inicial

    setTimeout(() => {
        estado.innerText = "Enviado!"; // Cambia el texto después de 5 segundos
    }, 5000);
}

// Aseguramos que se ejecuten ambas funciones al cargar la página
window.onload = function() {
    mostrarCarta(); 
    actualizarEstadoCarga(); // Llamamos a la nueva función
};

setTimeout(() => {
    let estadoMensaje = document.getElementById("estadoMensaje");
    estadoMensaje.innerText = "Enviado!";
    estadoMensaje.classList.add("animacion-bajada"); // Agrega la animación
}, 5000);


function lanzarCorazones() {
    const contenedor = document.getElementById("corazones");

    if (!contenedor) {
        console.error("El contenedor de corazones no se encontró.");
        return;
    }

    setInterval(() => {
        let corazon = document.createElement("div");
        corazon.classList.add("corazon");
        corazon.innerHTML = "❤️"; // Emoji de corazón
        corazon.style.left = Math.random() * 100 + "vw"; // Posición aleatoria en X
        corazon.style.animationDuration = (Math.random() * 2 + 3) + "s"; // Variación en duración

        contenedor.appendChild(corazon);

        // Eliminar el corazón después de subir
        setTimeout(() => {
            corazon.remove();
        }, 5000);
    }, 500); // Aparece un corazón cada 0.5 segundos
}

// Esperar 5 segundos antes de mostrar los corazones
setTimeout(() => {
    lanzarCorazones();
}, 5000);
