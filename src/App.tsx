import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
// pages
import IndexAlgoritmos from "./pages/algoritmos/analisis/IndexAlgoritmos";
import CodigoAnalisis from "./pages/code/analisis/CodigoAnalisis";
// Components
import Menu from "./components/Menu/Menu";
import EjemplosCodigo from "./pages/code/ejemplos/EjemplosCodigo";
import SelectionSort from "./pages/algoritmos/selectionSort/SelectionSort";
import BubbleSort from "./pages/algoritmos/bublesort/BubbleSort";
import InsertionSort from "./pages/algoritmos/insertionSort/InsertionSort";
import HeapSort from "./pages/algoritmos/heapSort/HeapSort";
import CountingSort from "./pages/algoritmos/countingSort/CountingSort";
import ShellSort from "./pages/algoritmos/shellSort/ShellSort";

function App() {
    return (
        <main className="app">
            <HashRouter>
                <Menu />
                <section className="sectionMain">
                    <Routes>
                        <Route path="/" element={<IndexAlgoritmos />} />
                        <Route
                            path="/Algoritmos"
                            element={<IndexAlgoritmos />}
                        />
                        <Route
                            path="/SelectionSort"
                            element={<SelectionSort />}
                        />
                        <Route path="/BubbleSort" element={<BubbleSort />} />
                        <Route
                            path="/InsertionSort"
                            element={<InsertionSort />}
                        />
                        <Route path="/HeapSort" element={<HeapSort />} />
                        <Route
                            path="/CountingSort"
                            element={<CountingSort />}
                        />
                        <Route path="/ShellSort" element={<ShellSort />} />
                        <Route path="/Codigo" element={<CodigoAnalisis />} />
                        <Route path="/Ejemplos" element={<EjemplosCodigo />} />
                    </Routes>
                </section>
            </HashRouter>
        </main>
    );
}

export default App;
