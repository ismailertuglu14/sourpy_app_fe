import React from "react";
import ActiveProductsCard from "./components/cards/ActiveProductsCard";
import ChartWidget1 from "./components/charts/ChartWidget1";
const Overview: React.FC = () => {
  return (
    <div className="flex flex-col">
      <ActiveProductsCard />
      <ChartWidget1 />
    </div>
  );
};

export default Overview;
