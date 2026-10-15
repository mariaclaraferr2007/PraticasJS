import contratos from "./contratos.js";

let contratosAtivos = [];
let contratosInativos = [];

let contratosAdministrativos = [];
let contratosOperacionais = [];

let contratosSul = [];
let contratosNorte = [];
let contratosLeste = [];
let contratosOeste = [];

for (let i = 0; i < contratos.length; i++) {
    if (contratos[i].status === "ativo") {
        contratosAtivos.push(contratos[i]);
    } else {
        contratosInativos.push(contratos[i]);
    }

    switch (contratos[i].tipo) {
        case "administrativo":
            contratosAdministrativos.push(contratos[i]);
            break;
        case "operacional":
            contratosOperacionais.push(contratos[i]);
            break;
    }

    switch (contratos[i].regiao) {
        case "sul":
            contratosSul.push(contratos[i]);
            break;
        case "norte":
            contratosNorte.push(contratos[i]);
            break;
        case "leste":
            contratosLeste.push(contratos[i]);
            break;
        case "oeste":
            contratosOeste.push(contratos[i]);
            break;
    }

}

console.log("Contratos Ativos:", contratosAtivos.length);
console.log("Contratos Inativos:", contratosInativos.length);
console.log("Contratos Administrativos:", contratosAdministrativos.length);
console.log("Contratos Operacionais:", contratosOperacionais.length);
console.log("Contratos Região Sul:", contratosSul.length);
console.log("Contratos Região Norte:", contratosNorte.length);
console.log("Contratos Região Leste:", contratosLeste.length);
console.log("Contratos Região Oeste:", contratosOeste.length);