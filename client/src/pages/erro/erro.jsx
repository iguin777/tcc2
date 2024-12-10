
import './erro.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-message">
          <h1 className="error-code">404</h1>
          <p className="error-text">Página não encontrada</p>
          <p className="error-description">
            A página que você está procurando não existe ou foi movida.
          </p>
          <a href="/" className="back-home">Voltar para a página inicial</a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
