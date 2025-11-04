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
