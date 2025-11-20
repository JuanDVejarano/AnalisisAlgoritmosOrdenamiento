// Modelos y utils
import { useState } from "react";
import { createAlgoritmo, type Algoritmo } from "../../../model/Algoritmo";

// Componentes
import Grafica from "../../../components/GraficaGeneral/GraficaGeneral";
import Inputs from "../../../components/Inputs/Inputs";
import TooltipPage from "../../../components/Tooltip/TooltipPage";

// Importa los algoritmos de ordenamiento
import { bubbleSort } from "../../../logic/bubleSort";
import { insertionSort } from "../../../logic/insertionSort";
import { heapSort } from "../../../logic/heapSort";
import { selectionSort } from "../../../logic/selectionSort";
import { countingSort } from "../../../logic/countingSort";
import { shellSort } from "../../../logic/shellSort";
import TablaArreglos from "../../../components/TablaArreglos/TablaArreglos";
import { Tooltip } from "chart.js";

function IndexAlgoritmos() {
    const [numeroArrays, setNumeroArrays] = useState<number>(() => 1000);
    const [intervalo, setIntervalo] = useState<number>(() => 100);

    function handleGenerate(cantidad: number, intervaloNuevo: number) {
        setNumeroArrays(cantidad);
        setIntervalo(intervaloNuevo);
        // Llamar a crearGrafico con los valores nuevos para evitar usar estado aún no actualizado
        crearGrafico(cantidad, intervaloNuevo);
    }

    function crearGrafico(cantidad?: number, intervaloParam?: number) {
        const len = cantidad ?? numeroArrays;
        const intv = intervaloParam ?? intervalo;

        const sample: number[] = Array.from({ length: len }, () =>
            Math.floor(Math.random() * len)
        );

        //#region objetos Algoritmos de ordenamiento
        let algoritmoInsertion: Algoritmo = createAlgoritmo(
            "Insertion Sort",
            sample,
            insertionSort([...sample], intv).sorted,
            insertionSort([...sample], intv).times
        );

        let algoritmoBubble: Algoritmo = createAlgoritmo(
            "Bubble Sort",
            sample,
            bubbleSort([...sample], intv).sorted,
            bubbleSort([...sample], intv).times
        );

        let algoritmoHeapSort: Algoritmo = createAlgoritmo(
            "Heap Sort",
            sample,
            heapSort([...sample], intv).sorted,
            heapSort([...sample], intv).times
        );

        let algoritmoSelection: Algoritmo = createAlgoritmo(
            "Selection Sort",
            sample,
            selectionSort([...sample], intv).sorted,
            selectionSort([...sample], intv).times
        );

        let algoritmoCounting: Algoritmo = createAlgoritmo(
            "Counting Sort",
            sample,
            countingSort([...sample], intv).sorted,
            countingSort([...sample], intv).times
        );

        let algoritmoShell: Algoritmo = createAlgoritmo(
            "Shell Sort",
            sample,
            shellSort([...sample], intv).sorted,
            shellSort([...sample], intv).times
        );
        //#endregion

        setListaAlgoritmos([
            algoritmoSelection,
            algoritmoBubble,
            algoritmoInsertion,
            algoritmoHeapSort,
            algoritmoCounting,
            algoritmoShell,
        ]);
    }

    const [listaAlgoritmos, setListaAlgoritmos] = useState<Algoritmo[]>([]);

    // useEffect(() => {
    //     // Inicializa el gráfico con los valores por defecto del estado
    //     crearGrafico(numeroArrays, intervalo);
    // }, []);

    return (
        <>
            <h1 className="titleSection">Comparacion</h1>
            <section className="contenSection">
                <Inputs
                    cantidadArreglo={numeroArrays}
                    intervalo={intervalo}
                    onGenerate={handleGenerate}
                />
                <TooltipPage>
                    <ul>
                        <li>
                            Para comparar algoritmos de click en el color del
                            algoritmo en el gráfico
                        </li>
                        <li>
                            Para generar el grafico de click en el boton
                            "Generar Grafica"
                        </li>
                        <li>
                            El arreglo se crea con numeros random escriba la
                            cantidad de elementos del arerglo en el primer input
                        </li>
                        <li>
                            El intervalo define cada cuantos elementos se tomara
                            el tiempo de ejecución
                        </li>
                    </ul>
                </TooltipPage>
                <Grafica data={listaAlgoritmos} />
                <TablaArreglos
                    arrayInicial={
                        listaAlgoritmos.length > 0
                            ? listaAlgoritmos[0].arregloInicial
                            : []
                    }
                    interval={intervalo}
                />
                <TablaArreglos
                    arrayInicial={
                        listaAlgoritmos.length > 0
                            ? listaAlgoritmos[0].arregloOrdenado
                            : []
                    }
                    interval={intervalo}
                    isInitial={false}
                />
            </section>
        </>
    );
}

export default IndexAlgoritmos;
