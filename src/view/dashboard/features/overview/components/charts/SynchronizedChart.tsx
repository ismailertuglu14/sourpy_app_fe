import ApexCharts from "apexcharts";
import React, { useEffect, useRef } from "react";
import ReactApexChart from "react-apexcharts";
import { formatDate } from "../../../../../../product/utils/format_date";

const SynchronizedChart = () => {
  return (
    <div className="relative w-1/2 h-[350px] object-contain border-[1px] p-3 rounded-2xl transition-all duration-50 bg-white ">
      <ReactApexChart options={options} series={options.series} type="line" />
    </div>
  );
};

export default SynchronizedChart;

var options = {
  relative: true,
  series: [
    {
      name: "Amazon",
      data: [
        {
          x: formatDate(new Date(2027, 6, 21)),
          y: 31,
        },
        {
          x: formatDate(new Date(2027, 6, 22)),
          y: 50,
        },
        {
          x: formatDate(new Date(2027, 6, 23)),
          y: 31,
        },
        {
          x: formatDate(new Date(2027, 6, 24)),
          y: 50,
        },
      ],
    },
    {
      name: "Hepsiburada",
      data: [
        {
          x: formatDate(new Date(2027, 6, 21)),
          y: 20,
        },
        {
          x: formatDate(new Date(2027, 6, 22)),
          y: 10,
        },
        {
          x: formatDate(new Date(2027, 6, 23)),
          y: 20,
        },
        {
          x: formatDate(new Date(2027, 6, 24)),
          y: 10,
        },
      ],
    },
    {
      name: "Amazon",
      data: [
        {
          x: formatDate(new Date(2027, 6, 21)),
          y: 31,
        },
        {
          x: formatDate(new Date(2027, 6, 22)),
          y: 100,
        },
        {
          x: formatDate(new Date(2027, 6, 23)),
          y: 31,
        },
        {
          x: formatDate(new Date(2027, 6, 24)),
          y: 100,
        },
      ],
    },
  ],
};
