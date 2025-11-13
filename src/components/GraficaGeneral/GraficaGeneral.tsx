import { Chart } from "react-chartjs-2";
import "./GraficaGeneral.scss";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LineController,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import type { ChartConfiguration } from "chart.js";
import type { Algoritmo } from "../../model/Algoritmo";

ChartJS.register(
    LineController,
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
const CHART_COLORS: { [key: string]: string } = {
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

    const series: (number | null)[][] =
        (data ?? []).map((alg) =>
            (alg.arregloDeTiempos ?? []).map((v) =>
                Number.isNaN(v) ? null : v
            )
        ) ?? [];

    // generar labels con la misma longitud que datapoints
    const labels = datapoints.map((_, i) => `P${i}`);

    const dataChart = {
        labels,
        datasets: [] as {
            label: string;
            data: (number | null)[];
            borderColor: string;
            backgroundColor: string;
            fill: boolean;
            cubicInterpolationMode?: "monotone";
            tension?: number;
        }[],
    } as ChartConfiguration<"line", (number | null)[], unknown>["data"];

    for (let i = 0; i < series.length; i++) {
        const colorKey =
            Object.keys(CHART_COLORS)[i % Object.keys(CHART_COLORS).length];
        dataChart.datasets.push({
            label: data?.[i]?.nombreAlgoritmo ?? `Dataset ${i + 1}`,
            data: series[i],
            borderColor: CHART_COLORS[colorKey],
            backgroundColor: CHART_COLORS[colorKey],
            fill: false,
            cubicInterpolationMode: "monotone" as const,
            tension: 0.4,
        });
    }

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

    console.log("Modificado", dataChart);

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
