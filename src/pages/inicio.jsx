import server2 from '../images/server2.json'
import Lottie from 'lottie-react'
import { NavLink } from 'react-router-dom'


function Home(){
    return(
        <>
        <div className="containerInicio">
            <div className="presentacion">
                <h1>Steam Search</h1>
                <h2>Te ayudo a buscar Servidores y Usuarios</h2>
                <div className="btn">
                    <button><NavLink to='../servers'> <p> Servidores</p></NavLink></button>
                    <button><NavLink to='../usuario'> <p> Usuarios</p></NavLink></button>
                </div>
            </div>
            <div className="opcionesApp">
                <div className="animacion">
                <Lottie animationData={server2}/>
                </div>
                
            </div>

        </div>
        </>
    );
}


export function Footer(){
    return(
        <>
        <footer>
            <h1>SysWoker</h1>
        </footer>
        </>
    );
}

export default Home;