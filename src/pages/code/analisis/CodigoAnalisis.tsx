// ...existing code...
import React, { useState } from "react";
import Grafica from "../../../components/GraficaIndividual/Graph";
import Editor from "@monaco-editor/react";
import "./CodigoAnalisis.scss";

function CodigoAnalisis() {
    const [tiempos, setTiempos] = useState<number[]>([]);
    const [code, setCode] = useState<string>(`// escribe aquí tu función
function bucles() {
  for (let i = 0; i < 400; i++) {
    for (let j = 0; j < 400; j++) {
      console.log("Hola Mundo");
      contexto.tomarTiempo(10000);
    }
  }
}
bucles();`);

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

    const contexto = { tomarTiempo, console };

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTiempos([]);
        inicio = performance.now();
        try {
            const ejecutar = new Function("contexto", code);
            ejecutar(contexto);
        } catch (e) {
            console.error("❌ Error al ejecutar el código:", e);
            //alerta en navegador
            alert(
                "❌ Error al ejecutar el código. Revisa la consola del navegador para más detalles."
            );
        }
    }

    return (
        <>
            <h1 className="titleSection">Análisis de Sintaxis</h1>
            <section className="contenSection">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="inputCode">
                        Ingrese el código a analizar:
                    </label>
                    <br /> <br />
                    <div className="tooltip">
                        Ayuda
                        <span className="tooltiptext">
                            <ul>
                                <li>Use codigo JavaScript</li>
                                <li>
                                    Use la función
                                    contexto.tomarTiempo(repeticiones) para
                                    medir el tiempo de ejecución.
                                </li>
                                <li>
                                    El parámetro 'repeticiones' indica cuántas
                                    veces se llamará antes de registrar el
                                    tiempo.
                                </li>
                                <li>
                                    Ejemplos:
                                    <ul>
                                        <li>
                                            contexto.tomarTiempo(): mide cada
                                            ejecución.
                                        </li>
                                        <li>
                                            contexto.tomarTiempo(100): mide cada
                                            100 ejecuciones.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </span>
                    </div>
                    <div className="editorContainerMain">
                        <Editor
                            height="100%"
                            defaultLanguage="javascript"
                            value={code}
                            onChange={(v) => setCode(v ?? "")}
                            theme="vs-dark"
                            options={{
                                automaticLayout: true,
                                minimap: { enabled: false },
                                fontSize: 13,
                            }}
                        />
                    </div>
                    <button type="submit">Analizar</button>
                </form>
                <Grafica data={tiempos} />
            </section>
        </>
    );
}

export default CodigoAnalisis;
// ...existing code...
