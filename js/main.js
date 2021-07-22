// Creiamo un finto biglietto del treno con:

//1.  Nome passeggero
//2.  Numero carrozza
//3.  Prezzo calcolato
//4.  Codice treno (numero casuale tra 90000 e 100000 escluso)
//5.  Categoria selezionata dall'utente
//6.  Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.


// assegno una variabile al bottone GENERA;
var btnGenera = document.getElementById("calcolaPrezzo");
console.log(btnGenera);

// event al click del bottone; 
btnGenera.addEventListener("click",
    function() {
// prendo le variabili e le salvo; 
        var nome = document.getElementById("nome").value;
        var km = document.getElementById("km").value;
        var fasciaEta = document.getElementById("fascia-eta").value;

        var biglietto = document.getElementById("biglietto");
        biglietto.style.display = "block";

        var titoloBiglietto = document.getElementById("titoloBiglietto");
        titoloBiglietto.style.display = "block";


        //1.  Nome passeggero
        document.getElementById("nome-passeggero").innerHTML = (nome);


        //2.  Numero carrozza
        var carrozza = document.getElementById("carrozza").innerHTML =
        ((Math.floor(Math.random() * 10) + 1));

    
        //3.  Categoria selezionata dall'utente / Biglietto standard
        if(fasciaEta == "minorenne"){
            document.getElementById("offerta").innerHTML = ("Sconto minorenne");
        } else if (fasciaEta == "maggiorenne") {
            document.getElementById("offerta").innerHTML = ("Biglietto standard");
        } else if (fasciaEta == "over65") {
            document.getElementById("offerta").innerHTML = ("Sconto Over 65");
        }

        //4. Codice treno (numero casuale tra 90000 e 100000 escluso)

        function getRandomBetween(min, max) {
            return Math.random() * (max - min) + min;
        }
        console.log(getRandomBetween(90000,100000));

        document.getElementById("codiceCP").innerHTML = (getRandomBetween(90000, 100000).toFixed(0));

        //5.  Prezzo calcolato

        // Prezzo calcolato per minorenni, maggiorenni, over65;

        // defining ticket variables 
        var scontoUnderDiciotto = 0.8;
        var scontoOverSessantacinque = 0.6;
        var prezzo_biglietto = 0.21;

        // conditions 
        if ("minorenne") {
            prezzo_biglietto = (("km") * prezzo_biglietto) * scontoUnderDiciotto;
        }
        else if ("maggiorenne") {
            prezzo_biglietto = (("km") * prezzo_biglietto) * scontoOverSessantacinque;
        }
        else if ("over65") {
            prezzo_biglietto = (("km") * prezzo_biglietto) * scontoOverSessantacinque;
        }
        else {
            prezzo_biglietto = (("km") * prezzo_biglietto);
        }

        document.getElementById("fascia-eta").innerHTML = "Total cost " + prezzo_biglietto.toFixed(2) + " €";

        //  Console 
        console.log(km);
        console.log("il costo del biglietto è " + prezzo_biglietto)



    }
)


//6.  Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

// assegno una variabile al bottone ANNULLA;

var btnAnnulla = document.getElementById("annulla");

btnAnnulla.addEventListener("click",
    function() {

        // salvo le variabili 
        document.getElementById("nome").value = ("");
        document.getElementById("km").value = ("");
        document.getElementById("fascia-eta").value = ("");

        var biglietto = document.getElementById("biglietto");
        biglietto.style.display = "none";

        var titoloBiglietto = document.getElementById("titoloBiglietto");
        titoloBiglietto.style.display = "none";

    }
)