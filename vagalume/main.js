const botao = document.getElementById('botao');


const procurarLetra = async() => {
    const cantor = document.getElementById('cantor').value;
    const musica = document.getElementById('musica').value;
    const url = `https://api.vagalume.com.br/search.php?art=${cantor}&mus=${musica}&apikey={key}`;


    const dados = await fetch(url);
    const api = await dados.json();
    
    console.log(api.mus[0].text);
}

    botao.addEventListener("click", procurarLetra);


