import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import styled from "styled-components";

const ButtonToTop = () => {
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY >= (document.body.offsetHeight - window.innerHeight) / 2) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);
  const _scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <StyledButton
      className={`btt ${showBtn ? "active" : ""}`}
      onClick={_scrollTop}
    >
      <BsArrowUp />
    </StyledButton>
  );
};

export default ButtonToTop;

const StyledButton = styled.button`
  position: fixed;
  bottom: 10px;
  background-color: var(--blue-dark-cl);
  border: 1px solid var(--neutral-cl);
  border-radius: 6px;
  padding: 16px;
  transition: 0.3s;
  transform: translateY(500px);
  svg {
    fill: var(--white-cl);
    font-size: var(--fs-title);
  }
  &.active {
    transform: translateY(0);
  }
  &:hover {
    background-color: var(--blue-cl);
  }
`;
