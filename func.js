let criptografarTexto =  document.getElementById('campoTexto');
const showFinalMessage = document.getElementById('showFinalMessage');


function criptografar(){
    document.getElementById('semMensagem').style.display = "none";
    //casa
    let valorAtribuidoTabela = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let message= document.getElementById("campoTexto").value.toLowerCase();
   for(let i=0; i<valorAtribuidoTabela.length; i++){
    if(message.includes(valorAtribuidoTabela[i][0])){
        message=message.replaceAll(valorAtribuidoTabela[i][0], valorAtribuidoTabela[i][1]);
    }
   }
   document.getElementById('mostrandoMensagem').style.display="flex";

   showFinalMessage.textContent = message;
   criptografarTexto = "";
}

function descriptografar(){
    document.getElementById('semMensagem').style.display = "none";
    let valorAtribuidoTabela = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let message= document.getElementById("campoTexto").value.toLowerCase();
   for(let i=0; i<valorAtribuidoTabela.length; i++){
    if(message.includes(valorAtribuidoTabela[i][1])){
        message=message.replaceAll(valorAtribuidoTabela[i][1], valorAtribuidoTabela[i][0]);
    }
   }

   document.getElementById('mostrandoMensagem').style.display="flex";
   showFinalMessage.textContent = message;
   criptografarTexto = "";
}

function copiar(){
    let textoCopiado = document.getElementById("showFinalMessage");
    const range = document.createRange();

    range.selectNode(textoCopiado);
    const selection = window.getSelection();
    selection.removeAllRanges(); // removes 
    selection.addRange(range); // adds

        try{
            document.execCommand('copy');
        }catch(err){
            console.error("Falha ao copiar", err);
        }

}
