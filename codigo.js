let jugador = 0;
let pc = 0;
let ganadas = 0;
let perdidas = 0;

while (ganadas < 3 && perdidas < 3) {
    let jugador = parseInt(prompt("Elige: 1 = piedra, 2 = papel, 3 = tijera"));
    let pc = Math.floor(Math.random() * 3) + 1;
    
    function obtenerResultado(jugada) {
        let resultado = "";
        if (jugada === pc) {
            resultado = "¡Empate!";
        } else if ((jugada === 1 && pc === 3) || (jugada === 2 && pc === 1) || (jugada === 3 && pc === 2)) {
            resultado = "¡Ganaste!";
            ganadas = ganadas + 1;
        } else {
            resultado = "¡Perdiste!";
            perdidas = perdidas + 1;
        }
        return resultado;
    }

    let opciones = ["piedra", "papel", "tijera"];
    alert("Elegiste " + opciones[jugador - 1]); 
    alert("La máquina eligió " + opciones[pc - 1]);
    alert(obtenerResultado(jugador));
    alert("Ganaste " + ganadas + " veces. Perdiste " + perdidas);
}