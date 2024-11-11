import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../styles/App.css';
import Button from '../../components/botão-back/button.jsx';
import { useUsuario } from '../../context/UsuarioContext';

const Login = () => {
  const { login } = useUsuario(); // Pega a função login do contexto de usuário
  const [bodyClass, setBodyClass] = useState('');
  const [nome, setNome] = useState('');
  const [equipe, setEquipe] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const navigate = useNavigate(); // Para navegação para a página /home

  const handleSignIn = () => {
    setBodyClass('sign-in-js');
  };

  const handleSignUp = () => {
    setBodyClass('sign-up-js');
  };

  // Função para envio dos dados do formulário de cadastro
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !senha || !fotoPerfil) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Chama a função de cadastro (pode processar dados aqui, como enviar para o servidor)
    onCadastro({ nome, email, fotoPerfil, equipe });

    // Realiza o login do usuário automaticamente após o cadastro
    login({ nome, email, fotoPerfil, equipe }); // Loga o usuário no contexto

    // Redireciona para a página /home
    navigate('/home');
  };

  // Função que recebe os dados de cadastro (aqui você pode processar ou salvar no estado global)
  const onCadastro = (data) => {
    console.log('Dados do cadastro:', data);
    // Aqui você pode armazenar os dados, fazer requisições, ou outras ações conforme necessário
  };

  // Função para lidar com a mudança de foto de perfil
  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFotoPerfil(URL.createObjectURL(file));
    }
  };

  return (
    <div className={`login ${bodyClass}`}>


      <div className="container">
        <div className="content first-content">
          <div className="first-column">
            <h2 className="title-l title-primary-1">
              Seja bem-vindo <br /> de volta!
            </h2>
            <p className="description-l description-primary">
              Para se manter conectado conosco
            </p>
            <p className="description-l description-primary">
              Por favor, faça login com suas informações pessoais
            </p>
            <button id="signin" className="btn btn-primary" onClick={handleSignIn}>
              Entrar
            </button>
          </div>
          <div className="second-column">
            <span className="span">‎ </span>
            <h2 className="title-l title-second-1">Crie sua conta</h2>
            <div className="social-media">
              <ul className="list-social-media">
                <li className="item-social-media">
                  <div className="tooltip">Outlook</div>
                  <i className="fas fa-envelope"></i>
                </li>
                <li className="item-social-media">
                  <div className="tooltip">Google</div>
                  <i className="fab fa-google"></i>
                </li>
                <li className="item-social-media">
                  <div className="tooltip">Github</div>
                  <i className="fab fa-github"></i>
                </li>
              </ul>
            </div>
            <p className="description-l description-second-1">
              Ou use seu email para se registrar:
            </p>
            <form className="form" onSubmit={handleSubmit}>
              <label className="label-input" htmlFor="name">
                <span className="span">‎ </span>
                <i className="far fa-user icon-modify"></i>
                <input
                  type="text"
                  id="name"
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </label>
              <label className="label-input" htmlFor="email-signup">
                <span className="span">‎ </span>
                <i className="far fa-envelope icon-modify"></i>
                <input
                  type="email"
                  id="email-signup"
                  placeholder="Email institucional"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label className="label-input" htmlFor="etec-signup">
                <span className="span">‎ </span>
                <i className="fas fa-school icon-modify"></i>
                <input type="text" id="etec-signup" placeholder="Etec" />
              </label>
              <label className="label-input" htmlFor="equipe-signup">
                <span className="span">‎ </span>
                <i className="fas fa-school icon-modify"></i>
                <input type="text" id="equipe-signup" placeholder="Equipe"  onChange={(e) => setEquipe(e.target.value)} />
              </label>
              <label className="label-input" htmlFor="password-signup">
                <span className="span">‎ </span>
                <i className="fas fa-lock icon-modify"></i>
                <input
                  type="password"
                  id="password-signup"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </label>

              <label className="file-upload-label" htmlFor="perfil-signup">
                <svg
                  aria-hidden="true"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeWidth="2"
                    stroke="#fffffff"
                    d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="#fffffff"
                    d="M17 15V18M17 21V18M17 18H14M17 18H20"
                  ></path>
                </svg>
                Escolha sua foto de perfil
                <input
                  type="file"
                  id="perfil-signup"
                  accept="image/*"
                  onChange={handleFotoChange}
                  required
                />
              </label>



              {fotoPerfil && (
                <div className="preview">
                  <img src={fotoPerfil} alt="Foto de Perfil" width="70" />
                </div>
              )}
              <button type="submit" className="btn btn-second">
                Continuar
              </button>
              <span className="span">‎ </span>
            </form>
          </div>
        </div>
        <div className="content second-content">
          <div className="first-column">
            <h2 className="title-l title-primary">Vamos iniciar!</h2>
            <p className="description-l description-primary">Coloque suas informações</p>
            <p className="description-l description-primary">para iniciar uma nova jornada</p>
            <button id="signup" className="btn btn-primary" onClick={handleSignUp}>
              Criar conta
            </button>
          </div>
          <div className="second-column">
            <h2 className="title-l title-second">Entre na sua conta</h2>
            <div className="social-media">
              <ul className="list-social-media">
                <li className="item-social-media">
                  <i className="fab fa-facebook-f"></i>
                </li>
                <li className="item-social-media">
                  <i className="fab fa-google-plus-g"></i>
                </li>
                <li className="item-social-media">
                  <i className="fab fa-linkedin-in"></i>
                </li>
              </ul>
            </div>
            <p className="description-l description-second">ou use seu email para entrar:</p>
            <form className="form">
              <label className="label-input" htmlFor="email-login">
                <span>‎ </span>
                <i className="far fa-envelope icon-modify"></i>
                <input type="email" id="email-login" placeholder="Email" />
              </label>
              <label className="label-input" htmlFor="password-login">
                <span>‎ </span>
                <i className="fas fa-lock icon-modify"></i>
                <input type="password" id="password-login" placeholder="Senha" />
              </label>
              <a href="/" className="password" onClick={(e) => e.preventDefault()}>
                Esqueceu sua senha?
              </a>
              <button type="submit" className="btn btn-second">
                Entrar
              </button>
            </form>
          </div>
        </div>
        <div className="btn-i">
          <Button className="bt" />
        </div>
      </div>
    </div>
  );
};

export default Login;
