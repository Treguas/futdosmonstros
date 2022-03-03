import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Home = () =>
{
    const { user, signInWithGoogle } = useContext(AuthContext);
    return (
        <div>
            <p>vc esta na home</p>

            <img src={user?.avatar} alt="" />
            <p>{user?.id}</p>
            <p>{user?.name}</p>
        </div>
    )
}