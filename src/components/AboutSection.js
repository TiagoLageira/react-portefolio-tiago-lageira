import React from "react";
import styled from "styled-components";
import Button from "./Button";
import PText from "./PText";
import SectionTitle from "./SectionTitle";
import AboutImg from "../assets/images/profilePic.jpg";

const AboutSectionStyles = styled.div`
  padding: 17rem 0 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left {
    flex: 3;
  }
  .aboutSection__right {
    flex: 2;
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  @media only screen and (max-width: 950px) {
    padding: 4rem 0 10rem 0;
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 2rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      margin-top: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            subheading="Let me introduce myself"
            heading="Tiago Lageira"
          />
          <PText>
            I am a Support Engineer and programmer from Portalegre, Portugal. I
            provide support for any sofware problem. I love to program and find
            solutions for everyone's problem.
          </PText>
          <div className="aboutSection__buttons">
            <Button
              links={[
                {
                  title: "Download CV",
                  path: "https://drive.google.com/u/2/uc?id=1ndWNXPkzvQ1LkS1yrmWBt31JdfHZ78IF&export=download",
                },
              ]}
            />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
