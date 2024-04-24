function calcular() {
    var semilla = document.getElementById("semilla").value;
    var secuencia = [semilla];
    var maximo = semilla;

    while (semilla != 1) {
        if (semilla % 2 == 0) {
            semilla = semilla / 2;
        } else {
            semilla = semilla * 3 + 1;
        }
        secuencia.push(semilla);
        if (semilla > maximo) {
            maximo = semilla;
        }
    }

    document.getElementById("longitud").innerHTML = secuencia.length;
    document.getElementById("maximo").innerHTML = maximo;
}
