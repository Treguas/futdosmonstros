import './Menu.scss';
import '../../styles/layout.scss';
import { useContext, useEffect, useState } from 'react';
import Back from '../../assets/icons/back.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";

export const Menu = () => {
    const currentPath = window.location.pathname.split("/")[1];
    const [path, setCurrentPath] = useState<string>();

    useEffect(() => {
    }, []);


 

    return (

       <></>
    )
}