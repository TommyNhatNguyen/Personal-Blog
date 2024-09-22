import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { PATHS } from "../../constant/paths";
import Button from "../Button";

const Navbar = () => {
  return (
    <StyledNavbar className="flex items-center gap-8">
      {/* <NavLink to={PATHS.HOME}>About me</NavLink> */}
      {/* <NavLink to={PATHS.BLOG}>Blogs</NavLink>
      <Link to={PATHS.BLOG}>Contact</Link> */}
      <Button
        link={
          "https://drive.google.com/file/d/1dBhhzRRvk87GS8VBSli36NHNTr-GrlcJ/view?usp=sharing"
        }
      >
        My resumé
      </Button>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  > * {
    transition-duration: 0.3s;
    &:hover {
      &:not(:last-child) {
        color: var(--blue-dark-cl);
      }
    }
  }
`;
