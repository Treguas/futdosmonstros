import "./Menu.scss";
import Inspection from "../../assets/icons/inspection.svg";
import Home from "../../assets/icons/home.svg";
import Rule from "../../assets/icons/rule.svg";
import Photos from "../../assets/icons/photos.svg";
import Config from "../../assets/icons/config.svg";
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <div>
            <section className="icon-wrapper">
                <Link to="/">
                    <img src={Home} title="Home" />
                </Link>
                <Link to="/List">
                    <img src={Inspection} title="Lista" />
                </Link>
                <Link to="/Photos">
                    <img src={Photos} title="Fotos" />
                </Link>
                <Link to="/Rule">
                    <img src={Rule} title="regras" />
                </Link>
                <Link to="/Config">
                    <img src={Config} title="Configurações" />
                </Link>
            </section>
        </div>
    )
}