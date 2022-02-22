import React from "react";
import Logo from "../icons/Logo";
import Button from "../button/Button";
import { StyledHeader } from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-logo fadeInDown">
        <Logo />
      </div>
      <Button />
    </StyledHeader>
  );
};

export default Header;
