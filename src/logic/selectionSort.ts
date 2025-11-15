// Algoritmo de selection sort (tiempo que tarde en organizar)
export function selectionSort(
    arr: number[],
    intervaloTomaDeTiempo: number
): { times: number[]; sorted: number[] } {
    const n = arr.length;
    const arrayTimes: number[] = [];
    // tomar el tiempo de inicio
    const startTime = performance.now();
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // Intercambiar el elemento mínimo con el primer elemento
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];

        // tomar el tiempo de fin
        if (
            intervaloTomaDeTiempo <= 0 ||
            i % intervaloTomaDeTiempo === 0 ||
            i === n - 1
        ) {
            const endTime = performance.now();
            arrayTimes.push(endTime - startTime);
            continue;
        }
    }
    return { times: arrayTimes, sorted: arr };
    // return arr
}

export default selectionSort;
