// Algoritmo de counting sort (tiempo que tarde en organizar)
export function countingSort(
    arr: number[],
    intervaloTomaDeTiempo: number
): { times: number[]; sorted: number[] } {
    const n = arr.length;
    const arrayTimes: number[] = [];
    // tomar el tiempo de inicio
    const startTime = performance.now();

    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min + 1;
    const count = new Array(range).fill(0);
    const output = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        count[arr[i] - min]++;
    }

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;

        // tomar el tiempo de fin
        if (
            intervaloTomaDeTiempo <= 0 ||
            (n - 1 - i) % intervaloTomaDeTiempo === 0 ||
            i === 0
        ) {
            const endTime = performance.now();
            arrayTimes.push(endTime - startTime);
            continue;
        }
    }

    // Copiar el arreglo ordenado de vuelta a arr
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }

    return { times: arrayTimes, sorted: arr };
    // return arr
}

export default countingSort;
