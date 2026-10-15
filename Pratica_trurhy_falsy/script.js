let nome = prompt("Qual é o seu nome?");
if (nome){
    alert(`Olá, ${nome}!`);
}else {
    alert("Coloque um nome válido")
    nome = prompt("Qual é o seu nome?");
}