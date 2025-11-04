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
    dataInsertionSort?: number[];
}

// Colores sustituyendo Utils.CHART_COLORS
const CHART_COLORS = {
    red: "rgb(255, 99, 132)",
    blue: "rgb(54, 162, 235)",
    green: "rgb(75, 192, 192)",
};

// Datos "quemados"
const rawDatapoints = [
    0,
    20,
    20,
    60,
    60,
    120,
    NaN,
    180,
    120,
    125,
    105,
    110,
    170,
];

// Datos "quemados"
const rawDatapoints2 = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];

function Grafica({ dataInsertionSort }: GraficaProps) {
    // reemplazar NaN por null para que Chart.js deje hueco
    const datapoints =
        dataInsertionSort?.map((v) => (Number.isNaN(v) ? null : v)) ?? [];

    console.log("datapoints:", datapoints);

    // generar labels con la misma longitud que datapoints
    const labels = datapoints.map((_, i) => `P${i}`);

    const dataChart = {
        labels,
        datasets: [
            {
                label: "Cubic interpolation (monotone)",
                data: datapoints,
                borderColor: CHART_COLORS.red,
                backgroundColor: CHART_COLORS.red,
                fill: false,
                cubicInterpolationMode: "monotone" as const,
                tension: 0.4,
            },
            {
                label: "Cubic interpolation",
                data: datapoints,
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
                    title: { display: true, text: "Tiempo" },
                },
                y: {
                    display: true,
                    title: { display: true, text: "Intervalo de datos" },
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
