// Algoritmo de shell sort (tiempo que tarde en organizar)
export function shellSort(
    arr: number[],
    intervaloTomaDeTiempo: number
): { times: number[]; sorted: number[] } {
    const n = arr.length;
    const arrayTimes: number[] = [];
    // tomar el tiempo de inicio
    const startTime = performance.now();

    // Comenzar con un gran intervalo, luego reducir el intervalo
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Hacer un gapped insertion sort para este intervalo
        for (let i = gap; i < n; i++) {
            const temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;

            // tomar el tiempo de fin
            if (
                intervaloTomaDeTiempo <= 0 ||
                i % intervaloTomaDeTiempo === 0 ||
                i === n - 1
            ) {
                const endTime = performance.now();
                arrayTimes.push(endTime - startTime);
            }
        }
    }

    return { times: arrayTimes, sorted: arr };
}

export default shellSort;
