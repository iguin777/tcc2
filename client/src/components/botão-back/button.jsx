import Voltar from '../../assets/login/voltar.svg';

const Button = () =>{
    return(
        <div className='btn-back'>
            <a href="/"><img src={Voltar} alt="botao" /></a>
        </div>
    );
};

export default Button;