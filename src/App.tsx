import "./App.scss";
import Grafica from "./components/GraficaGeneral/GraficaGeneral";
import { useState, useEffect } from "react";
import { createAlgoritmo } from "./model/Algoritmo";
// Importa los algoritmos de ordenamiento
import { bubbleSort } from "./logic/bubleSort";
import { insertionSort } from "./logic/insertionSort";

function App() {
    const sample: number[] = Array.from({ length: 10000 }, () =>
        Math.floor(Math.random() * 10000)
    );

    let intervalo: number = 1000;

    const algoritmoInsertion = createAlgoritmo(
        "Insertion Sort",
        sample,
        [],
        insertionSort([...sample], intervalo)
    );

    const algoritmoBubble = createAlgoritmo(
        "Bubble Sort",
        sample,
        [],
        bubbleSort([...sample], intervalo)
    );

    console.log(typeof algoritmoInsertion);
    console.log(typeof algoritmoBubble);

    // Añade en la cabecera: import React, { useEffect, useState } from "react";
    const [timesInsertionSort, setTimesInsertionSort] = useState<number[]>([]);

    useEffect(() => {
        setTimesInsertionSort(insertionSort([...sample], intervalo));
    }, []); // ejecuta una vez al montar

    return (
        <>
            <Grafica dataInsertionSort={timesInsertionSort} />
        </>
    );
}

export default App;
