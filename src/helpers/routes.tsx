import Login from "../screens/LogIn";
import Layout from "../screens/components/Layout";
import DynamicTable from "../screens/dynamic-table/DynamicTable";
import ReportsDashboard from "../screens/reports/Reports/Reports";
import ReportsTable from "../screens/reports/Reports/ReportTable";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ReportsDashboard />,
      },
      {
        path: "/dynamic-table",
        element: <DynamicTable />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];
