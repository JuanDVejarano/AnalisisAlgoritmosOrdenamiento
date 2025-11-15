import "./BubbleSort.scss";
import { Editor } from "@monaco-editor/react";
import gifBubbleSort from "../../..//assets/gifAlgoritmos/BubbleSort.gif";

function BubbleSort() {
    const code: string = `
// Codigo bubble sort
const arr = [5,1,8,4,9,6,7,2,3];
const n = arr.length;
const arrayTimes: number[] = [];
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // intercambiar arr[j] y arr[j+1]
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
return { times: arrayTimes, sorted: arr };`;
    return (
        <>
            <h1 className="titleSection">Bubble Sort</h1>
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
                        alt="Bubble Sort Average Case"
                        src={gifBubbleSort}></img>
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

export default BubbleSort;
