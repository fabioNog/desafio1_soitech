function EnviarNota(){
    let inputModal = document.getElementById("inputModal")

    if(inputModal.value < 0 || inputModal.value > 10){
        const node = document.createElement("h5");
        const textnode = document.createTextNode("Você errou sua nota, digite novame");
        node.appendChild(textnode);
        let modalContent = document.getElementById("modalContent");
        modalContent.appendChild(node);
        inputModal.value = ''
        setTimeout(() => {
            node.style.display = "none"
        },3000)
        inputModal.focus();
    }else{
        let modal = document.getElementById("minhaModal")
        modal.style.display = "none"
        const node = document.createElement("h3");
        const textnode = document.createTextNode("Parabéns Você acertou sua nota");
        node.appendChild(textnode);
        document.body.appendChild(node);
        inputModal.value = ''
        setTimeout(() => {
            node.style.display = "none"
        },3000)
    }
}

