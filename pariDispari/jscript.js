

function somma(a , b)
{
    var c=a+b;
    if(c % 2 == 0){
        return true;
    }else{
        return false;
    }
}

function random(min , max){
    const num = Math.floor(Math.random() * max + min);
    return num;
}


let scelta = prompt('pari o dispari?');
const userNum = parseInt(prompt('Inserisci numero'));
const randomNum = random(1 , 5);
const sum = somma(userNum , randomNum);

console.log(`tu hai scelto ${scelta}`);
console.log(`il tuo numero è ${userNum}`);
console.log(`il numero generato randomicamente è ${randomNum}`);
console.log(`la somma dei due numeri è ${userNum + randomNum}` )


if(scelta == 'pari'){
    scelta=true;
    console.log('')
}else if(scelta == 'dispari'){
    scelta=false;
}

if(scelta==sum){
    alert('hai vinto');
}else{
    alert('hai perso');
}


console.log(scelta);
console.log(sum);
