'use strict'

const limparLista = (personagem) => {
    document.getElementById('nome').value = "";
    document.getElementById('status').value = "";
    document.getElementById('especie').value = "";
    document.getElementById('genero').value = "";
}
const preencherLista = (personagem) => {
    document.getElementById('nome').value = personagem.name;
    document.getElementById('episodio').value = personagem.episode;
    document.getElementById('url').value = personagem.url;
    document.getElementById('data').value = personagem.air_date;
}


    const sorteioPersonagens = async() => {
        limparLista;
        const sorteio = Math.floor(Math.random() * 51);
        const url = `https://rickandmortyapi.com/api/episode/${sorteio}`;
        const dados = await fetch(url);
        const personagem = await dados.json();
        preencherLista(personagem);
        console.log(sorteio);
    }

    document.getElementById('botao');
    botao.onclick= sorteioPersonagens;