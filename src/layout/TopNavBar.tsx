import { Layout } from "antd";

const { Header } = Layout;

const TopNavBar = () => {
  return (
    <Header className="text-white">
      <div className="flex justify-between">
        <div className="mr-4 mt-3 text-2xl font-bold cursor-pointer">
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
