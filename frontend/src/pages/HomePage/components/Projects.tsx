import ProjectComponent from "../../../components/ProjectComponent";
import { PAGE_CONTENT } from "../../../constant/content";
import styled from "styled-components";

const Projects = () => {
  const projectsContent = PAGE_CONTENT.projects;
  return (
    <div className="pb-section">
      <h2 className="h1 text-center">Projects</h2>
      <StyledProjectsWrapper className="pt-[50px]">
        {projectsContent.map((item: any) => (
          <ProjectComponent key={item.title} {...item} />
        ))}
      </StyledProjectsWrapper>
    </div>
  );
};

export default Projects;

const StyledProjectsWrapper = styled.div`
  > div {
    &:not(:last-child) {
      margin-bottom: 100px;
    }
  }
  > div {
    &:nth-child(even) {
      flex-direction: row-reverse;
      @media screen and (max-width: 1024px) {
        flex-direction: column;
      }
    }
  }
`;
