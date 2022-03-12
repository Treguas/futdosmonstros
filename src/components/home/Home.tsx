import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Header } from "../header/Header";
import { Menu } from "../menu/Menu";
import "./Home.scss";
import { createContext } from "react";
import FlipMove from "react-flip-move";
import Feed from "../feed/Feed";


const headerContext = createContext('')

export const Home = () => {
    // const { user, signInWithGoogle } = useContext(AuthContext);


    return (
        <div className="header">
            <div>
                <Header />
            </div>
                <div className="containerFeed">
                    <FlipMove>
                        <Feed />
                    </FlipMove>
                </div>

            <div className="mainMenu">
                <Menu />
            </div>
        </div>
    )
}