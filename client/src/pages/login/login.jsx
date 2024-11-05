import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../styles/App.css';
import Button from '../../components/botão-back/button.jsx';
import { useUsuario } from '../../context/UsuarioContext';

const Login = () => {
  const { login } = useUsuario(); // Pega a função login do contexto de usuário
  const [bodyClass, setBodyClass] = useState('');
  const [nome, setNome] = useState('');
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
    onCadastro({ nome, email, fotoPerfil });

    // Realiza o login do usuário automaticamente após o cadastro
    login({ nome, email, fotoPerfil }); // Loga o usuário no contexto

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
      <div className="blur"></div>

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

              <label className="label-input" htmlFor="perfil-signup">
                <span className="span">‎ </span>
                <i className="fas fa-photo icon-modify"></i>
                <input
                  type="file"
                  id="perfil-signup"
                  placeholder="Foto de Perfil"
                  accept="image/*"
                  onChange={handleFotoChange}
                  required
                />
              </label>

              {fotoPerfil && (
                <div className="preview">
                  <img src={fotoPerfil} alt="Foto de Perfil" width="100" />
                </div>
              )}
              <button type="submit" className="btn btn-second">
                Continuar
              </button>
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
