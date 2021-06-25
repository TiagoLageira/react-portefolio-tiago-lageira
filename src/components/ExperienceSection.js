import React from "react";
import styled from "styled-components";
import AboutInfoItem from "./AboutInfoItem";

const AboutPageStyles = styled.div`
  padding: 6rem 0 10rem 0;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about__info__item {
    margin-bottom: 7.5rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  
  @media only screen and (max-width: 768px) {
    padding: 4rem 0 10rem 0;
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function ExperienceSection() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="High School"
                items={["EPRAL, Multimedia Technician"]}
              />
              <AboutInfoItem
                title="College"
                items={["IPP, Portalegre, CTESP in Software Development"]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>
              <AboutInfoItem
                title="2015-2020"
                items={["HelpDesk Technician - Município de Avis"]}
              />
              <AboutInfoItem
                title="2020-Present"
                items={["Support Enginer - SalesSeek"]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={["HTML", "CSS", "JavaScript", "REACT"]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={["Java", "Node", "PHP", "C#"]}
              />
              <AboutInfoItem
                title="Design"
                items={["Adobe Creative Suite", "After Effects", "Autodesk 3D Max", "Unity 3D"]}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
