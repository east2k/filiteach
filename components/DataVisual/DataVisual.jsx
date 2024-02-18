"use client"

import { useEffect, useRef } from "react";
import { saveAs } from "file-saver";
import UsersBar from "./UsersBar";
import MaterialsBar from "./MaterialsBar";

const DataVisual = () => {
    const userBarRef = useRef();
    const materialsBarRef = useRef();

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

    useEffect(() => {
        if (userBarRef.current && userBarRef.current.chart) {
            userBarRef.current.chart.controller.plugins
                .getAll()
                .forEach((plugin) => {
                    if (plugin.id === "legend") {
                        plugin.options.display = false;
                    }
                });
        }
    }, []);

    useEffect(() => {
        if (materialsBarRef.current && materialsBarRef.current.chart) {
            materialsBarRef.current.chart.controller.plugins
                .getAll()
                .forEach((plugin) => {
                    if (plugin.id === "legend") {
                        plugin.options.display = false;
                    }
                });
        }
    }, []);

    return (
        <div className="">
            <div className="px-3 py-2">
                <h1 className="text-2xl">Data Visualization</h1>
            </div>
            <div className="">
                <div className="flex justify-center items-center flex-wrap gap-5 px-5 my-5">
                    <div className="w-2/5 border border-mantis-500 p-2">
                        <UsersBar userBarRef={userBarRef} />
                        <button
                            onClick={() => handleExportData(userBarRef)}
                            className="float-right px-3 py-1 bg-mantis-500 text-white"
                        >
                            Export
                        </button>
                    </div>
                    <div className="w-2/5 border border-mantis-500 p-2">
                        <MaterialsBar materialsBarRef={materialsBarRef} />
                        <button
                            onClick={() => handleExportData(materialsBarRef)}
                            className="float-right px-3 py-1 bg-mantis-500 text-white"
                        >
                            Export
                        </button>
                    </div>
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