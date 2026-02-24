
const miBoton = document.querySelector("#boton-magico");
const miTexto = document.querySelector("#texto-a-cambiar");


miBoton.addEventListener("click", function() {
    console.log("¡Has pulsado el botón!");
    document.body.style.backgroundColor = "lightblue";
    console.log("¡Botón pulsado! Cambiando el texto...");
    miTexto.innerText = "¡Día fantástico para NOEL! (Ref: NSS)";
    miTexto.style.color = "red";
});
miBoton.addEventListener("mouseenter", function() {
    
    miBoton.innerText = "¡Púlsame,Sañudo!";
});