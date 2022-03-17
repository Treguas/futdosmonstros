import { useContext } from "react";
import { Menu } from "../components/menu/Menu"
import { AuthContext } from "../contexts/AuthContext";

export const List = () => 
{
    const { user, signInWithGoogle } = useContext(AuthContext);

    let teste = window.location.pathname
    let ts = teste.split("/")[1]
    console.log(ts)
    return (

<>
        <p>vc ta no list</p>
</>
    )
}