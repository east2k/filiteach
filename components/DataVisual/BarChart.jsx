import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const BarChart = ({ barContent, chartRef, handleExportData, total, height }) => {
    const labels = barContent.labels;

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: barContent.title,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || "";
                        if (label) {
                            label += ": ";
                        }
                        if (context.parsed.y !== null) {
                            const percentage = (context.parsed.y / total) * 100;
                            label += `${context.parsed.y} (${percentage.toFixed(
                                2
                            )}%)`;
                        }
                        return label;
                    },
                },
            },
        },
    
    };
    const data = {
        labels,
        datasets: barContent.dataset,
    };
    return (
        <div className="w-4/5 border border-mantis-500 p-2">
            <div className="flex flex-col my-3 w-full bg-white">
                Total: {total}
                <Bar ref={chartRef} options={options} data={data} height={height}/>
            </div>
            <button
                onClick={() => handleExportData(chartRef)}
                className="float-right px-3 py-1 bg-mantis-500 text-white"
            >
                Export
            </button>
        </div>
    );
};

export default BarChart;
