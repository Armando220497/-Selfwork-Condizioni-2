let temp = prompt("Inserisci temperatura");

switch (true) {
    case temp >= 30:
        console.log("lu mare, lu sole, lu ientu");
        break;

    case temp < 20:
        console.log("non ci sono piu' le mezze stagioni");
        break;

    case temp >= 20 && temp < 30:
        console.log("mi dia una peroni sudata");
        break;

    case temp < 0:
        console.log("non e' tanto il freddo quanto l'umidità");
        break;

    case temp < -10:
        console.log("copriti…ancora ti raffreddi");
        break;

    default:
        console.log("Temperatura non valida");
        break;
}
