//let meuSpan = document.getElementById("meuSpan")
let modal = document.getElementById("minhaModal")

var span = document.getElementsByClassName("close")[0];

function AbrirModal(){
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
  }