import { useNavigate } from 'react-router-dom';
import condbruno from '../assets/cond-bruno.jpg';
import Imagem1 from '../assets/Imagem1.jpg';
import Imagem2 from '../assets/Imagem2.jpg';
import Imagem3 from '../assets/Imagem3.jpg';
import Imagem4 from '../assets/Imagem4.jpg';
import Imagem5 from '../assets/Imagem5.jpg';
import Imagem6 from '../assets/Imagem6.jpg';
import Imagem7 from '../assets/Imagem7.jpg';
import Imagem8 from '../assets/Imagem8.jpg';
import mao from '../assets/mao.jpg';
import praca from '../assets/praça.jpg';

function Home() {

    const navigate = useNavigate();

    return (
        <>
            <section className="home">
                <div className='wellcome'>
                    <h1 className='wellcome-title'>Oi amor S2</h1>

                    <div className="menu-buttons">
                        <button className="quiz-option" onClick={() => navigate('/v1')}>
                            Primeiro presente
                        </button>

                        <button className="quiz-option" onClick={() => navigate('/v2')}>
                            Segundo presente
                        </button>

                        <button className="quiz-option" onClick={() => navigate('/quiz1')}>
                            Quiz 1
                        </button>

                        <button className="quiz-option" onClick={() => navigate('/quiz2')}>
                            Quiz 2
                        </button>

                        <button className="quiz-option" onClick={() => navigate('/quiz3')}>
                            Quiz 3
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;