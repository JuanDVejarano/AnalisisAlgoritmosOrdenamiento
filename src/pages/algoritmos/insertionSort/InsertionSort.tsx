import "./InsertionSort.scss";
import { Editor } from "@monaco-editor/react";
import gifInsertionSort from "../../../assets/gifAlgoritmos/InsertionSort.gif";

function InsertionSort() {
    const code: string = `
// Codigo Insertion sort
const arr = [5,1,8,4,9,6,7,2,3];
const n = arr.length;
const arrayTimes: number[] = [];
for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    // Mover los elementos de arr[0..i-1], que son mayores que la clave,
    // a una posición adelante de su posición actual
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
    }
    arr[j + 1] = key;
}`;
    return (
        <>
            <h1 className="titleSection">Insertion Sort</h1>
            <section className="contenSectionCodigo">
                <div className="codigo">
                    <Editor
                        height="79vh"
                        defaultLanguage="typescript"
                        value={code}
                        theme="vs-dark"
                        options={{
                            automaticLayout: true,
                            minimap: { enabled: false },
                            fontSize: 13,
                            wordWrap: "on",
                            scrollBeyondLastLine: false,
                            readOnly: true,
                            scrollbar: {
                                vertical: "hidden",
                                horizontal: "hidden",
                            },
                        }}
                    />
                </div>
                <div className="descripcion">
                    <img
                        decoding="async"
                        alt="Insertion Sort Average Case"
                        src={gifInsertionSort}></img>
                    <div className="casosAlgoritmo">
                        <h2>Representacion temporal</h2>
                        <ul>
                            <li>
                                Mejor caso: <span>O(n)</span>
                            </li>
                            <li>
                                Peor caso: <span>O(n²)</span>
                            </li>
                            <li>
                                Caso promedio: <span>O(n²)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default InsertionSort;
