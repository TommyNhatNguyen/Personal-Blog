import styled from "styled-components";
import Navbar from "../Navbar";

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
