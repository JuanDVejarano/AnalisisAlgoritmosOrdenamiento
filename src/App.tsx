import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
// pages
import IndexAlgoritmos from "./pages/algoritmos/IndexAlgoritmos";
import CodigoAnalisis from "./pages/code/analisis/CodigoAnalisis";
// Components
import Menu from "./components/Menu/Menu";
import EjemplosCodigo from "./pages/code/ejemplos/EjemplosCodigo";

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
                        <Route path="/Codigo" element={<CodigoAnalisis />} />
                        <Route path="/Ejemplos" element={<EjemplosCodigo />} />
                    </Routes>
                </section>
            </HashRouter>
        </main>
    );
}

export default App;
