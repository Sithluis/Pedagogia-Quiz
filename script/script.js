const question = [
    {
        question: "Qual é o principal objetivo da pedagogia?",
        choices: ["Formar cidadãos críticos e conscientes.", "Desenvolver competências técnicas específicas.", "Promover a competitividade no mercado de trabalho.", "Estimular apenas a memorização de conteúdos."],
        answer: "Formar cidadãos críticos e conscientes."
    },
    {
        question: "Quais são os pilares da pedagogia de Paulo Freire?",
        choices: ["Leitura, escrita e aritmética.", "Ensino, pesquisa e extensão.", "Autonomia, diálogo e transformação.", "Hierarquia, disciplina e obediência."],
        answer: "Autonomia, diálogo e transformação."
    },
    {
        question: "Qual é o papel do pedagogo na educação inclusiva?",
        choices: ["Diagnosticar e rotular os alunos com deficiência.", "Excluir os alunos com necessidades especiais das atividades educacionais.", "Garantir a igualdade de oportunidades e acessibilidade a todos os alunos.", "Desenvolver apenas atividades padronizadas, ignorando as diferenças individuais."],
        answer: "Garantir a igualdade de oportunidades e acessibilidade a todos os alunos."
    },
    {
        question: "O que é a teoria construtivista na pedagogia?",
        choices: ["A ideia de que o conhecimento é construído ativamente pelo aluno.", "O método tradicional de ensino centrado no professor.", "A abordagem que enfatiza apenas a memorização de fatos.", "A crença de que o conhecimento é inato e não pode ser alterado."],
        answer: "A ideia de que o conhecimento é construído ativamente pelo aluno."
    },
    {
        question: "Qual é a importância da ludicidade na educação infantil?",
        choices: ["Proporcionar apenas entretenimento sem propósito educacional.", "Desenvolver habilidades sociais e cognitivas de forma lúdica e prazerosa.", "Reforçar o ensino baseado apenas na repetição e memorização.", "Ignorar o desenvolvimento integral das crianças."],
        answer: "Desenvolver habilidades sociais e cognitivas de forma lúdica e prazerosa."
    },

    {
        question: "Quem é considerado o pai da pedagogia moderna?",
        choices: ["Jean-Jacques Rousseau", "Platão", "Aristóteles", "Sócrates"],
        answer: "Jean-Jacques Rousseau"
    },
    {
        question: "O que é a abordagem sociointeracionista na pedagogia?",
        choices: ["A teoria que enfatiza o papel do meio ambiente no desenvolvimento infantil.", "A crença de que o conhecimento é inato e não pode ser modificado.", "O método de ensino centrado apenas na transmissão de conhecimentos.", "A prática que exclui a interação social no processo educacional."],
        answer: "A teoria que enfatiza o papel do meio ambiente no desenvolvimento infantil."
    },
    {
        question: "O que significa a sigla BNCC na educação brasileira?",
        choices: ["Base Nacional de Currículos Comuns", "Banco Nacional de Conteúdos Curriculares", "Base Nacional Comum Curricular", "Biblioteca Nacional de Conteúdos Científicos"],
        answer: "Base Nacional Comum Curricular"
    },
    {
        question: "Qual é o papel da avaliação na pedagogia?",
        choices: ["Classificar e rotular os alunos de acordo com seu desempenho.", "Fornecer feedback para melhorar o ensino e a aprendizagem.", "Comparar os alunos entre si, destacando os melhores e os piores.", "Desencorajar os alunos e reforçar a competição na sala de aula."],
        answer: "Fornecer feedback para melhorar o ensino e a aprendizagem."
    },
    {
        question: "O que é o método montessoriano?",
        choices: ["Um método que enfatiza a competição e a classificação dos alunos.", "Uma abordagem que valoriza a liberdade e a autonomia do aluno no processo de aprendizagem.", "Um sistema de ensino baseado apenas na repetição mecânica de informações.", "Uma prática que exclui a individualidade e a diversidade na sala de aula."],
        answer: "Uma abordagem que valoriza a liberdade e a autonomia do aluno no processo de aprendizagem."
    },
];

const questionElement = document.querySelector("#question");
const choiceElements = document.querySelectorAll(".choice");
const nextButton = document.querySelector("#next");
const scoreElement = document.querySelector("#score");
const wrongElement = document.querySelector("#wrong");

let currentQuestion = 0;
let score = 0;
let wrong = 0;
let answerChosen = false;

function loadQuestion() {
    const currentQuestionData = question[currentQuestion]
    questionElement.innerHTML = currentQuestionData.question;

    const choices = shuffleArray(currentQuestionData.choices)

    for (let i = 0; i < choiceElements.length; i++) {
        choiceElements[i].innerText = choices[i]
    }

    answerChosen = false;
}

function shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1;

        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue;
    }

    return array
}

function checkAnswer(e) {
    if(answerChosen) return

    answerChosen = true;

    if (e.target.innerText === question[currentQuestion].answer) {
        score++
        scoreElement.innerText = `Pontuação: ${score}`
        alert("Acertou");
    } else {
        wrong++
        wrongElement.innerText = `Erros: ${wrong}`
        alert(`Errou! A resposta correta seria ${question[currentQuestion].answer}`);
    }
}

choiceElements.forEach((btn) => {
    btn.addEventListener("click", checkAnswer)
})

nextButton.addEventListener("click", () => {
    if(!answerChosen) {
        alert("Questão não respondida!")
        return
    }

    currentQuestion++

    if (currentQuestion < question.length) {
        loadQuestion()
    } else {
        alert(
            `Quiz Finalizado! você acertou ${score} de ${question.length} perguntas.`
        )
        restartQuiz()
    }
})

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    wrong = 0;
    scoreElement.innerText = `Pontuação: 0`;
    wrongElement.innerText = `Erros: 0`;
    loadQuestion()
}

loadQuestion() 