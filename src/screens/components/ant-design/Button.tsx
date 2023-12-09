import { Button as AntButton } from "antd";
import styled from "styled-components";

export enum EButtonTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

const Button = ({ buttonType, ...props }: any) => {
  switch (buttonType) {
    case EButtonTypes.PRIMARY: {
      return <PrimaryButton {...props} />;
    }
    case EButtonTypes.SECONDARY: {
      return <SecondaryButton {...props} />;
    }
    default: {
      return <PrimaryButton {...props} />;
    }
  }
};
export default Button;

const PrimaryButton = styled(AntButton)``;

const SecondaryButton = styled(AntButton)``;
