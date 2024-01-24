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
    path: ERoute.ROOT,
    element: <Layout />,
    children: [
      {
        path: ERoute.ROOT,
        element: <Root />,
      },
      {
        path: ERoute.INVOICE,
        children: [{ path: ERoute.INVOICE, element: <Main /> }],
      },
    ],
  },
  {
    path: ERoute.LOGIN,
    element: <Login />,
  },
  { path: ERoute.ANY, element: <Root /> },
];

function Root() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    navigate(ERoute.INVOICE);
  }, [location]);

  return <></>;
}
