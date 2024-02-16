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

const UsersBar = ({ userBarRef }) => {
    const labels = ["First Semester"];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Total Number of Users",
            },
        },
    };
    const data = {
        labels,
        datasets: [
            {
                label: "Number of Students",
                data: [5],
                backgroundColor: "rgb(106 178 255)",
            },
            {
                label: "Number of Teachers",
                data: [3],
                backgroundColor: "rgb(255 106 106)",
            },
        ],
    };
    return (
        <div className="flex flex-col my-3 w-full bg-white">
            <Bar ref={userBarRef} options={options} data={data} />
        </div>
    );
};

export default UsersBar;
