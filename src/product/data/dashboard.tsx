import Login from "../../view/authentication/login";
import Register from "../../view/authentication/register";
import Overview from "../../view/overview";
import SvgPieChart from "../icons/PieChart";

export interface IDashboardItemModel {
  title: string;
  icon: JSX.Element;
  component?: any;
}

interface IDashboardItemModels extends Array<IDashboardItemModel> {}

export const dashboardItems: IDashboardItemModels = [
  {
    title: "Overview",
    icon: <SvgPieChart className="w-8 h-5" />,
    component: <Overview />,
  },
  {
    title: "Orders",
    icon: <SvgPieChart className="w-8 h-5" />,
    component: <Login />,
  },
  {
    title: "Inovices",
    icon: <SvgPieChart className="w-8 h-5" />,
    component: <Register />,
  },
  {
    title: "Reports",
    icon: <SvgPieChart className="w-8 h-5" />,
    component: <Register />,
  },
];
