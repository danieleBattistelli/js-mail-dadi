//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.
//Non è necessario provvedere alla validazione delle email.

//Genero email da una lista di email
 function generateEmails(names, domain) {
     let emails = [];
     for (let i = 0; i < names.length; i++) {
         let email = names[i].toLowerCase().replace(/\s+/g, '.') + '@' + domain;
         emails.push(email);
     }
     return emails;
 }

let names = ["Mario Rossi", "Luigi Bianchi", "Anna Verdi", "Pinco Pallino", "Gina Score"];
let domain = "gmail.com";
let emailList = generateEmails(names, domain);
console.log("Questa è un' email list generata")
console.log(emailList.toString());

//Lista di email
const listaEmail = [
    'esempio1@esempio.com',
    'esempio2@esempio.com',
    'esempio3@esempio.com'
  ];
  
  // Singola email da controllare
  const emailDaControllare = prompt("Iserisci la tua email")
  console.log(emailDaControllare)
  
  // Variabile per tracciare se l'email è trovata
  let emailTrovata = false;
  
  // Ciclo attraverso la lista
  for (let i = 0; i < emailList.length; i++) {
    if (emailList[i] === emailDaControllare) {
      emailTrovata = true;
      break;
    }
  }
  if (emailTrovata) {
    console.log('Email trovata nella lista.');
  } else {
    console.log('Email non trovata nella lista.');
  }
  