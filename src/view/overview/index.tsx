import React, { useState } from "react";
import ActiveProductsCard from "./components/cards/ActiveProductsCard";
import ChartWidget1 from "./components/charts/ChartWidget1";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

type ApiChipProps = {
  name: string;
  active: boolean;
  setActiveApi: any;
};
const Apis: Array<ApiChipProps> = [
  { name: "Trendyol", active: true, setActiveApi: () => {} },
  { name: "Hepsiburada", active: false, setActiveApi: () => {} },
  { name: "Amazon", active: false, setActiveApi: () => {} },
];
const ApiChip = ({ name, active, setActiveApi }: ApiChipProps) => {
  return (
    <div
      className={`flex justify-center items-center w-32 mx-2 rounded-2xl border border-gray-300 ${
        active ? " bg-gray-300 " : " "
      } cursor-pointer`}
      onClick={() => {
        setActiveApi((prev: Array<string>) => {
          if (prev.includes(name)) {
            return prev.filter((item: string) => item !== name);
          }
          return [...prev, name];
        });
      }}
    >
      {active ? "✓ " : ""}
      {name}
    </div>
  );
};

const Overview: React.FC = () => {
  const [activeApi, setActiveApi] = useState<Array<string>>([]);

  return (
    <div className="flex flex-col">
      <div className="flex h-8 mb-12">
        {Apis.map((api, index) => {
          const isActive = activeApi.includes(api.name);

          return (
            <ApiChip
              key={index}
              name={api.name}
              active={isActive}
              setActiveApi={setActiveApi}
            />
          );
        })}
      </div>

      <LineChart
        width={800}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
      </LineChart>
      <LineChart
        width={800}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />

        {/*
          TimeLine Tool
         <Brush /> 
         */}
      </LineChart>
      {/* <ActiveProductsCard />
      <ChartWidget1 /> */}
    </div>
  );
};
const data = [
  {
    name: "Page A",
    price: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    price: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    price: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    price: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    price: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    price: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    price: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default Overview;
