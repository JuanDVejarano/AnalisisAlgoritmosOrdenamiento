import "./SelectionSort.scss";
import { Editor } from "@monaco-editor/react";
import gifSelectionSort from "../../../assets/gifAlgoritmos/SelectionSort.gif";

function SelectionSort() {
    const code: string = `
// Codigo selection sort
const arr = [5,1,8,4,9,6,7,2,3];
const n = arr.length;
const arrayTimes: number[] = [];
for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
            minIdx = j;
        }
    }
    // Intercambiar el elemento mínimo con el primer elemento
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
}`;
    return (
        <>
            <h1 className="titleSection">Selection Sort</h1>
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
                        alt="Selection Sort Average Case"
                        src={gifSelectionSort}></img>
                    <div className="casosAlgoritmo">
                        <h2>Representacion temporal</h2>
                        <ul>
                            <li>
                                Mejor caso: <span>O(n²)</span>
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

export default SelectionSort;
