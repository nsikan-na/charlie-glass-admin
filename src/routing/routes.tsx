import Invoice from "../screens/invoice/Invoice";
import Layout from "../layout/Layout";
import CreateNewInvoice from "../screens/create-new-invoice/CreateNewInvoice";

import Login from "../screens/login/LogIn";
import { RouteObject } from "react-router";
import Root from "../layout/Root";
import { ERoute } from "./helpers";
import Dashboard from "../screens/dashboard/Dashboard";
import Main from "../screens/invoice/Main";

export const routes: RouteObject[] = [
  {
    path: ERoute.ROOT,
    element: <Layout />,
    children: [
      {
        path: ERoute.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: ERoute.ROOT,
        element: <Root />,
      },

      {
        path: ERoute.INVOICE,
        children: [
          { path: ERoute.INVOICE, element: <Main /> },
          {
            path: ERoute.CREATE_INVOICE,
            element: <CreateNewInvoice />,
          },
        ],
      },
    ],
  },

  {
    path: ERoute.LOGIN,
    element: <Login />,
  },
];
