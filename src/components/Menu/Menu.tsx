import "./Menu.scss";
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <NavLink to="/">Algoritmos</NavLink>
                </li>
                <li>
                    <NavLink to="/Codigo">Código</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
