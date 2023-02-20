//PRIMO STEP
    console.log (prompt)
    // INSERISCI NOME 
const nomeUtente = prompt('Inserisci il tuo Nome');
    
    //INSERISCI COGNOME
const cognomeUtente = prompt('Inserisci il tuo Cognome');
    
    //INSERISCI COLORE PREFERITO
const coloreUtente = prompt('Inserisci il tuo Colore preferito');

//SECONDO STEP

    //CREA LA TUA NUOVA PASSWORD
const passwordUtente = (nomeUtente + cognomeUtente + coloreUtente + 89);

console.log(passwordUtente);

