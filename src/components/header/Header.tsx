import './Header.scss';
import Back from '../../assets/icons/back.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/"><a><img src={Back} alt="Voltar" />
                </a></Link>
                <img src={Back} alt="Logo" />
            </div>

            <div className="header-content">
                <strong>Home</strong>
            </div>
        </header>
    )
}