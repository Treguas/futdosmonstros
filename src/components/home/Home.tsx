import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Menu } from "../menu/Menu";
import "./Home.scss";
import '../../styles/layout.scss';
import { createContext } from "react";
import Feed from "../feed/Feed";
import '../../styles/layout.scss';
import { List } from "../../pages/List";
import { GiCyborgFace, GiExitDoor, GiSwitchWeapon } from "react-icons/gi";



const headerContext = createContext('')

export const Home = () => {
    const { user, signInWithGoogle, logout } = useContext(AuthContext);
    const [elementClickText, setElementClickText] = useState('');
    const [menuMobile, setMenuMobile] = useState<boolean>(false);

    const hideComponent = (event: any) => {
        const elementClicked = event.target.text;
        setElementClickText(elementClicked);
        setMenuMobile(false);
    }

    function switchMenu() {
        if (menuMobile == true)
            setMenuMobile(false);
        if (menuMobile == false)
            setMenuMobile(true)
    }

    return (

        <div id="container">
            <header className="left-container">
                {/* <!-- Navigation --> */}
                <nav className="navbar">
                    {/* <!-- Navbar icons Top --> */}
                    <div className="flex-start">
                        {/* <!-- Hamburger --> */}
                        <div className="hamburger" onClick={switchMenu}>
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>

                        <h1 id="logo" className="invisible">
                            <a>
                                FutDosMonstros
                            </a>
                        </h1>

                        <div className="nav-menu">
                            <a className="nav-link" onClick={(e) => { hideComponent(e) }}>
                                Feed
                            </a>
                            <a className="nav-link" onClick={(e) => { hideComponent(e) }}>
                                Lista de Presença
                            </a>
                        </div>
                    </div>

                    <div className="flex-end">
                        <a className="header-icons themeSwitch">
                            <GiSwitchWeapon size={25} />
                        </a>

                        <a className="header-icons" title="Profile">
                            <GiCyborgFace size={40} />
                        </a>
                    </div>
                </nav>
            </header>
            <Menu />

            <main className="main-container">
                <div className="navbar-secondary">
                    <h2>Futebol de Qualidade, Rola Bola 15:30!</h2>
                    <div className="buttons">
                        <img className="imgUserLogger" src={user?.avatar} alt="Usuário" />
                        <span title="Sair" onClick={logout}><GiExitDoor size={30} /></span>
                    </div>
                </div>

                <div className="container">
                    <section className="hero">
                        <div className="highlight-text">
                            {elementClickText == 'Feed' || elementClickText == '' ?
                                <p>
                                    🙌 Leia atentamente as Regras
                                    <a
                                        href="#"> Leia Mais
                                    </a>
                                </p>
                                : null
                            }
                        </div>
                        {elementClickText == 'Feed' || elementClickText == '' ?
                            <div className="feed">
                                <Feed />
                            </div>
                            : null
                        }
                        {elementClickText == 'Lista de Presença' ?
                            <div className="feed">
                                <List />
                            </div>
                            : null
                        }
                    </section>
                </div>
            </main>
            {menuMobile == true ?
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={switchMenu}>&times;</span>
                        <a onClick={(e) => { hideComponent(e) }}>
                            Feed
                        </a>
                        <a onClick={(e) => { hideComponent(e) }}>
                            Lista de Presença
                        </a>
                    </div>

                </div>
                : null
            }
        </div >
    )
}