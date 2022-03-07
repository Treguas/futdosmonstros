import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Header } from "../header/Header";
import { Menu } from "../menu/Menu";
import "./Home.scss";
import { FcInspection } from "react-icons/fc";

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