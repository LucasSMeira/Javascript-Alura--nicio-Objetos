
let livroUm = {
    titulo:'A anscenção de um Guerreiro',
    autor: 'Fax',
    anoPublicacao: 2024,
    genero: 'Biografia',
};

const dadosLivro  = `Os dados do livro são :
    titulo: ${livroUm.titulo},
    autor: ${livroUm.autor},
    anoPublicacao: ${livroUm.anoPublicacao},
    genero: ${livroUm.genero},
`
console.log(dadosLivro);

const anoAtual = new Date().getFullYear();


let livroDois = {
    titulo:'O começo da queda e o fundo do poço',
    autor: 'Fax',
    anoPublicacao: 2016,
    genero: 'Biografia',
    
};

livroDois.idadePublicacao = anoAtual - livroDois.anoPublicacao;

const dadosLivroDois  = `Os dados do livro são :
    titulo: ${livroDois.titulo},
    autor: ${livroDois.autor},
    anoPublicacao: ${livroDois.anoPublicacao},
    genero: ${livroDois.genero},
    idadePublicacao: ${livroDois.idadePublicacao},
`

console.log(dadosLivroDois);


let livroTres = {
    titulo:'As tentativas de se reerguer',
    autor: 'Fax',
    anoPublicacao: 2019,
    genero: 'Biografia',
    
};

livroTres.idadePublicacao = anoAtual - livroTres.anoPublicacao;

const dadoslivroTres  = `Os dados do livro são :
    titulo: ${livroTres.titulo},
    autor: ${livroTres.autor},
    anoPublicacao: ${livroTres.anoPublicacao},
    genero: ${livroTres.genero},
    idadePublicacao: ${livroTres.idadePublicacao},
`

console.log(livroTres["titulo"]);