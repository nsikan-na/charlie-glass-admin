import { Avatar, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context, userInitialState } from '../context';
import setLocalStorage from '../hooks/localstorage/setLocalStorage';
import ELocalStorage from '../util/enums/localStorage';
import { ERoute } from '../util/enums/routes';
import { EColors } from '../util/enums/colors';
import { UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const TopNavBar = () => {
  const { user }: any = useContext(Context);
  const navigate = useNavigate();

  return (
    <Header
      className="bg-white "
      style={{
        borderBottom: `.1rem solid ${EColors.gray_4}`,
        borderTop: `.5rem solid ${EColors.primary}`
      }}
    >
      <div className="flex justify-between">
        <div
          onClick={() => navigate(ERoute.ROOT)}
          className="mr-4 mt-3 text-2xl font-bold cursor-pointer"
        >
          Charlie Glass Admin
        </div>
        <div>
          <span className="mr-4">
            <Avatar
              size="small"
              className="mr-1 self-center"
              style={{ backgroundColor: EColors.primary }}
              icon={<UserOutlined style={{ color: EColors.white }} />}
            />
            {`${user.userName}`}
          </span>
          <span
            className="cursor-pointer"
            onClick={() => {
              setLocalStorage(ELocalStorage.USER, userInitialState);
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
