const criptografarTexto =  document.getElementById('criptografarTexto');
const showFinalMessage = document.getElementById('showFinalMessage');


function criptografar(){
    //vindo
    let valorAtribuidoTabela = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let message= document.getElementById("criptografarTexto").value.toLowerCase();
  
   for(let i=0; i<valorAtribuidoTabela.length; i++){
    if(message.includes(valorAtribuidoTabela[i][0])){
        message=message.replace(valorAtribuidoTabela[i][0], valorAtribuidoTabela[i][1]);
    }
   }
   document.getElementById('mostrandoMensagem').style.display="flex";
}