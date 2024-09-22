import React from "react";
import styled from "styled-components";
import IconComponent from "../../../components/IconComponent";
import { CERTIFICATION, EDUCATION, SKILLS } from "../../../constant/content";

const MoreDetails = () => {
  const skillsContent = Object.keys(SKILLS.techstacks);
  const otherContent = Object.keys(SKILLS.otherskills);
  return (
    <div className="pb-section">
      <h2 className="h1 text-center">More details about me</h2>
      <StyledSkillsWrapper className="mt-[50px]">
        <StyledCenterWrapper className="max-w-screen-lg mx-auto">
          <h3 className="h3 text-center mb-4">Experience</h3>
          <StyledContent>
            <h4 className="h4">
              Equity Research Analyst | <span>FPT Securities JSC – FPTS</span>
            </h4>
            <span>08/2021 - 03/2024</span>
          </StyledContent>
          <StyledList className="mt-4">
            <li>
              Use Excel to collect & clean raw data from different sources to
              further analyze and update a company’s financial health, business
              and growth potentials.
            </li>
            <li>
              Prepare analysis slides and present to potential investors as
              required{" "}
              <a href="https://drive.google.com/file/d/1B1eTDuYZNcJ2lnc1LqjGJiWkEGC8rxj4/view?usp=drive_link">
                (Industry analysis sample)
              </a>
            </li>
            <li>
              Use Excel & Word to analyze & compose detailed financial analysis
              and recommendation reports of Vietnamese listed companies in
              rubber & tire industry for investors.
              <a href="https://drive.google.com/file/d/1oj9ycSgDG23qL-0l16r6q8tFsUOfgUQs/view?usp=drive_link">
                (Business analysis sample)
              </a>
            </li>
          </StyledList>
        </StyledCenterWrapper>
        <StyledTopWrapper className="flex items-start gap-12 mt-[50px] flex-wrap">
          <StyledTopGroup className="flex-1">
            <h3 className="h3">Technologies</h3>
            <div className="flex items-end gap-12 mt-10 flex-wrap">
              {skillsContent.map((item) => (
                <IconComponent name={item}>
                  <img src={SKILLS.techstacks[item]} alt="icon" />
                </IconComponent>
              ))}
            </div>
          </StyledTopGroup>
          <StyledTopGroup className="flex-1">
            <h3 className="h3">Other skills</h3>
            <div className="flex items-end gap-12 mt-10 flex-wrap">
              {otherContent.map((item) => (
                <IconComponent
                  name={item === "toeic" ? "toeic (880/990)" : item}
                >
                  <img src={SKILLS.otherskills[item]} alt="icon" />
                </IconComponent>
              ))}
            </div>
          </StyledTopGroup>
        </StyledTopWrapper>

        <div className="flex items-start gap-12">
          <StyledCenterWrapper className=" mt-[50px] flex-1">
            <h3 className="h3">Education</h3>
            <ul className="mt-4">
              {EDUCATION.map((item: any) => {
                const { place, course, timeline } = item;
                return (
                  <li className="mt-4">
                    <h4 className="h4">{place}</h4>
                    <p className="mt-0">{course}</p>
                    <p className="text-[var(--gray-cl)]">{timeline}</p>
                  </li>
                );
              })}
            </ul>
          </StyledCenterWrapper>
          <StyledCenterWrapper className=" mt-[50px] flex-1">
            <h3 className="h3">Certification</h3>
            <ul className="mt-4">
              {CERTIFICATION.map((item: any) => {
                const { place, name, timeline } = item;
                return (
                  <li className="mt-4">
                    <h4 className="h4">{name}</h4>
                    <p className="mt-0">{place}</p>
                    <p className="text-[var(--gray-cl)]">{timeline}</p>
                  </li>
                );
              })}
            </ul>
          </StyledCenterWrapper>
        </div>
      </StyledSkillsWrapper>
    </div>
  );
};

export default MoreDetails;

const StyledSkillsWrapper = styled.div``;

const StyledTopWrapper = styled.div``;

const StyledCenterWrapper = styled.div``;

const StyledTopGroup = styled.div``;

const StyledContent = styled.div``;

const StyledList = styled.ul`
  li {
    &::before {
      content: "•";
      margin-right: 10px;
      color: var(--blue-cl);
    }
  }
`;
