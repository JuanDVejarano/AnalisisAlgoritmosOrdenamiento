import "./HeapSort.scss";
import { Editor } from "@monaco-editor/react";
import gifHeapSort from "../../../assets/gifAlgoritmos/HeapSort.gif";

function HeapSort() {
    const code: string = `// Codigo Heap sort
const arr = [5,1,8,4,9,6,7,2,3];
const n = arr.length;

function heapify(arr: number[], n: number, i: number) {
    let largest = i; 
    const left = 2 * i + 1; 
    const right = 2 * i + 2; 

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
}

for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
}`;
    return (
        <>
            <h1 className="titleSection">Heap Sort</h1>
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
                        alt="Heap Sort Average Case"
                        src={gifHeapSort}></img>
                    <div className="casosAlgoritmo">
                        <h2>Representacion temporal</h2>
                        <ul>
                            <li>
                                Mejor caso: <span>O(n log n)</span>
                            </li>
                            <li>
                                Peor caso: <span>O(n log n)</span>
                            </li>
                            <li>
                                Caso promedio: <span>O(n log n)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeapSort;
