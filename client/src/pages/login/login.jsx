import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const UserForm = () => {

  //login

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const navigateLogin = useNavigate(); // Hook para navegação

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/users/login', { email, senha });
      setMessage(response.data.message);
  

      // Verifica se o login foi bem-sucedido e redireciona
      if (response.status === 200) {
        navigateLogin('/home'); // Redireciona para a rota 'home'
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Erro ao fazer login.');
    }
  };


  const [formData, setFormData] = useState({
    nome: '',
    fk_equipe_id: '',
    email: '',
    telefone: '',
    usuario_rm: '',
    senha: '',
    etec: '',
  });

  const [bodyClass, setBodyClass] = useState(''); // Adicionado aqui
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleSignIn = () => {
    setBodyClass('sign-in-js');
  };

  const handleSignUp = () => {
    setBodyClass('sign-up-js');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/users/create', formData); // Alteração para usar api.js
      alert(response.data.message);

      if (response.status === 201) {
        navigate('/home'); // Redireciona para a página inicial após cadastro
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.response?.data || error);
      alert('Erro ao criar usuário.');
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
            <form onSubmit={handleSubmit} className="form">
              <label className="label-input" htmlFor="nome">
                <span>‎ </span>
                <i className="far fa-user icon-modify"></i>
                <input type="text" id="nome" name="nome" onChange={handleChange} placeholder="Nome" required />
              </label>
              <label className="label-input" htmlFor="fk_equipe_id">
                <span>‎ </span>
                <i className="fas fa-school icon-modify"></i>
                <input type="number" id="fk_equipe_id" name="fk_equipe_id" onChange={handleChange} placeholder="Equipe" required />
              </label>
              <label className="label-input" htmlFor="email">
                <span>‎ </span>
                <i className="far fa-envelope icon-modify"></i>
                <input type="email" id="email" name="email" onChange={handleChange} required placeholder="Email" />
              </label>
              <label className="label-input" htmlFor="telefone">
                <span>‎ </span>
                <i className="fas fa-phone icon-modify"></i>
                <input type="text" id="telefone" name="telefone" onChange={handleChange} required placeholder="Telefone" />
              </label>
              <label className="label-input" htmlFor="usuario_rm">
                <span>‎ </span>
                <i className="fas fa-user-graduate icon-modify"></i>
                <input type="text" id="usuario_rm" name="usuario_rm" onChange={handleChange} placeholder="RM" required />
              </label>
              <label className="label-input" htmlFor="etec">
                <span>‎ </span>
                <i className="fas fa-school icon-modify"></i>
                <input type="text" id="etec" name="etec" onChange={handleChange} required placeholder="Etec" />
              </label>
              <label className="label-input" htmlFor="senha">
                <span>‎ </span>
                <i className="fas fa-lock icon-modify"></i>
                <input type="password" id="senha" name="senha" onChange={handleChange} required placeholder="Senha" />
              </label>
              <button type="submit" className="btn btn-second">Cadastrar</button>
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
            <form onSubmit={handleLogin} className="form">
              <label className="label-input" htmlFor="email-login">
                <span>‎ </span>
                <i className="far fa-envelope icon-modify"></i>
                <input
                  id="email-login"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label className="label-input" htmlFor="password-login">
                <span>‎ </span>
                <i className="fas fa-lock icon-modify"></i>
                <input
                  id="password-login"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </label>
              <a href="/" className="password" onClick={(e) => e.preventDefault()}>
                Esqueceu sua senha?
              </a>
              <button type="submit" className="btn btn-second">Login</button>
              {message && <p>{message}</p>}

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
