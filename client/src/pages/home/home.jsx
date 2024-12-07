import HeaderH from '../../components/header-h/HeaderH.jsx'
import Calendar from '../../components/calender/calender.jsx'
import Clima from '../../components/clima/clima.jsx'
import Publi from '../../assets/home/publi.svg'
import Publi2 from '../../assets/home/publi-2.svg'
import Card1 from '../../assets/home/card-1.svg'
import Card2 from '../../assets/home/card-2.svg'
import Card3 from '../../assets/home/card-3.svg'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadUser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users/usuario/1');
      console.log(response)
      setUser(response.data);
    } catch (err) {
      setError('Erro ao carregar os dados do usuário.');
      console.error('Error loading user data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return (
      <div>
        <h1>Bem-vindo à Home</h1>
        <p>Usuário não encontrado. Por favor, faça login novamente.</p>
      </div>
    );
  }

  return (
    <div className="home">
      <HeaderH
        Text="Inicio"
        Text2="Chat"
        Text3="Aulas"
        Text4="Canais"
        onClick="/"
        onClick1="."
        onClick2="."
        onClick3="."
      />
      <div className="container-home">
        <div className="carrosel">
          <img src={Publi} alt="publi" />
        </div>
        <div className="etapas">
          <div className="text-h">
            <h3>Etapas</h3>
            <p>Fique de olho nas etapas da competição</p>
          </div>
          <div className="card-etp">
            <img src={Card1} alt="" className="cards-etp" />
            <img src={Card2} alt="" className="cards-etp" />
            <img src={Card3} alt="" className="cards-etp" />
          </div>
        </div>
        <div className="publi">
          <img src={Publi2} alt="" />
        </div>
        <div className="calen">
          <Calendar />
        </div>

        <div className="card-perfil">
          <div className="perfil">
            <h2 className='nomeuser'>Olá, <br /> {user.nome}</h2>
          </div>
          <br />
          <hr
            style={{
              border: 'none',
              borderTop: '2px solid #545454',
              width: '359px',
              marginLeft: '30px',
              margintop: '50px',
            }}
          />
          <br />

          <div className="equipe">
            <div className="rectangle-parent">
              <div className="equipe1">Equipe</div>
              <div className="haumana">{user.fk_equipe_id}</div>
              <div className="equipe-child"></div>
            </div>
          </div>
          <div className="clima">
            <Clima />
          </div>

          <div className="areaC">
            <div className="group-child"></div>
            <div className="rea-do-competidor">Área do competidor</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
