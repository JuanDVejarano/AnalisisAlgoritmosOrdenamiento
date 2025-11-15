import "./CountingSort.scss";
import { Editor } from "@monaco-editor/react";
import gifCountingSort from "../../../assets/gifAlgoritmos/CountingSort.gif";

function CountingSort() {
    const code: string = `
// Codigo Counting sort
const arr = [5,1,8,4,9,6,7,2,3];
const n = arr.length;
const output: number[] = new Array(n).fill(0);
const count: number[] = new Array(10).fill(0); // Suponiendo que los elementos están en el rango 0-9

for (let i = 0; i < n; i++) {
    count[arr[i]]++;
}

for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
}

for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
}

for (let i = 0; i < n; i++) {
    arr[i] = output[i];
}`;
    return (
        <>
            <h1 className="titleSection">Counting Sort</h1>
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
                        alt="Counting Sort Average Case"
                        src={gifCountingSort}></img>
                    <div className="casosAlgoritmo">
                        <h2>Representacion temporal</h2>
                        <ul>
                            <li>
                                Mejor caso: <span>O(n + k)</span>
                            </li>
                            <li>
                                Peor caso: <span>O(n + k)</span>
                            </li>
                            <li>
                                Caso promedio: <span>O(n + k)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CountingSort;
