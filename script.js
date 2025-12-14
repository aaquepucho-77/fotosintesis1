function procesarFotosintesis() {
// INPUT
let luz = Number(document.getElementById("luz").value);
let agua = Number(document.getElementById("agua").value);
let co2 = Number(document.getElementById("co2").value);


// PROCESAMIENTO
document.getElementById("proceso").innerText =
"La planta usa la luz solar para combinar agua y CO₂...";


// Lógica simple del algoritmo
if (luz > 0 && agua > 0 && co2 > 0) {
document.getElementById("resultado").innerText =
"Se produce glucosa y oxígeno 🌿";
} else {
document.getElementById("resultado").innerText =
"No hay fotosíntesis suficiente ❌";
}
}