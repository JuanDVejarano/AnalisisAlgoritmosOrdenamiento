import { Chart } from "react-chartjs-2";
import "./Graph.scss";
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

// Colores sustituyendo Utils.CHART_COLORS
const CHART_COLORS = {
    red: "rgb(255, 99, 132)",
    blue: "rgb(54, 162, 235)",
    green: "rgb(75, 192, 192)",
};

function Grafica({ data }: { data?: number[] }) {
    // reemplazar NaN por null para que Chart.js deje hueco

    const rawDatapoints = data ?? [];
    // reemplazar NaN por null para que Chart.js deje hueco
    const datapoints = rawDatapoints.map((v) => (Number.isNaN(v) ? null : v));

    // generar labels con la misma longitud que datapoints
    const labels = datapoints.map((_, i) => `P${i}`);

    const dataChart = {
        labels,
        datasets: [
            {
                label: "Grafica de tiempo",
                data: datapoints,
                borderColor: CHART_COLORS.blue,
                backgroundColor: CHART_COLORS.blue,
                fill: false,
                tension: 0.4,
            },
        ],
    };

    // Si no hay datos, puede dejar un dataset vacío (opcional)
    if (dataChart.datasets.length === 0) {
        dataChart.datasets.push({
            label: "Sin datos",
            data: [],
            borderColor: CHART_COLORS.red,
            backgroundColor: CHART_COLORS.red,
            fill: false,
        });
    }

    //Configuración de la gráfica
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
