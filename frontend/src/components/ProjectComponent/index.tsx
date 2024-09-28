import { IoGlobeOutline } from "react-icons/io5";
import styled from "styled-components";
import IconComponent from "../IconComponent";

const ProjectComponent = ({
  image = "",
  title,
  description,
  srcLink,
  webLink,
}: any) => {
  return (
    <StyledProjectWrapper className="flex lg:flex-row flex-col items-center justify-between gap-6">
      <StyledProjectImage
        className="max-w-[588px] flex-shrink-0 rounded-xl border-2 shadow-lg"
        href={webLink}
        target="_blank"
      >
        <img src={image} alt="project thumbnail" />
      </StyledProjectImage>
      <StyledProjectContent className="flex-grow">
        <StyledProjectInfo>
          <h3 className="h3">{title}</h3>
          <p>{description}</p>
        </StyledProjectInfo>
        <StyledProjectLinks className="flex items-center gap-12 mt-6">
          <IconComponent webLink={srcLink} name="Github">
            {<img src="/images/github-icon.svg" alt="github icon" />}
          </IconComponent>
          <IconComponent webLink={webLink} name="Website">
            <IoGlobeOutline />
          </IconComponent>
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
