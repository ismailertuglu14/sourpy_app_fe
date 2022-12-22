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
      <ReactApexChart options={options} series={series} type="line" />
    </div>
  );
};

export default SynchronizedChart;