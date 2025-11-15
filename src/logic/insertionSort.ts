// Algoritmo de insertio sort (tiempo que tarde en organizar)
export function insertionSort(
    arr: number[],
    intervaloTomaDeTiempo: number
): { times: number[]; sorted: number[] } {
    const n = arr.length;
    const arrayTimes: number[] = [];
    // tomar el tiempo de inicio
    const startTime = performance.now();
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;

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

export default insertionSort;
