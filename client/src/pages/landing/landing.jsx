import '../../styles/App.css';
import Header from '../../components/header/Header.jsx'
import Hero from '../../assets/landing/heros.svg';
import pc from '../../assets/landing/pc.svg';
import jogo from '../../assets/landing/controle.svg'
import monitor from '../../assets/landing/monitor.svg'
import prot from '../../assets/landing/prototipo.svg'
import steps from '../../assets/landing/steps.svg';
import hero from '../../assets/landing/hero.png';
import Footer from '../../components/footer/footer.jsx';


function Landing() {
    return ( 
        
        <div className="landing" id='ba'>
          <Header Text="Inicio" Text2="Como funciona?" Text3="Regulamento" onClick="/login" />

            
            <section id="home">
                <div className="blur"></div>
                <div id="box-txt">
                    <h1 className="title"> Já pensou em fazer
                        <br /> um Game?
                    </h1>

                    <p className="description">
                        A Etec GameJam é uma ótima oportunidade
                        para você aprender e executar um jogo.
                    </p>

                    <div className="btn-home">
                        <a href="." className="sub-btn">Inscreva-se</a>

                        <a href="." className="ins-btn">Já me inscrevi</a>
                    </div>
                </div>
                <div className="banner">
                    <img src={Hero} alt="Heros" />
                </div>
            </section>

            <section className="info">

                <div className="img-monitor">
                    <img src={pc} alt="pc" />
                </div>
                <div className="txt-info">
                    <h1 className="title-info">O que é uma GameJam?</h1>
                    <p className="description-info">Uma Game Jam é um evento onde desenvolvedores de jogos se reúnem para criar jogos em um período de tempo limitado. Durante a Game Jam, os participantes trabalham em equipes ou individualmente para criar um jogo a partir do zero, seguindo um tema específico ou desafio proposto pelos organizadores. Esses eventos são ótimas oportunidades para os desenvolvedores exercitarem sua criatividade, aprenderem novas habilidades . No final da Game Jam, os jogos são geralmente apresentados e avaliados, muitas vezes com prêmios para os melhores projetos. </p>
                </div>

            </section>

            <section>

            <div className="txt-apre">
                <h1>O que você vai aprender</h1>
            </div>

            <div className="card">
                <div className="jogo">
                    <img src={jogo} alt="" />
                    <h2>Fazer um jogo do zero</h2>
                    <p>Você aprenderá a fazer um jogo do zero, utilizando várias técnicas diferentes</p>
                </div>
                <div className="cod">
                    <img src={monitor} alt="" />
                    <h2 id="top2">Codar em c++</h2>
                    <p>Você aprenderá a desenvolver jogos usando c++ com Engine Unreal 5</p>
                </div>
                <div className="prot">
                    <img src={prot} alt="" />
                    <h2 id="top">Fazer um protótipo jogavél</h2>
                    <p>Você irá sair dessa GameJam com um jogo em mãos</p>
                </div>
            </div>
            <div className="blur-2"></div>
        </section>

        <section className="steps">
            <div className="block">
                <div className="txt-steps">
                    <h1>Etapas da competição</h1>
                </div>

                <div className="step">
                    <img src={steps} alt="step" />
                </div>

            </div>

            <div className="hero">
                <img src={hero} alt="" />
            </div>

            <div className="blur-3"></div>

        </section>

        <Footer/>

        </div>

    )
}

export default Landing;