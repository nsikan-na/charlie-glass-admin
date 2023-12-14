import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { ERoute } from "../routing/helpers";

const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    navigate(ERoute.INVOICE);
  }, [location]);

  return null;
};

export default Root;
