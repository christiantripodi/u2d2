/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const primoNumero = 5
const secondoNumero = 10


if(primoNumero > secondoNumero){
    console.log("Il Primo Numero è più rande del secondo")
}else {
    console.log("il secondo numero è più grande del primo")
}



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const terzoNumero = 4

if (terzoNumero !== 5){
    console.log("not equal")
}



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const quartoNumero = 25

if(quartoNumero % 5 == 0){
    console.log("Il numero è divisibile per 5")
}else {
    console.log("il numero non è divisibile per 5")
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const quintoNumero = 7
const sestoNumero = 7

if(quintoNumero == 8|| sestoNumero == 8|| quintoNumero - sestoNumero == 8|| sestoNumero - quintoNumero == 8){
    console.log("Il numero o risultato è 8")
}else{
    console.log("Il numero o risultato non è 8")
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



// const totalShoppingCart = 60
// const spedizione = 10

// if(totalShoppingCart > 50){
//     console.log(totalShoppingCart)
// }else{
    
//     console.log(totalShoppingCart + spedizione)
// }




/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



const totalShoppingCart = 60
const spedizione = 10
const sconto = totalShoppingCart * 0.2
const totaleDaPagare = totalShoppingCart - sconto

if(totalShoppingCart > 50){
 
    console.log("Il totale da pagare è ", totaleDaPagare)
}else{
    
    console.log("Il totale da pagare è ", totaleDaPagare + spedizione)
}






/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const a = 11;
const b = 33;
const c = 22;


if(a > b && a > c && b > c){
  console.log(a, b ,c);
}else if(a > b && a > c && c > b){
  console.log(a, c, b);
}else if(b > a && b > c && a > c){
  console.log(b, a, c);
}else if(b > a && b > c && c >a){
  console.log(b, c, a);
}else if(c > a && c > b && a > b){
  console.log(c, a, b);
}else if(c > a && c > b && b > a){
  console.log(c, b, a);
}





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let num = '6';

if(num == typeof(Number)){
  console.log('è un numero');
}else{
  console.log('non è un numero');
}




/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let n = 7;

if(n % 2 == 0){
  console.log('pari');
}else{
  console.log('dispari');
}




/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/


  let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  
me.city = "Toronto" 
console.log(me)

  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
  
delete me.lastName;
console.log(me)


  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */


me.skills.pop();
console.log(me)



  
  /* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */

  const primoArray = []

  primoArray.push (1,2,3,4,5,6,7,8,9,10);

  console.log(primoArray)


  
  /* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */


  primoArray.splice(9 , 1, 100);
console.log(primoArray);