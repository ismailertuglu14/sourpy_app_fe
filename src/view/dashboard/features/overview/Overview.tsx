import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { formatDate } from "../../../../product/utils/format_date";

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

var options2 = {
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
const Overview: React.FC = () => {
  const [activeApi, setActiveApi] = useState<Array<string>>([]);
  useEffect(() => {}, []);
  return (
    <div className="flex flex-col">
      <div className="flex h-8 mb-12">
        {/* {Apis.map((api, index) => {
          const isActive = activeApi.includes(api.name);

          return (
            <ApiChip
              key={index}
              name={api.name}
              active={isActive}
              setActiveApi={setActiveApi}
            />
          );
        })} */}
      </div>
      <div className="flex ">
        <Chart
          options={options2}
          type="line"
          width={500}
          series={options2.series}
        />
      </div>
    </div>
  );
};

function generateDayWiseTimeSeries(baseval: any, count: any, yrange: any) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}
export default Overview;

