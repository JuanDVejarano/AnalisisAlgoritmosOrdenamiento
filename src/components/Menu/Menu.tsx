import "./Menu.scss";
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <nav className="menu">
            <ul className="subMenu">
                <li className="title">
                    <h2>Algoritmos</h2>
                </li>
                <li className="item">
                    <NavLink to="/">Comparacion</NavLink>
                </li>
            </ul>
            <ul className="subMenu">
                <li className="title">
                    <h2>Código</h2>
                </li>
                <li className="item">
                    <NavLink to="/Codigo">Análisis de Sintaxis</NavLink>
                </li>
                <li className="item">
                    <NavLink to="/Ejemplos">Ejemplos de codigo</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
