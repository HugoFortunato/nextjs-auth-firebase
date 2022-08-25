import React from "react";
import * as S from "./Button.styles";

export type ButtonProps = {
  textColor?: string;
  background?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ textColor, background, children }) => {
  return (
    <S.Button background={background}>
      <S.Span textColor={textColor}>{children}</S.Span>
    </S.Button>
  );
};

export default Button;
