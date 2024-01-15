import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { ERoute } from "../routing/helpers";
import { useContext } from "react";
import { Context } from "../context";
const { Header } = Layout;

const TopNavBar = () => {
  const { user } = useContext(Context);
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
          <span className="mr-4">{`${user.userName}`}</span>
          <span
            className="cursor-pointer"
            onClick={() => {
              navigate(ERoute.LOGIN);
            }}
          >
            Log Out
          </span>
        </div>
      </div>
    </Header>
  );
};

export default TopNavBar;
