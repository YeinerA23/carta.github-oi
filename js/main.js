function generarCarta() {
    let titulo = document.getElementById("titulo").value;
    let mensaje = document.getElementById("mensaje").value;
    let url = `carta.html?titulo=${encodeURIComponent(titulo)}&mensaje=${encodeURIComponent(mensaje)}`;
    window.location.href = url;
}