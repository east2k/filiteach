"use client";
import { useRef, useState } from "react";
import { saveAs } from "file-saver";
import BarChart from "./BarChart";

const DataVisual = ({ totalStudents, totalTeachers, allCourses }) => {
    const usersRef = useRef();
    const materialsRef = useRef();
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("2024");

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

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

    const categorizeByMonth = (materials) => {
        const categorized = {
            January: 0,
            February: 0,
            March: 0,
            April: 0,
            May: 0,
            June: 0,
            July: 0,
            August: 0,
            September: 0,
            October: 0,
            November: 0,
            December: 0,
        };
        materials.forEach((material) => {
            const month = material.upload_date.split(" ")[0];
            categorized[month]++;
        });
        return categorized;
    };

    const categorizedMaterials = categorizeByMonth(allCourses);

    const uniqueSubjects = Array.from(
        new Set(
            allCourses.map(
                (course) =>
                    course.subject.charAt(0).toUpperCase() +
                    course.subject.slice(1)
            )
        )
    );

    const materialsBarContent = {
        title: "Learning Materials",
        dataset: uniqueSubjects.map((subject) => {
            let backgroundColor = "";
            switch (subject.toLowerCase()) {
                case "english":
                    backgroundColor = "rgb(115, 200, 236)";
                    break;
                case "filipino":
                    backgroundColor = "rgb(204, 153, 102)";
                    break;
                case "math":
                    backgroundColor = "rgb(236, 115, 117)";
                    break;
                case "science":
                    backgroundColor = "rgb(225, 236, 115)";
                    break;
                default:
                    backgroundColor = "rgb(115, 200, 236)";
                    break;
            }

            return {
                label: subject,
                data: allCourses
                    .filter(
                        (course) =>
                            course.subject.toLowerCase() ===
                            subject.toLowerCase()
                    )
                    .map((course) => course.upload_date.split(" ")[0])
                    .reduce((countMap, item) => {
                        countMap[item] = (countMap[item] || 0) + 1;
                        return countMap;
                    }, {}),
                backgroundColor: backgroundColor,
            };
        }),
        labels: Object.keys(categorizedMaterials),
    };

    const usersBarContent = {
        title: "Users",
        dataset: [
            {
                label: "Students",
                data: [totalStudents, totalStudents + 5],
                backgroundColor: "rgb(236 115 117)",
            },
            {
                label: "Teachers",
                data: [totalTeachers],
                backgroundColor: "rgb(115 200 236)",
            },
        ],
        labels: [""],
    };
    const filteredMaterialsBarContent = {
        title: `Learning Materials (${selectedMonth || "All"})`,
        dataset: materialsBarContent.dataset.map((subjectData) => {
            const data = selectedMonth
                ? { [selectedMonth]: subjectData.data[selectedMonth] || 0 }
                : subjectData.data;
            return {
                ...subjectData,
                data: data,
            };
        }),
        labels: selectedMonth
            ? [selectedMonth]
            : Object.keys(categorizedMaterials),
    };
    const handleExportMaterialsData = () => {
        const chartData = materialsRef.current?.data;
        if (chartData) {
            const csvData = convertMaterialsDataToCSV(chartData);
            const blob = new Blob([csvData], {
                type: "text/csv;charset=utf-8",
            });
            saveAs(blob, "materials-data.csv");
        }
    };

    const convertMaterialsDataToCSV = (chartData) => {
        const { labels, datasets } = chartData;
        const header = ["Month", ...datasets.map((dataset) => dataset.label)];
        const rows = labels.map((label, index) => {
            const values = datasets.map((dataset) => dataset.data[label]);
            return [label, ...values];
        });
        const csvArray = [header, ...rows];
        return csvArray.map((row) => row.join(",")).join("\n");
    };

    return (
        <div className="">
            <div className="px-3 py-2">
                <h1 className="text-2xl">Reports</h1>
            </div>

            <div className="">
                <div className="flex flex-col justify-center items-center gap-5 px-5 my-5">
                    <BarChart
                        total={totalStudents + totalTeachers}
                        barContent={usersBarContent}
                        chartRef={usersRef}
                        handleExportData={handleExportData}
                        height={150}
                    />
                    <div className="flex flex-row px-5 gap-2">
                        <select
                            value={selectedMonth}
                            onChange={handleMonthChange}
                            className="px-3 py-2 border border-gray-300 rounded-md"
                        >
                            <option value="">All</option>
                            {Object.keys(categorizedMaterials).map((month) => (
                                <option key={month} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>
                        <select
                            value={selectedYear}
                            onChange={handleYearChange}
                            className="px-3 py-2 border border-gray-300 rounded-md"
                        >
                            <option value="" disabled={true}>
                                Year
                            </option>
                            <option value="2023">2024</option>
                        </select>
                    </div>
                    <BarChart
                        total={allCourses.length}
                        barContent={filteredMaterialsBarContent}
                        chartRef={materialsRef}
                        handleExportData={handleExportMaterialsData}
                        height={200}
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
