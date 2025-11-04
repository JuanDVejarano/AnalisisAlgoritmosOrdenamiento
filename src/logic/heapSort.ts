// Algoritmo de heapSort (tiempo que tarde en organizar)
export function heapSort(
    arr: number[],
    intervaloTomaDeTiempo: number
): number[] {
    const n = arr.length;
    const arrayTimes: number[] = [];
    const startTime = performance.now();

    function heapify(heapSize: number, rootIndex: number) {
        let largest = rootIndex;
        const left = 2 * rootIndex + 1;
        const right = 2 * rootIndex + 2;

        if (left < heapSize && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < heapSize && arr[right] > arr[largest]) {
            largest = right;
        }
        if (largest !== rootIndex) {
            const temp = arr[rootIndex];
            arr[rootIndex] = arr[largest];
            arr[largest] = temp;
            heapify(heapSize, largest);
        }
    }

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(n, i);

        if (
            intervaloTomaDeTiempo <= 0 ||
            i % intervaloTomaDeTiempo === 0 ||
            i === 0
        ) {
            const endTime = performance.now();
            arrayTimes.push(endTime - startTime);
        }
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        // move current root to end
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        heapify(i, 0);

        if (
            intervaloTomaDeTiempo <= 0 ||
            i % intervaloTomaDeTiempo === 0 ||
            i === 1
        ) {
            const endTime = performance.now();
            arrayTimes.push(endTime - startTime);
        }
    }

    return arrayTimes;
}

export default heapSort;
