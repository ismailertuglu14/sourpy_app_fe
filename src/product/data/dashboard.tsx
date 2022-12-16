import Login from "../../view/authentication/login";
import Register from "../../view/authentication/register";
import Overview from "../../view/overview";
import Products from "../../view/product";
import SvgInvoice from "../icons/Invoice";
import SvgPieChart from "../icons/PieChart";
import SvgShop from "../icons/Shop";

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
    title: "Products",
    icon: <SvgShop className="w-8 h-5" />,
    component: <Products />,
  },
  {
    title: "Inovices",
    icon: <SvgInvoice className="w-8 h-5" />,
    component: <Register />,
  },
  {
    title: "Reports",
    icon: <SvgPieChart className="w-8 h-5" />,
    component: <Register />,
  },
];
