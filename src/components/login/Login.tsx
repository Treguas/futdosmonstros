import '../../styles/global.scss';
import '../../styles/login.scss';
import googleIconImg from '../../assets/images/google-icon.svg';
import logo from '../../assets/images/junior_soccer.svg';
import soccerField from '../../assets/images/soccer-field.gif';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export function Login() 
{
    const { signInWithGoogle } = useContext(AuthContext);

    return (
        <div id="page-login">
            <aside>
                <img src={logo} alt="Ilustração Logo" />
                <strong>FUTDOSMONSTROS</strong>
                <p>Futebol Entre Amigos, Venha ser um Monstro no Futebol</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={soccerField} alt="futdosmonstros" />
                    <button  className="login-google" onClick={signInWithGoogle}>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Login com Google
                    </button>
                    <div className="separator">Seja Bem - Vindo</div>
                </div>
            </main>
        </div>
    )
}