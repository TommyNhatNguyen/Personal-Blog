import React from "react";
import styled from "styled-components";
import { IMAGES_PATH, PAGE_CONTENT } from "../../../constant/content";
import { RiReactjsFill } from "react-icons/ri";

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
        <StyledLogos className="flex items-center justify-evenly gap-6 mt-10 flex-wrap">
          {IMAGES_PATH.icons.map((item) => (
            <img src={item} alt="icon" />
          ))}
        </StyledLogos>
        <StyledContacts className="mt-10">
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
              {item === "address" && <span>{PAGE_CONTENT.contact[item]}</span>}
            </div>
          ))}
        </StyledContacts>
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
