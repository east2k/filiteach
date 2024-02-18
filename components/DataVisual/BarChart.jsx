import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chartRef, handleExportData }) => {
    const labels = ["First Semester"];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Total Number of Learning Materials",
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || "";
                        if (label) {
                            label += ": ";
                        }
                        if (context.parsed.y !== null) {
                            label +=
                                context.parsed.y +
                                " (" +
                                context.parsed.y * 5 +
                                "%)";
                        }
                        return label;
                    },
                },
            },
        },
    };
    const data = {
        labels,
        datasets: [
            {
                label: "Number of Learning Materials",
                data: [20],
                backgroundColor: "rgb(106 178 255)",
            },
            {
                label: "Number of Quizes",
                data: [7],
                backgroundColor: "rgb(255 106 106)",
            },
            {
                label: "Number of Videos",
                data: [13],
                backgroundColor: "rgb(255 106 106)",
            },
        ],
    };
    return (
        <div className="w-2/5 border border-mantis-500 p-2">
            <div className="flex flex-col my-3 w-full bg-white">
                <Bar ref={chartRef} options={options} data={data} />
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
