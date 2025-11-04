export interface Algoritmo {
    nombreAlgoritmo: string;
    arregloInicial: number[];
    arregloOrdenado: number[];
    arregloDeTeimpos: number[]; // según solicitado (nota: "Teimpos" contiene un posible error ortográfico)
}

export const createAlgoritmo = (
    nombreAlgoritmo: string,
    arregloInicial: number[],
    arregloOrdenado?: number[],
    arregloDeTeimpos?: number[]
): Algoritmo => ({
    nombreAlgoritmo,
    arregloInicial: [...arregloInicial],
    arregloOrdenado: arregloOrdenado
        ? [...arregloOrdenado]
        : [...arregloInicial].sort((a, b) => a - b),
    arregloDeTeimpos: arregloDeTeimpos ?? [],
});

//ejemplo de uso
// const miAlgoritmo = createAlgoritmo("Insertion Sort", [5, 3, 8, 1], [1, 3, 5, 8], [10, 20, 30]);
