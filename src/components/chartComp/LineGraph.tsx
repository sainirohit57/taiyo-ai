import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import { Spinner } from "flowbite-react";
import fetchLineGraphData from "../fetcher/LineGraphData";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {}

const LineGraph = (props: Props) => {
  const { isError, isLoading, data } = useQuery(["data"], fetchLineGraphData);

  if (isLoading) {
    return (
      <Spinner
        aria-label="Loading"
        className="w-full h-20 flex justify-center"
      />
    );
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const { cases, deaths, recovered } = data;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Cases Fluctuations",
        font: { size: 20 },
      },
      scales: {
        x: {
          grid: { display: false },
          title: {
            display: true,
            text: "Date",
            font: { size: 16 },
          },
        },
        y: {
          grid: { display: false },
        },
      },
    },
  };

  const graphData = {
    labels: Object.keys(cases),
    datasets: [
      {
        label: "Cases",
        data: Object.values(cases),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Deaths",
        data: Object.values(deaths),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Recovered",
        data: Object.values(recovered),
        borderColor: "rgb(53, 235, 102)",
        backgroundColor: "rgba(53, 235, 80, 0.61)",
      },
    ],
  };

  return (
    <div className="h-full w-full overflow-x-auto">
      <Line
        data={graphData}
        options={options}
        style={{
          width: "100%",
          height: "550px",
          minHeight: "400px",
          minWidth: "800px",
        }}
      />
    </div>
  );
};

export default LineGraph;
