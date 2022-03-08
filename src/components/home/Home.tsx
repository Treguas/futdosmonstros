import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Header } from "../header/Header";
import { Menu } from "../menu/Menu";
import "./Home.scss";
import { createContext } from "react";

const headerContext = createContext('')

export const Home = () =>
{
    const { user, signInWithGoogle } = useContext(AuthContext);

 
    return (
        <div className="header">
            <div>
                    <Header />
            </div>

            
            <div className="mainMenu">
                <Menu />
            </div>
        </div>
        
    )
}