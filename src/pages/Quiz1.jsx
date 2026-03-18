import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Quiz1() {

    const navigate = useNavigate();

    const questions = [
        {
            question: "Qual era a cor da minha calça no primeiro date?",
            options: ["Azul", "Bege", "Preto"],
            correct: 1
        },
        {
            question: "Qual é a minha música favorita?",
            options: ["Did it All for Love", "Meu Novo Mundo", "Novo Recomeço"],
            correct: 2
        },
        {
            question: "Qual a primeira música que eu dediquei para você?",
            options: ["Meus planos", "Um minuto para o fim do mundo", "Me encontra"],
            correct: 0
        },
        {
            question: "Qual o maior nazismo que você me motivou a fazer (ou tentar)?",
            options: ["Ir em bloquinho", "Bater de frente com meus pais", "F1"],
            correct: 0
        },
        {
            question: "Qual é o meu piercing favorito seu?",
            options: ["... Direito", "... Esquerdo", "Umbigo"],
            correct: 1
        },
        {
            question: "Minha parte favorita do seu corpo?",
            options: ["Boca saborosa", "Bochechas lindinhas", "Zoião"],
            correct: 2
        },
        {
            question: "Meu estilo de cabelo favorito seu?",
            options: ["Liso", "Cacheado", "Ondulado"],
            correct: 2
        },
        {
            question: "Nossa sobremesa favorita?",
            options: ["Sunday com cobertura de caramelo", "Chiquinho", "Kinder Bueno"],
            correct: 1
        },
        {
            question: "Nosso jogo mais jogado?",
            options: ["Amogus", "Standoff", "Stumble"],
            correct: 2
        },
        {
            question: "Presente que mais me esforcei para fazer até agora?",
            options: ['Quadro dos "Eu te amo"', "Rosa de cetim", "Site V1"],
            correct: 0
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    function onQuizSuccess() {
        alert("110, anote isso. Quando terminar, me fala Abacate.");
        navigate('/');
    }

    function handleAnswer(index) {
        if (index === questions[currentQuestion].correct) {
            if (currentQuestion === questions.length - 1) {
                onQuizSuccess();
            } else {
                setCurrentQuestion(prev => prev + 1);
            }
        } else {
            setCurrentQuestion(0);
        }
    }

    return (
        <div className="quiz-page">
            <div className="quiz-card">
                <h2 className="quiz-question">
                    {questions[currentQuestion].question}
                </h2>

                {questions[currentQuestion].options.map((option, index) => (
                    <button
                        key={index}
                        className="quiz-option"
                        onClick={() => handleAnswer(index)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}
