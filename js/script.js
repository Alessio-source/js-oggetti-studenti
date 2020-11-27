$(document).ready(
  function(){
    studente();
    studenti();
    setTimeout(aggiuntaStudente, 500);
  }
);

function studente() {

  var studente = {
    "nome" : "Mario",
    "cognome" : "Rossi",
    "eta" : 20
  }


  for ( var i in studente) {
    console.log(studente[i]);
  }

  var message = "<li>Nome: " + studente.nome + ", Cognome: " + studente.cognome + ", Età: " + studente.eta +  "</li>";
  $(".studente-list").html( message );

  return null;
};

function studenti() {

  var studenti = [
    {
      "nome" : "Alberto",
      "cognome" : "Russo"
    },
    {
      "nome" : "Matteo",
      "cognome" : "Ferrari"
    },
    {
      "nome" : "Giovanni",
      "cognome" : "Bianchi"
    },
    {
      "nome" : "Artorias",
      "cognome" : "Romano"
    }
  ]

  for (var i in studenti) {
    var message = "<li>Nome: " + studenti[i].nome + ", Cognome: " + studenti[i].cognome +  "</li>";
    $(".studenti-list").append( message );
    console.log(studenti[i]);
  };

  return null;
};

function aggiuntaStudente() {

  for (var i = 0; i < 1; i++) {

    var nome = prompt("Inserisci il tuo nome");
    var cognome = prompt("Inserisci il tuo cognome");
    var eta = parseInt(prompt("Inserisci la tua età"));

    if (!(isNaN(eta)) && nome != "" && cognome != "") {
      var aggiunto = {
        "nome" : nome,
        "cognome" : cognome,
        "eta" : eta
      };
    } else {
      alert("Hai inserito un parametro non valido riprova!");
      i--;
    }

  }

  var message = "<li>Nome: " + aggiunto.nome + ", Cognome: " + aggiunto.cognome + ", Età: " + aggiunto.eta + "</li>";
  $(".aggiuntaStudente").append( message );

  console.log(aggiunto);
}
