import { NavLink } from "react-router-dom";
let steam = require('../images/steam.png')




const Menu = () => {
    return (
        <>
        <nav className="menu">
            <a className="logosteam" href=""><i class="fa-brands fa-steam-symbol"></i><span>Search</span></a>
            <ul>
                <li><NavLink to='../inicio'>Home</NavLink></li>
                <li><NavLink to='../servers'>Servers</NavLink></li>
                <li><NavLink to='../usuario'>Users</NavLink></li>
            </ul>
        </nav>
        </>
    );
}

export default Menu;