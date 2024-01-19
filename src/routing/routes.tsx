import Invoice from "../screens/invoice/Invoice";
import Layout from "../layout/Layout";
import CreateNewInvoice from "../screens/create-new-invoice/CreateNewInvoice";

import Login from "../screens/login/LogIn";
import { RouteObject } from "react-router";
import { ERoute } from "./helpers";
import Main from "../screens/invoice/Main";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
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

function Root() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate(ERoute.INVOICE);
  }, [location]);

  return <></>;
}
