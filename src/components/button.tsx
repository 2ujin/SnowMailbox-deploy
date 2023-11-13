import { MouseEventHandler } from "react";
import styled from "styled-components";

interface ButtonProps {
  name: string;
  onClick?: MouseEventHandler | any;
}

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9b559;
  color: #0d4939;
  padding: 15px;
  border-radius: 14px;
  cursor: pointer;
`;

const Button = ({ name, onClick }: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{name}</ButtonWrapper>;
};

export default Button;
