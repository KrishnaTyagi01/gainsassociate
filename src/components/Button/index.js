import React from "react";
import { ButtonElement, ButtonLabel } from "./ButtonElements";

export const ButtonStyled = ( { active, primary, children, ...rest } ) => {
  // console.log(active);
  return (
    <ButtonElement primary={primary} btnType={active}>
      <ButtonLabel primary={primary} {...rest}>{children}</ButtonLabel>
    </ButtonElement>
  );
};
export const IconButton = () => {
  return <div></div>;
};
