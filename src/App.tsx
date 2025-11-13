import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
// pages
import IndexAlgoritmos from "./pages/algoritmos/IndexAlgoritmos";
import CodigoAnalisis from "./pages/codigo/CodigoAnalisis";
// Components
import Menu from "./components/Menu/Menu";

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
                    </Routes>
                </section>
            </HashRouter>
        </main>
    );
}

export default App;
