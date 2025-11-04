import "./App.scss";
import Grafica from "./components/GraficaGeneral/GraficaGeneral";
import { insertionSort } from "./logic/insertionSort";
import { useState, useEffect } from "react";
import { createAlgoritmo } from "./model/Algoritmo";

function App() {
    const sample: number[] = Array.from({ length: 10000 }, () =>
        Math.floor(Math.random() * 10000)
    );

    let intervalo: number = 1000;

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
