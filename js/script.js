let age = parseInt(prompt('Inserisci la tua eta\' '));
let km = parseInt(prompt('Inserisci quanti km vuoi percorrere'));
let priceKm = 0.21;
let ticketPrice

if(age < 18){
    console.log('Verra\' applicato lo sconto per minorenni');
    ticketPrice = (km * priceKm) * 0.8;
    console.log('Il prezzo del biglietto e\' ' + ticketPrice.toFixed(2) + "€")
}
else if(age <= 65){
    console.log('Non verra\' applicato alcuno sconto');
    ticketPrice = (km * priceKm);
    console.log('Il prezzo del biglietto e\' ' + ticketPrice.toFixed(2) + "€");
}
else{
    console.log('Verra\' applicato lo sconto per over 65');
    ticketPrice = (km * priceKm) * 0.6;
    console.log('Il prezzo del biglietto e\' ' + ticketPrice.toFixed(2) + "€")
}