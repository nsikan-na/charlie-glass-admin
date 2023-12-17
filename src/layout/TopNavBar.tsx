import { Layout } from "antd";
import { Link } from "react-router-dom";
import { ERoute } from "../routing/helpers";
const { Header } = Layout;

const TopNavBar = () => {
  return (
    <Header className="text-white">
      <div className="flex justify-between">
        <Link to={ERoute.INVOICE}>
          <div className="mr-4 mt-3 text-2xl font-bold cursor-pointer">
            Charlie Glass Admin
          </div>
        </Link>
        <div>
          <span className="mr-4">Admin</span>
          <span className="cursor-pointer">Log Out</span>
        </div>
      </div>
    </Header>
  );
};

export default TopNavBar;
