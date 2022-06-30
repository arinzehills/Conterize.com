import React from "react";
import { Line } from "react-chartjs-2";

const CreatorsEarning = () => {
  const chartOptions = {
    responsive: true,
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
        backgroundColor: "#ff724a",
      },
    },
  };
  const revenueByMonths = {
    labels: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
    ],
    data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350],
  };
  const chartData = {
    labels: revenueByMonths.labels,
    datasets: [
      {
        label: "Revenue",
        data: revenueByMonths.data,
        borderColor: "#fff",
        tension: 0.5,
      },
    ],
  };

  return (
    <>
      <div
        className="admin_revenue"
        style={{ width: window.innerWidth > 960 ? 200 : "90%" }}
      >
        <h2>REVENUE</h2>
        <h1>$3293</h1>
        <Line options={chartOptions} data={chartData} />
      </div>
    </>
  );
};

export default CreatorsEarning;
