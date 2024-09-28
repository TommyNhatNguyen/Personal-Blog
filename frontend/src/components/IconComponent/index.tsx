import styled from "styled-components";

const IconComponent = ({ webLink, name, children }: any) => {
  if (!webLink) {
    return (
      <StyledProjectIcon as={"div"}>
        <div>{children}</div>
        <p className="capitalize">{name}</p>
      </StyledProjectIcon>
    );
  }
  return (
    <StyledProjectIcon target="_blank" href={webLink}>
      <div>{children}</div>
      <p className="capitalize">{name}</p>
    </StyledProjectIcon>
  );
};

export default IconComponent;

const StyledProjectIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    width: 40px;
    svg,
    img {
      height: 100%;
      width: 100%;
    }
  }
  a,
  p {
    margin-top: 6px;
    transition: 0.3s;
  }
  &:hover {
    a,
    p {
      color: var(--blue-cl);
    }
  }
`;
