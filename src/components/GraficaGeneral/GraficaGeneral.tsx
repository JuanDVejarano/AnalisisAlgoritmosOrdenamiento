import { Chart } from "react-chartjs-2";
import "./GraficaGeneral.scss";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import type { ChartConfiguration } from "chart.js";
import type { Algoritmo } from "../../model/Algoritmo";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface GraficaProps {
    data?: Algoritmo[];
}

// Colores sustituyendo Utils.CHART_COLORS
const CHART_COLORS = {
    red: "rgb(255, 99, 132)",
    blue: "rgb(54, 162, 235)",
    green: "rgb(75, 192, 192)",
};

function Grafica({ data }: GraficaProps) {
    // reemplazar NaN por null para que Chart.js deje hueco
    console.log(data);
    const datapoints =
        data?.[0]?.arregloDeTiempos.map((v) => (Number.isNaN(v) ? null : v)) ??
        [];

    const datapointsInsertio =
        data?.[0]?.arregloDeTiempos.map((v) => (Number.isNaN(v) ? null : v)) ??
        [];

    const datapointsBurbuja =
        data?.[1]?.arregloDeTiempos.map((v) => (Number.isNaN(v) ? null : v)) ??
        [];

    // generar labels con la misma longitud que datapoints
    const labels = datapoints.map((_, i) => `P${i}`);

    const dataChart = {
        labels,
        datasets: [
            {
                label: data?.[0]?.nombreAlgoritmo ?? "Dataset 1",
                data: datapointsInsertio,
                borderColor: CHART_COLORS.red,
                backgroundColor: CHART_COLORS.red,
                fill: false,
                cubicInterpolationMode: "monotone" as const,
                tension: 0.4,
            },
            {
                label: data?.[1]?.nombreAlgoritmo ?? "Dataset 2",
                data: datapointsBurbuja,
                borderColor: CHART_COLORS.blue,
                backgroundColor: CHART_COLORS.blue,
                fill: false,
                tension: 0.4,
            },
            {
                label: "Linear interpolation (default)",
                data: datapoints,
                borderColor: CHART_COLORS.green,
                backgroundColor: CHART_COLORS.green,
                fill: false,
            },
        ],
    };

    const config: ChartConfiguration<"line", (number | null)[], unknown> = {
        type: "line",
        data: dataChart,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: "Chart.js Line Chart - Cubic interpolation mode",
                },
                legend: { position: "top" as const },
                tooltip: { enabled: true },
            },
            interaction: {
                intersect: false,
            },
            scales: {
                x: {
                    display: true,
                    title: { display: true, text: "Intervalo de datos" },
                },
                y: {
                    display: true,
                    title: { display: true, text: "Tiempo" },
                    suggestedMin: 0,
                    //suggestedMax: 200,
                },
            },
        },
    };

    return (
        <div className="boxGraph">
            <Chart {...config} />
        </div>
    );
}

export default Grafica;
