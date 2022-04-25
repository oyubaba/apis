
'use strict'

const limparLista = (personagem) => {
    document.getElementById('nome').value = "";
    document.getElementById('status').value = "";
    document.getElementById('especie').value = "";
    document.getElementById('genero').value = "";
}
const preencherLista = (personagem) => {
    document.getElementById('nome').value = personagem.name;
    document.getElementById('status').value = personagem.status;
    document.getElementById('especie').value = personagem.species;
    document.getElementById('genero').value = personagem.gender;
}


    const sorteioPersonagens = async() => {
        limparLista;
        const sorteio = Math.floor(Math.random() * 826);
        const url = `https://rickandmortyapi.com/api/character/${sorteio}`;
        const dados = await fetch(url);
        const personagem = await dados.json();
        preencherLista(personagem);
        console.log(sorteio);
        
    }
    document.getElementById('botao');
    botao.onclick= sorteioPersonagens;

