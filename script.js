const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a melhor maneira de se combater o desmatamento?",
        alternativas: [
            "reflorestamento de áreas degradadas",
            "Implementação de leis mais rigorosas para a proteção das florestas"
        ]
    },
    {
        enunciado: "Como podemos combater a desigualdade social de forma eficaz e sustentável?",
        alternativas: [
            "Implementar programas de educação e formação profissional acessíveis a todos",
            "políticas de redistribuição de renda e oportunidades"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){                //mostrando as perguntas
    perguntaAtual = perguntas[atual];     //inicia a lista de perguntas pelo item 0 da lista
    caixaPerguntas.textContent = perguntaAtual.enunciado; //mostra o texto da pergunta
    caixaAlternativas.textContent = "";  //limpa o texto da caixa de alternativas
    mostraAlternativas();                //executa a função mostraAlternativa.
}

mostraPergunta();                       //executa a função mostraPergunta.

function mostraAlternativas() {         //criando os botões de alternativas 
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button"); //criando botão
      botaoAlternativas.textContent = alternativa; //salvando o texto da alternativa no botão
      caixaAlternativas.appendChild(botaoAlternativas); //insere o botão na DIV do HTML
    }
  }
  