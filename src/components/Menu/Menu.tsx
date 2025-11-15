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
                <li className="item">
                    <NavLink to="/SelectionSort">Selection Sort</NavLink>
                </li>
                <li className="item">
                    <NavLink to="/BubbleSort">Bubble Sort</NavLink>
                </li>
                <li className="item">
                    <NavLink to="/InsertionSort">Insertion Sort</NavLink>
                </li>
                <li className="item">
                    <NavLink to="/HeapSort">Heap Sort</NavLink>
                </li>
                <li className="item">
                    <NavLink to="/CountingSort">Counting Sort</NavLink>
                </li>
                <li className="item">
                    <NavLink to="/ShellSort">Shell Sort</NavLink>
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
