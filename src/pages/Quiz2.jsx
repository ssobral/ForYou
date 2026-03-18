import { useState } from 'react';

export default function Quiz2() {

    const PASSWORD = '110';

    const questions = [
        {
            question: "Nome do cachorro do Tibão?",
            options: ["Pamonha", "Milho", "Pipoca"],
            correct: 2
        },
        {
            question: "Nossa maior frustração Cinéfila?",
            options: ["Truque de Mestre", "Minecraft", "Stranger Things Ep Final"],
            correct: 0
        },
        {
            question: "Cor do gato que me encarou?",
            options: ["Laranja", "Branco e laranja", "Branco e Preto"],
            correct: 1
        },
        {
            question: "Qual foi a compra mais rápida que fiz para você?",
            options: ["Moletom da Billie", "Bolsa de maquiagem", "Gloss de mel"],
            correct: 1
        },
        {
            question: "O que vc ganhou no bingo do meu prédio?",
            options: ["Tupperware de vidro", "Tupperware de plástico", "Porta temperos"],
            correct: 0
        },
        {
            question: "No casal de pantufas, qual é a minha?",
            options: ["Mike Wazowski", "Mikey", "Stich"],
            correct: 2
        },
        {
            question: "Minha música favorita recomendada por você?",
            options: ["Did it all for love", "Heaven Can Wait", "CHIHIRO"],
            correct: 0
        },
        {
            question: "Seu familiar que mais tenho amizade?",
            options: ["Sua mãe", "Seu pai", "Sua irmã"],
            correct: 2
        },
        {
            question: 'Quantas línguas tem no quadro de "Eu te amo?"',
            options: ["53", "49", "55"],
            correct: 2
        },
        {
            question: "Meu presente mais frustrado?",
            options: ["Pelúcia do Homem Aranha", "Projetor", "Barbie"],
            correct: 0
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [error, setError] = useState(false);

    function onQuizSuccess() {
        // função vazia por enquanto
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

    function handlePasswordSubmit() {
        if (password === PASSWORD) {
            setAuthenticated(true);
            setError(false);
        } else {
            setError(true);
        }
    }

    return (
        <div className="quiz-page">
            {!authenticated ? (
                <div className="quiz-card">
                    <h2 className="quiz-question">Digite a senha para acessar</h2>

                    <input
                        type="password"
                        className="quiz-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="quiz-error">Senha incorreta</p>}

                    <button className="quiz-option" onClick={handlePasswordSubmit}>
                        Entrar
                    </button>
                </div>
            ) : (
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
            )}
        </div>
    );
}
