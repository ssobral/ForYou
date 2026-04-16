import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Quiz3() {

    const PASSWORD = '445';
    const navigate = useNavigate();

    const questions = [
        {
            question: "Qual era a cor da peça de roupa que eu recuperei para você?",
            answer: "verde"
        },
        {
            question: "Nosso role mais engraçado planejado?",
            answer: "maid cafe"
        },
        {
            question: "Bar do nosso pior date, que o tia da pinga salvou (só o primeiro nome)",
            answer: "atlanta"
        },
        {
            question: "Filme presente na escolha que gerou o maior efeito borboleta da nossa relação?",
            answer: "minecraft"
        },
        {
            question: "Throwing...",
            answer: "flashbang"
        },
        {
            question: "Chocolate que comprei para você e minha mãe no mesmo dia (superfaturado inclusive)",
            answer: "cenouradas"
        },
        {
            question: "Jogo que mais estou ansioso pra você jogar?",
            answer: "life is strange"
        },
        {
            question: "A gigante que pensa que é minuscula",
            answer: "kira"
        },
        {
            question: "Nome do nosso gato no minecraft?",
            answer: "luna"
        },
        {
            question: "A melhor e mais engraçada palavra do mundo?",
            answer: "jericoacoara"
        },
        {
            question: "Futuro nome da nossa filha?",
            answer: "alice"
        },
        {
            question: "Pessoa que mais vai passar pano pra nossa filha? (primeira pessoa)",
            answer: "eu"
        },
        {
            question: "Mais linda/o dos pais da Alice? (primeira pessoa)",
            answer: "eu"
        },
        {
            question: "Quem é o bebe do mo? (primeira pessoa)",
            answer: "eu"
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [error, setError] = useState(false);
    const [inputAnswer, setInputAnswer] = useState('');

    function onQuizSuccess() {
        alert("Terminou nosso quiz amor ❤️. Parabéns!!! Para coletar sua recompensa, basta me falar Solitária.");
        navigate('/');
    }

    function handleAnswerSubmit() {
        const correctAnswer = questions[currentQuestion].answer;

        if (inputAnswer.trim() === correctAnswer) {
            if (currentQuestion === questions.length - 1) {
                onQuizSuccess();
            } else {
                setCurrentQuestion(prev => prev + 1);
                setInputAnswer('');
            }
        } else {
            setCurrentQuestion(0);
            setInputAnswer('');
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

                    <input
                        type="text"
                        className="quiz-input"
                        value={inputAnswer}
                        onChange={(e) => setInputAnswer(e.target.value)}
                    />

                    <p style={{ fontSize: '12px', marginTop: '5px' }}>
                        tudo minusculo, sem acento
                    </p>

                    <button className="quiz-option" onClick={handleAnswerSubmit}>
                        Confirmar
                    </button>
                </div>
            )}
        </div>
    );
}