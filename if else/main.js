let temp = prompt("Inserisci temperatura");

if (temp < -10) {
    console.log("copriti…ancora ti raffreddi");
} else if (temp < 0) {
    console.log("non è tanto il freddo quanto l'umidità");
} else if (temp < 20) {
    console.log("non ci sono più le mezze stagioni");
} else if (temp < 30) {
    console.log("mi dia una peroni sudata");
} else if (temp >= 30) {
    console.log("lu mare, lu sole, lu ientu");
} else {
    console.log("temperatura non valida");
}
