import React, { useState } from "react";
import Grafica from "../../components/GraficaIndividual/Graph";
import "./CodigoAnalisis.scss";

function CodigoAnalisis() {
    //arreglo de tiempos con estado de react
    //const [tiempos, setTiempos] = React.useState<number[]>([]>);
    const [tiempos, setTiempos] = useState<number[]>([]);
    let inicio: number;
    let repeticionesActual: number = 0;

    function tomarTiempo(repeticiones: number = 1) {
        repeticionesActual++;
        if (repeticiones === repeticionesActual) {
            const fin = performance.now();
            const dato = fin - inicio;
            setTiempos((prev) => [...prev, dato]);
            repeticionesActual = 0;
        }
    }

    const contexto = {
        tomarTiempo,
        console,
    };

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        setTiempos([]); // Limpiar los tiempos antes de cada análisis
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const inputText = formData.get("inputText") as string;

        inicio = performance.now();
        try {
            const ejecutar = new Function("contexto", inputText);
            ejecutar(contexto);
        } catch (e) {
            console.error("❌ Error al ejecutar el código:", e);
        }

        console.log(tiempos);
    }

    // #region Funciones de ejemplo para evaluar
    /*ejemplo 1 de funcion a evaluar
    function imprimirHolaMundo() {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          console.log("Hola Mundo");
          contexto.tomarTiempo();
        }
      }
    }
    imprimirHolaMundo();
    */

    /*ejemplo 2 de funcion a evaluar
    
    */
    // #endregion

    return (
        <>
            <form action="\" onSubmit={handleSubmit}>
                <h1>Análisis de Sintaxis</h1>
                <label htmlFor="inputText">Ingrese el texto a analizar:</label>
                <br />
                <textarea id="inputText" name="inputText" rows={10} cols={50} />
                <br />
                <button type="submit">Analizar</button>
            </form>
            <Grafica data={tiempos} />
        </>
    );
}

export default CodigoAnalisis;
