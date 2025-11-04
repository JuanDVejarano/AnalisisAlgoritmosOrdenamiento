import "./App.scss";
import Grafica from "./components/GraficaGeneral/GraficaGeneral";
import { useState, useEffect } from "react";
import { createAlgoritmo, type Algoritmo } from "./model/Algoritmo";
// Importa los algoritmos de ordenamiento
import { bubbleSort } from "./logic/bubleSort";
import { insertionSort } from "./logic/insertionSort";
import { heapSort } from "./logic/heapSort";

function App() {
    const sample: number[] = Array.from({ length: 10000 }, () =>
        Math.floor(Math.random() * 10000)
    );

    let intervalo: number = 1000;

    const algoritmoInsertion: Algoritmo = createAlgoritmo(
        "Insertion Sort",
        sample,
        [],
        insertionSort([...sample], intervalo)
    );

    const algoritmoBubble: Algoritmo = createAlgoritmo(
        "Bubble Sort",
        sample,
        [],
        bubbleSort([...sample], intervalo)
    );

    const algoritmoHeapSort: Algoritmo = createAlgoritmo(
        "Heap Sort",
        sample,
        [],
        heapSort([...sample], intervalo)
    );

    const [listaAlgoritmos, setListaAlgoritmos] = useState<Algoritmo[]>([
        algoritmoInsertion,
        algoritmoBubble,
        algoritmoHeapSort,
    ]);

    return (
        <>
            <Grafica data={listaAlgoritmos} />
        </>
    );
}

export default App;
