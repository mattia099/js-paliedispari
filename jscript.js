
const userInput = prompt('Inserisci parola');

function palindroma(parola){
    
    const scomp = parola.split("")

    let parolaReverse = scomp.reverse();
    console.log(parolaReverse);

    parolaReverse = parolaReverse.join('');
    console.log(parolaReverse)
    if(parola == parolaReverse){
        return true;
    }
    else{
        return false;
    }
    
}

palindroma(userInput);

console.log(palindroma(userInput));


