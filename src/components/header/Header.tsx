import './Header.scss';
import { useContext, useEffect, useState } from 'react';
import Back from '../../assets/icons/back.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
    const currentPath = window.location.pathname.split("/")[1];
    const [path, setCurrentPath] = useState<string>();

    useEffect(()=>
    {
        activePath();
    }, []);

    const activePath = () => {
        if (currentPath == "List") 
        {
            setCurrentPath('Lista de Jogadores')
        }
        else if (currentPath == "")
        {
            setCurrentPath('Home')
        }
    }

    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/"><a><img src={Back} alt="Voltar" />
                </a></Link>
                <img src={Back} alt="Logo" />
            </div>

            <div className="header-content">
                <strong>{path}</strong>
            </div>
        </header>
    )
}