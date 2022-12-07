function EnviarNota(){
    let inputModal = document.getElementById("inputModal")
    
    if(inputModal.value < 0 || inputModal.value > 10){
        // Aqui estou criando o elemento h5 <h5></h5>
        const node = document.createElement("h5");
        //Aqui estou adicionando a variavel textNode o texto abaixo: "Você errou sua nota, digite novamente"
        const textnode = document.createTextNode("Você errou sua nota, digite novamente");
        //appendChild para adicionar o texto textnode ao elemento h5 ou seja <h5>Você errou sua nota, digite novamente</h5>
        node.appendChild(textnode);

        //Estou acessando a div com o ID modalContent <div class="modal-content" id="modalContent">
        let modalContent = document.getElementById("modalContent");
        //estou adicionando a minha modal content o valor do node 
        modalContent.appendChild(node);
        // neste momento eu zero o meu input 
        inputModal.value = ''

        // esta é uma função que determina quanto tempo irá durar para executar o 
        // O que tem dentro da arrow function () => { }
        // a carinha da funcao setTimeout  setTimeout(funcao, tempoqueelairádurar)

        setTimeout(() => {
            node.style.display = "none"
            inputModal.focus();
        },3000)
         
    }else{
        let modal = document.getElementById("minhaModal")

        modal.style.display = "none"
        alert("Parabens Alunos pela dedicação")
        //const meuH3 = document.createElement("h3");
        //const textoDoMeuH3 = document.createTextNode("Parabéns, agora sou outro texto");
        //meuH3.appendChild(textoDoMeuH3);

        // document.body.appendChild(meuH3);
        // inputModal.value = ''
        // setTimeout(() => {
        //     meuH3.style.display = "none"
        // },5000)
    }
}

