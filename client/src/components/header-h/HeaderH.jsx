import logo from '../../assets/landing/Logo.svg';
import login from '../../assets/landing/login-icon.svg';
import { FaUser, FaHome, FaList } from 'react-icons/fa';


const Header = ( {Text,Text2, Text3, onClick, onClick1, onClick2, onClick3}) => {
    return(
        <section id='header'>
        <header>
            <nav id="nav-bar_h">
                <i id="nav-logo"><img src={logo} alt="logo" /></i>

                <ul id="nav_list_h">
                    <li className="nav-item active">
                        <a href={onClick3} >{Text}</a>
                    </li>
                    <li className="nav-item">
                        <a href={onClick2}>{Text2}</a>
                    </li>
                    <li className="nav-item">
                        <a href={onClick1}>{Text3}</a>
                    </li>
                </ul>
            </nav>
            <div className="bnt">
                <a href={onClick} className="btn-plat"><img src={login} alt="login" /></a>
            </div>
        </header>

        <ul className="example-1">
        <li className="icon-content">
            <a
            href="/"
            aria-label="Spotify"
            data-social="spotify"
            className="link"
            >
            <FaHome/>
            </a>
            <div className="tooltip">Inicio</div>
        </li>
        <li className="icon-content">
            <a
            href="/"
            aria-label="Dribbble"
            data-social="dribbble"
            className="link"
            >
            
              <FaList/>

            </a>
            <div className="tooltip">Regulamento</div>
        </li>
        <li className="icon-content">
            <a
            href="/"
            aria-label="Telegram"
            data-social="telegram"
            className="link"
            >
           <FaUser/>
            </a>
            <div className="tooltip">Acesse a plataforma</div>
        </li>
        </ul>
        </section>
    )
}
 
export default Header;