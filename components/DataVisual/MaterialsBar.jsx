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

const MaterialsBar = ({materialsBarRef}) => {
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
        <div className="flex flex-col my-3 w-full bg-white">
            <Bar ref={materialsBarRef} options={options} data={data} />
        </div>
    );
};

export default MaterialsBar;
