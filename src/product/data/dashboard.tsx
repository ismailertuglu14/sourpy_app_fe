import Login from "../../view/authentication/login";
import Register from "../../view/authentication/register";
import Overview from "../../view/overview";

export interface IDashboardItemModel {
  title: string;
  component?: any;
}

interface IDashboardItemModels extends Array<IDashboardItemModel> {}

export const dashboardItems: IDashboardItemModels = [
  { title: "Overview", component: <Overview /> },
  { title: "Orders", component: <Login /> },
  { title: "Inovices", component: <Register /> },
  { title: "Reports", component: <Register /> },
];
