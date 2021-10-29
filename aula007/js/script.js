function alertaInicio(){
    alert("Seja bem-vindo");
}

window.onload=function(){
   // alertaInicio();
}

function salvar(){
    console.log('Funcao funcionando');
    let input_nome = document.getElementById('nome');
    console.log(input_nome.valeu);
    console.log(input_nome.type);
    let div = document.getElementById('nome-preenchido'); 
    div.innerHTML = div.innerHTML +"<h1>"+input_nome.value +"</h1>";
    input_nome.value ="";
}