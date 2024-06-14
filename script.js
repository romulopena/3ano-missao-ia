const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a melhor maneira de se combater o desmatamento?",
        alternativas: [
 //Listenner
            {
              texto: "reflorestamento de áreas degradadas",
              afirmação: "Porque é importante replantar para solucionar"
            },
            {
                texto: "Implementação de leis mais rigorosas para a proteção das florestas",
                afirmação: "Penalizando é uma forma de inibir a exploração"
            }
            
        ]
    },
    {
        enunciado: "Como podemos combater a desigualdade social de forma eficaz e sustentável?",
        alternativas: [
            {
                texto: "Implementar programas de educação e formação profissional acessíveis a todos",
                afirmação: "Ação necessária para oportunizar conhecimento"
            },
            {
                texto: "políticas de redistribuição de renda e oportunidades",
                afirmação: "Uso correto dos recursos a quem mais precisa"
            }
              
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "",

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativas of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
//insercao do atributo .texto
      botaoAlternativas.textContent = alternativas.texto;
//adição de evento de escuta
      botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativas));
      caixaAlternativas.appendChild(botaoAlternativas);
    }
}

  function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}
mostraPergunta();  