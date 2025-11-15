// Algoritmo de burbuja sort (tiempo que tarde en organizar)
export function bubbleSort(
    arr: number[],
    intervaloTomaDeTiempo: number
): { times: number[]; sorted: number[] } {
    const n = arr.length;
    const arrayTimes: number[] = [];
    // tomar el tiempo de inicio
    const startTime = performance.now();
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // intercambiar arr[j] y arr[j+1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }

        // tomar el tiempo de fin
        if (
            intervaloTomaDeTiempo <= 0 ||
            i % intervaloTomaDeTiempo === 0 ||
            i === n - 2
        ) {
            const endTime = performance.now();
            arrayTimes.push(endTime - startTime);
            continue;
        }
    }
    return { times: arrayTimes, sorted: arr };
    // return arr
}

export default bubbleSort;
