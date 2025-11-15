import "./ShellSort.scss";
import { Editor } from "@monaco-editor/react";
import gifShellSort from "../../../assets/gifAlgoritmos/ShellSort.gif";

function ShellSort() {
    const code: string = `
// Codigo Shell sort
const arr = [5,1,8,4,9,6,7,2,3];
const n = arr.length;
let gap = Math.floor(n / 2);

while (gap > 0) {
    for (let i = gap; i < n; i++) {
        const temp = arr[i];
        let j = i;
        while (j >= gap && arr[j - gap] > temp) {
            arr[j] = arr[j - gap];
            j -= gap;
        }
        arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
}`;
    return (
        <>
            <h1 className="titleSection">Shell Sort</h1>
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
                        alt="Shell Sort Average Case"
                        src={gifShellSort}></img>
                    <div className="casosAlgoritmo">
                        <h2>Representacion temporal</h2>
                        <ul>
                            <li>
                                Mejor caso: <span>O(n log n)</span>
                            </li>
                            <li>
                                Peor caso: Peor caso:
                                <span>
                                    O(n<sup>1.25</sup>) y O(n<sup>1.5</sup>)
                                </span>
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

export default ShellSort;
