import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Header } from "../header/Header";
import { Menu } from "../menu/Menu";
import "./Home.scss";
import { FcInspection } from "react-icons/fc";
import { createContext } from "react";

const headerContext = createContext('')

export const Home = () =>
{
    const { user, signInWithGoogle } = useContext(AuthContext);

 
    return (
        <div className="header">
            <div>
                <headerContext.Provider value={'Treguas'}>
                    <Header />
                </headerContext.Provider>
            </div>

            
            <div className="mainMenu">
                <Menu />
            </div>
        </div>
        
    )
}