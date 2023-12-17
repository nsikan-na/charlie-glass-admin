import { Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { ERoute } from "../routing/helpers";
const { Header } = Layout;

const TopNavBar = () => {
  const navigate = useNavigate();

  return (
    <Header className="text-white">
      <div className="flex justify-between">
        <div
          onClick={() => navigate(ERoute.ROOT)}
          className="mr-4 mt-3 text-2xl font-bold cursor-pointer"
        >
          Charlie Glass Admin
        </div>
        <div>
          <span className="mr-4">Admin</span>
          <span className="cursor-pointer">Log Out</span>
        </div>
      </div>
    </Header>
  );
};

export default TopNavBar;
