import ApexCharts from "apexcharts";
import React, { useEffect, useRef } from "react";
import ReactApexChart from "react-apexcharts";

const PolarAreaChart = () => {
  return (
    <div className="relative w-1/3 min-h-[200px] h-[350px] border-[1px] p-3 mx-4 rounded-2xl transition-all duration-700 bg-white">
      <ReactApexChart
        options={options}
        series={options.series}
        type="polarArea"
      />
    </div>
  );
};

export default PolarAreaChart;

var options = {
  series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
  options: {
    chart: {
      type: "polarArea",
    },
    stroke: {
      colors: ["#fff"],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
};
