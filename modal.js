function EnviarNota(){
    let inputModal = document.getElementById("inputModal")

    if(inputModal.value < 0 || inputModal.value > 10){
        const node = document.createElement("h5");
        const textnode = document.createTextNode("Você errou sua nota");
        node.appendChild(textnode);
        let modalContent = document.getElementById("modalContent");
        modalContent.appendChild(node);
        inputModal.value = ''
        inputModal.focus();
    }else{
        
    }
}