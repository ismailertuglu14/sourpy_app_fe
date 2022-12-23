import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getProductCodes } from "../../../../services/user_api_service";
import { IProduct } from "../../../../../../product/models/Api";

const SynchronizedChart = () => {
  const [data, setData] = useState([] as IProduct[]);

  useEffect(() => {
    getProductCodes().then((res) => {
      setData(res as any);
    });
  }, []);

  const series = [
    {
      name: "Trendyol", 
      data: [] as any
    }
  ];
  
  data.map((item) => {
    series[0].data.push(
      {
        x: item.productCode,
        y: item.pimCategoryId
      }
    );
  });

  const options = {
    relative: true,
    series: series
  };

  console.log(series);

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
