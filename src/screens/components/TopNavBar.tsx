import { Layout } from "antd";
import styled from "styled-components";

const { Header } = Layout;

const TopNavBar = () => {
  return (
    <StyledHeader>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <LogoStyled>Charlie Glass Admin</LogoStyled>
        <div>
          <UserNameStyled>Admin</UserNameStyled>
          <LogoutStyled>Log Out</LogoutStyled>
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
