import BarsOutlined from "@ant-design/icons/lib/icons/BarsOutlined";
import Button from "../components/ant-design/buttons/PrimaryButton";

export default function NavMobile({ showDrawer }: any) {
  return (
    <div>
      <div className="flex   gap-40 bg-gray-300">
        <div className="my-3 ml-2">Charlie Glass Admin</div>
        <div className="my-3">
          <Button onClick={showDrawer}>
            <BarsOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
}
