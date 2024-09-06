// console.log(trilhasPetropolis);
// console.log(trilhasPetropolis[1].titulo);
// console.log(trilhasPetropolis[1].duracao); // Saída: 8 horas

function pesquisar () {
    // console.log("clicou");

let section = document.getElementById("resultados-pesquisa");
// console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value;

// console.log(campoPesquisa)

//se campoPesquisa for uma string vazia, sem nada

if (campoPesquisa == "") {
    section.innerHTML = "<p>Nenhuma trilha encontrada</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()


let resultados = "";
let titulo = "";
let descricao = "";

// laços de repetição

for (let trilha of trilhas) {
    titulo = trilha.titulo.toLowerCase()
    descricao = trilha.descricao.toLowerCase()

    //condição - se titulo includes campoPesquisa, então faça....
    if(titulo.includes(campoPesquisa) || (descricao.includes(campoPesquisa))) {
    // console.log(trilha.titulo.includes(campoPesquisa))
    resultados += `
    <div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${trilha.titulo}</a>
        </h2>
            <p class="descricao-meta">${trilha.descricao} </p>
            <a href=${trilha.link} target="_blank">Mais informações</a>
            </div>
`;
    }
}

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

section.innerHTML = resultados
}