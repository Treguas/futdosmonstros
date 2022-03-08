import { useEffect } from 'react';
import { Header} from '../components/header/Header';




export const List = () => 
{
    let teste = window.location.pathname
    let ts = teste.split("/")[1]
    console.log(ts)
    return (
    <div>
        <Header />
    </div>
    )
}