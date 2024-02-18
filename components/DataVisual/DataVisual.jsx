"use client";

import { useRef } from "react";
import { saveAs } from "file-saver";
import BarChart from "./BarChart";

const DataVisual = () => {
    const chartRef = useRef();

    const handleExportData = (ref) => {
        const chartData = ref.current?.data;
        if (chartData) {
            const csvData = convertChartDataToCSV(chartData);
            const blob = new Blob([csvData], {
                type: "text/csv;charset=utf-8",
            });
            saveAs(blob, "chart-data.csv");
        }
    };

    return (
        <div className="">
            <div className="px-3 py-2">
                <h1 className="text-2xl">Data Visualization</h1>
            </div>
            <div className="">
                <div className="flex justify-center items-center flex-wrap gap-5 px-5 my-5">
                    <BarChart
                        chartRef={chartRef}
                        handleExportData={handleExportData}
                    />
                </div>
            </div>
        </div>
    );
};

const convertChartDataToCSV = (chartData) => {
    const { labels, datasets } = chartData;
    const header = ["Label", ...datasets.map((dataset) => dataset.label)];
    const rows = labels.map((label, index) => {
        const values = datasets.map((dataset) => dataset.data[index]);
        return [label, ...values];
    });
    const csvArray = [header, ...rows];
    return csvArray.map((row) => row.join(",")).join("\n");
};

export default DataVisual;
