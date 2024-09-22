import React from "react";
import { IoGlobeOutline } from "react-icons/io5";
import styled from "styled-components";

const ProjectComponent = ({
  image = "",
  title,
  description,
  srcLink,
  webLink,
}: any) => {
  return (
    <StyledProjectWrapper className="flex items-center justify-between gap-6">
      <StyledProjectImage
        className="max-w-[588px] flex-shrink-0 rounded-xl border-2 shadow-lg"
        href={webLink}
      >
        <img src={image} alt="project thumbnail" />
      </StyledProjectImage>
      <StyledProjectContent className="flex-grow">
        <StyledProjectInfo>
          <h3 className="h3">{title}</h3>
          <p>{description}</p>
        </StyledProjectInfo>
        <StyledProjectLinks className="flex items-center gap-12 mt-6">
          <StyledProjectIcon href={srcLink}>
            <div>
              <img src="/images/github-icon.svg" alt="github icon" />
            </div>
            <a href={srcLink}>Github</a>
          </StyledProjectIcon>
          <StyledProjectIcon href={webLink}>
            <div>
              <IoGlobeOutline />
            </div>
            <a href={webLink}>Website</a>
          </StyledProjectIcon>
        </StyledProjectLinks>
      </StyledProjectContent>
    </StyledProjectWrapper>
  );
};

export default ProjectComponent;

const StyledProjectWrapper = styled.div``;

const StyledProjectImage = styled.a`
  overflow: hidden;
  img {
    transition: 0.3s;
  }
  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;

const StyledProjectContent = styled.div``;

const StyledProjectInfo = styled.div``;

const StyledProjectLinks = styled.div``;

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
  a {
    margin-top: 6px;
    transition: 0.3s;
  }
  &:hover {
    a {
      color: var(--blue-cl);
    }
  }
`;
