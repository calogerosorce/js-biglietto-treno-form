/*
Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.

Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Tools :

*/
const formEl = document.getElementById('form')
const nameField = document.getElementById('name-field')
const kmField = document.getElementById('km-field')
const ageField = document.getElementById('age-field')
//const button = document.getElementById('btn')
const nameEl = document.getElementById('name')
const costoEl = document.getElementById('costo')
const offertaEl = document.getElementById('offerta')
const carrozzaEl = document.getElementById('carrozza')
const codiceEl = document.getElementById('codice')
//Creo Function Math.Floor(Math.random) per le carrozze
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let carrozzaRandom = getRandomNumber(1, 10)
let codiceRandom = getRandomNumber(10000, 99999)

formEl.addEventListener('submit', (event) => {
    event.preventDefault()
    // Creo const km value and age value
    const km = kmField.value
    const age = ageField.value
    nameEl.textContent = nameField.value
    carrozzaEl.textContent = carrozzaRandom
    codiceEl.textContent = codiceRandom
    // Creo calcolo  della percentuale in base all'età
    if (age === 'minorenne') {
        const percentuale = ((km * 0.21) - ((km * 0.21) * 20 / 100))
        let percentuale_decimale = percentuale.toFixed(2)
        console.log(percentuale_decimale);
        costoEl.textContent = percentuale_decimale + "€"
        offertaEl.textContent = 'Biglietto Sconatto del 20%'
    } else if (age === 'anziano') {
        const percentuale = ((km * 0.21) - ((km * 0.21) * 40 / 100))
        let percentuale_decimale = percentuale.toFixed(2)
        console.log(percentuale_decimale);
        costoEl.textContent = percentuale_decimale + "€"
        offertaEl.textContent = 'Biglietto Sconatto del 40%'
    } else {
        const full_price = (km * 0.21)
        let full_price_decimale = full_price.toFixed(2)
        console.log(full_price_decimale);
        costoEl.textContent = full_price_decimale + "€"
        offertaEl.textContent = 'Biglietto Standard'
    }
})
