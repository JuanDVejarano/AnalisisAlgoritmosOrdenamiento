// Modelos y utils
import { useState } from "react";
import { createAlgoritmo, type Algoritmo } from "../../model/Algoritmo";

// Componentes
import Grafica from "../../components/GraficaGeneral/GraficaGeneral";
import Inputs from "../../components/Inputs/Inputs";

// Importa los algoritmos de ordenamiento
import { bubbleSort } from "../../logic/bubleSort";
import { insertionSort } from "../../logic/insertionSort";
import { heapSort } from "../../logic/heapSort";
import { selectionSort } from "../../logic/selectionSort";
import { countingSort } from "../../logic/countingSort";
import { shellSort } from "../../logic/shellSort";

function IndexAlgoritmos() {
    const sample: number[] = Array.from({ length: 10000 }, () =>
        Math.floor(Math.random() * 10000)
    );

    let intervalo: number = 1000;

    //#region objetos Algoritmos de ordenamiento
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

    const algoritmoSelection: Algoritmo = createAlgoritmo(
        "Selection Sort",
        sample,
        [],
        selectionSort([...sample], intervalo)
    );

    const algoritmoCounting: Algoritmo = createAlgoritmo(
        "Counting Sort",
        sample,
        [],
        countingSort([...sample], intervalo)
    );

    const algoritmoShell: Algoritmo = createAlgoritmo(
        "Shell Sort",
        sample,
        [],
        shellSort([...sample], intervalo)
    );
    //#endregion

    const [listaAlgoritmos] = useState<Algoritmo[]>([
        algoritmoInsertion,
        algoritmoBubble,
        algoritmoHeapSort,
        algoritmoSelection,
        algoritmoCounting,
        algoritmoShell,
    ]);

    return (
        <>
            <Inputs />
            <Grafica data={listaAlgoritmos} />
        </>
    );
}

export default IndexAlgoritmos;
