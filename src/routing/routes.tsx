import Login from "../screens/Login/LogIn";
import Layout from "../screens/components/ant-design/Layout";
import Invoice from "../screens/invoice/Invoice";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Invoice />,
      },
      // {
      //   path: "/dynamic-table",
      //   element: <DynamicTable />,
      // },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];
