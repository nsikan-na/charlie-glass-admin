import BarsOutlined from "@ant-design/icons/lib/icons/BarsOutlined";
import Button from "../components/ant-design/buttons/PrimaryButton";

export default function NavMobile() {
  return (
    <div>
      <div className="flex   gap-40 bg-white">
        <div className="my-3 ml-2">Charlie Glass Admin</div>
        <div className="my-3">
          <Button>
            <BarsOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
}
