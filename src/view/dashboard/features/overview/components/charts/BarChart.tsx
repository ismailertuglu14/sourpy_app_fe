import ApexCharts from "apexcharts";
import React, { useEffect, useRef } from "react";

const BarChart = () => {
  useEffect(() => {
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    console.log("calisti");
    if (chart) {
      chart.render();
    }
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div className=" w-[500px] h-[350px] border-[1px] p-3 rounded-2xl transition-all duration-50 bg-white">
      <div id="chart" className="object-contain"></div>
    </div>
  );
};

export default BarChart;

var options = {
  chart: {
    type: "bar",
  },
  series: [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};
