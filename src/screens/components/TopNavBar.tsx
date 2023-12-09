import { Layout } from "antd";
import { useContext } from "react";
import { Context } from "../../context";
import styled from "styled-components";

const { Header } = Layout;

const TopNavBar = () => {
  const { user, setUser } = useContext(Context);

  const handleLogoutClicked = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <StyledHeader>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <LogoStyled>Das Light</LogoStyled>
        <div>
          <UserNameStyled>{user?.userName}</UserNameStyled>
          <LogoutStyled onClick={handleLogoutClicked}>Log Out</LogoutStyled>
        </div>
      </div>
    </StyledHeader>
  );
};

export default TopNavBar;

const StyledHeader = styled(Header)`
  color: white;
`;
const LogoStyled = styled.div`
  margin: 0 1rem 0 0;
  font-size: 2rem;
  font-weight: bold;
`;
const UserNameStyled = styled.span`
  margin: 0 1rem 0 0;
`;
const LogoutStyled = styled.span`
  cursor: pointer;
`;
