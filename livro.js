
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