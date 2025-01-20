// // Chilometri
// let chilometri = prompt("Inserisci la distanza da percorrere");
// console.log(`Chilometri da percorrere: ${chilometri}`);


// // Età
// let eta = prompt("Inserisci la tua età");
// console.log(`Età del passeggero: ${eta}`)

// let prezzo = chilometri * 0.21;
// let sconto = 0;
// // Biglietto

// if (eta >= 65){
//     sconto = prezzo * 0.4;
// } else if (eta < 18){
//     sconto = prezzo * 0.2;
// }

// prezzo = prezzo - sconto;
// console.log(`Il prezzo del biglietto è di € ${prezzo.toFixed(2)}`)



// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del
// biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente
//  due input e un bottone (non stilizzati),
// realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà
//  anch’essa da scrivere in console.


// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora
//  realizzeremo un form in pagina in cui
// l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati
//  in pagina
// (il prezzo dovrà essere formattato con massimo due decimali, per indicare
//  i centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.


// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci
//  allo stile, raffinando la parte di HTML e CSS in modo da renderla
//  esteticamente gradevole.



const nameField = document.getElementById("nameField");
    // console.log(nameField)
const kmField = document.getElementById("kmField");
const fasciaEtaField = document.getElementById("fasciaEtaField");
const button = document.getElementById("button")




const name = document.getElementById("name")
    console.log(name)
const price = document.getElementById("price")


button.addEventListener("click", function(event){
    event.preventDefault()
    name.innerHTML = nameField.value

    price.innerHTML = kmField.value * 0.21
    console.log(price.innerHTML)

    if (fasciaEtaField.value == "Minorenne"){
        price.innerHTML = (price.innerHTML * 0.8).toFixed(2)
    } else if (fasciaEtaField.value == "Over65") {
        price.innerHTML = (price.innerHTML * 0.6).toFixed(2)
    } else {
        (price.innerHTML).toFixed(2)
    }

    



}
)



















// Codice giusto esercizio vecchio

// Età
// let eta = ("Inserisci la tua età");
// console.log(`Età del passeggero: ${eta}`)

// let prezzo = chilometri * 0.21;
// let sconto = 0;
// // Biglietto

// if (eta >= 65){
//     sconto = prezzo * 0.4;
// } else if (eta < 18){
//     sconto = prezzo * 0.2;
// }

// prezzo = prezzo - sconto;
// console.log(`Il prezzo del biglietto è di € ${prezzo.toFixed(2)}`)





// Codice in lavorazione

// let kmDaPercorrere = parseInt(document.getElementById("kmDaPercorrere"));
// console.log(`Chilometri da percorrere: ${kmDaPercorrere}`);

// let etaDaInserire = parseInt(document.getElementById("etaDaInserire"));
// console.log(`Chilometri da percorrere: ${etaDaInserire}`);

// function submitButton(){
//     let km = document.getElementById("kmDaCompilare").value;
//     document.getElementById("kmDaPercorrere").innerHTML = km;
//     console.log(km)

//     let eta = document.getElementById("etaDaInserire").value;
//     let res = (eta < 18) ? "Minorenne":
//                 (eta < 65) ? "Maggiorenne":
//                 (eta > 65) ? "Over 65" : "";
//         console.log(res)
//     document.getElementById("etaInserita").innerHTML = res;



//     let prezzo = kmDaPercorrere * 0.21;
//     console.log(`ddd${prezzo}`)




//     let sconto = 0;
//     // Biglietto

//     if (eta >= 65){
//         sconto = prezzo * 0.4;
//     } else if (eta < 18){
//         sconto = prezzo * 0.2;
//     }

//     prezzo = prezzo - sconto;
//     console.log(`Il prezzo del biglietto è di € ${prezzo.toFixed(2)}`)
// }