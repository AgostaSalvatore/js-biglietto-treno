// Chiedo all'utente l'eta'
let age = parseInt(prompt('Inserisci la tua eta\' '));

//chiedere all'utente la distanza che vuole percorrere
let km = parseInt(prompt('Inserisci quanti km vuoi percorrere'));

// indicare il prezzo al chilometro
let priceKm = km * 0.21;

console.log(`i dati sono: ${age} anni e ${km} km`)

if(age < 18){ //sconto per i minorenni
    console.log('Verra\' applicato lo sconto per minorenni');
    priceKm= priceKm * 0.8;
    //proceKm *= 0.8 forma contratta
    console.log(`Il prezzo del biglietto e' ${priceKm.toFixed(2)} €`)
}
else if(age <= 65){ //nessuno sconto per eta' compresa tra 18 64
    console.log('Non verra\' applicato alcuno sconto');
    console.log(`Il prezzo del biglietto e' ${priceKm.toFixed(2)} €`);
}
else{ //sconto per gli over 65
    console.log('Verra\' applicato lo sconto per over 65');
    priceKm = priceKm * 0.6;
    //priceKm *= 0.6
    console.log(`Il prezzo del biglietto e' ${priceKm.toFixed(2)} €`)
}