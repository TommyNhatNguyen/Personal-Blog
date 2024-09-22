import React from "react";
import styled from "styled-components";
import { IMAGES_PATH, PAGE_CONTENT } from "../../../constant/content";

const AboutMe = () => {
  const contactKeys = Object.keys(PAGE_CONTENT.contact);
  return (
    <div className="pt-[70px] pb-section flex gap-6 items-center justify-between">
      <StyledHeroImage className="flex-shrink-0">
        <img src={IMAGES_PATH.about} alt="about me img" />
      </StyledHeroImage>
      <StyledContentWrapper className="flex-grow">
        <StyledInfo>
          <h1 className="h1">{PAGE_CONTENT.home.aboutsc.title}</h1>
          <p>{PAGE_CONTENT.home.aboutsc.description}</p>
        </StyledInfo>
        <div className="mt-[18px]">
          <p className="font-[var(--ff-bold)] text-[2.0rem]">Main stack</p>
          <StyledLogos className="flex items-center justify-evenly gap-6  flex-wrap mt-6">
            {IMAGES_PATH.icons.map((item) => (
              <img src={item} alt="icon" />
            ))}
          </StyledLogos>
        </div>
        <div className="mt-10">
          <p className="font-[var(--ff-bold)] text-[2.0rem]">Contact</p>
          <StyledContacts className="mt-4">
            {contactKeys.map((item) => (
              <div>
                <span className="text-[var(--gray-cl)] capitalize font-[var(--ff-medium)]">
                  {item}:
                </span>{" "}
                {item === "email" && (
                  <a href={`mailto: ${PAGE_CONTENT.contact[item]}`}>
                    {PAGE_CONTENT.contact[item]}
                  </a>
                )}
                {item === "phone" && (
                  <a href={`tel: ${PAGE_CONTENT.contact[item]}`}>
                    {PAGE_CONTENT.contact[item]}
                  </a>
                )}
                {item === "github" && (
                  <a target="_blank" href={`${PAGE_CONTENT.contact[item]}`}>
                    My Github Link
                  </a>
                )}
                {item === "address" && (
                  <span>{PAGE_CONTENT.contact[item]}</span>
                )}
              </div>
            ))}
          </StyledContacts>
        </div>
      </StyledContentWrapper>
    </div>
  );
};

export default AboutMe;

const StyledHeroImage = styled.div``;

const StyledContentWrapper = styled.div``;

const StyledInfo = styled.div``;

const StyledLogos = styled.div`
  > img {
    transition-duration: 0.3s;
    width: 40px;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const StyledContacts = styled.div``;
