import React, { useEffect, useState } from "react";
import { formatDate } from "../../../../product/utils/format_date";
import BarChart from "./components/charts/BarChart";
import PolarAreaChart from "./components/charts/PolarAreaChart";
import SynchronizedChart from "./components/charts/SynchronizedChart";

const Overview: React.FC = () => {
  useEffect(() => {}, []);
  return (
    <div className="flex flex-col">
      <div className="flex h-8 mb-12"></div>
      <div className="flex ">
        <PolarAreaChart />
        <SynchronizedChart />
      </div>
    </div>
  );
};

export default Overview;
