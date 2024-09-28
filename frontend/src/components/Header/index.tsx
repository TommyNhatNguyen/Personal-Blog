import React from "react";
import { IoLogoApple } from "react-icons/io";
import styled from "styled-components";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { PATHS } from "../../constant/paths";

const Header = () => {
  return (
    <HeaderWrapper className="flex items-center gap-2 justify-between border-b-2 ">
      <Navbar />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  height: var(--header-height);
`;
const HeaderLogo = styled(Link)`
  svg {
    height: 100%;
    width: 100%;
  }
`;
