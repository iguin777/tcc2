import etec from '../../assets/landing/etec.svg';
import logo from '../../assets/landing/Logo-white.svg';
import { FaInstagram, FaYoutube, FaTiktok} from 'react-icons/fa';

const Footer = () => {
    return(
        <section className="footer">
            
        <div className="ancoras">
          <ul className='links'>
            <li className='icon-content'>
                <a 
                href="."
                className='link'
                aria-label='Instagram'
                >
                    <FaInstagram/>
                </a>
                <div className="tooltip">Instagram</div>
            </li>

            <li className='icon-content'>
                <a href="."
                className='link'
                >
                    <FaYoutube/>
                </a>
                <div className="tooltip">Youtube</div>
            </li>

            <li className='icon-content'>
                <a href="."
                className='link'
                >
                    <FaTiktok/>
                </a>
                <div className="tooltip">Tiktok</div>
            </li>
          </ul>
        </div>

       

        <div className="images">
            <img src={logo} alt="" />
            <img src={etec} alt="" />
        </div>
    </section>
    );
};

export default Footer;