let scelta;

do{
    scelta = Number(prompt(`Scegli una bevanda: \n 1-Acqua \n  2-Coca Cola \n  3-Birra`));

switch (scelta) {
    case 1:
        console.log(`Ecco quì la tua Acqua`)
        break;
    case 2:
        console.log(`Ecco quì la tua Coca Cola`)
        break;
    case 3:
        console.log(`Ecco quì la tua Birra`)
        break;
    default:
        console.log(`la scelta inserita non è valida, riprova`);
        break;
}

}while(scelta < 1 || scelta > 3)




