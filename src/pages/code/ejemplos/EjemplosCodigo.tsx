import { Editor } from "@monaco-editor/react";
import "./EjemplosCodigo.scss";

function EjemplosCodigo() {
    let ArrayEjemplos: string[] = [
        `// Funcion con 2 bucles anidados
function bucles() {
  for (let i = 0; i < 400; i++) {
    for (let j = 0; j < 400; j++) {
      console.log("Hola Mundo");
      contexto.tomarTiempo(10000);
    }
  }
}
bucles();`,
        `// funcion con un bucle simple
function imprimirNumeros() {
  for (let i = 0; i < 100; i++) {
    console.log(i);
    contexto.tomarTiempo();
  }
}
imprimirNumeros();`,
        `// funcion con complejidad constante O(1)
function imprimirMensaje() {
  console.log("Este es un mensaje constante.");
  contexto.tomarTiempo();
}
imprimirMensaje();`,
        `// funcion para verificar si un numero es primo
function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
    contexto.tomarTiempo();
  }
  return true;
}
console.log(esPrimo(7777)); // Output: true`,
        `// funcion recursiva para calcular factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    contexto.tomarTiempo(100);
    return 1;
  }
  contexto.tomarTiempo(100);
  return n * factorial(n - 1);
}
console.log(factorial(5000));`,
        `// funcion recursiva para calcular fibonacci
function fibonacci(n) {
  if (n <= 1) {
    contexto.tomarTiempo(100000);
    return n;
  }
  contexto.tomarTiempo(100000);
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(30));`,
    ];

    return (
        <div>
            <h1 className="titleSection">Ejemplos de codigo</h1>
            <section className="contenSection">
                <div className="editorContainerExamples">
                    {ArrayEjemplos.map((codigo, index) => (
                        <div className="editorContainer">
                            <Editor
                                key={index}
                                height="200px"
                                defaultLanguage="javascript"
                                value={codigo}
                                theme="vs-dark"
                                options={{
                                    readOnly: true,
                                    automaticLayout: true,
                                    minimap: { enabled: false },
                                    fontSize: 13,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default EjemplosCodigo;
