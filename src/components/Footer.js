import React from "react";
import styled from "styled-components";
import FooterCol from "./FooterCol";
import PText from "./PText";

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 5rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    padding-top: 2rem;
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 1rem;
      }
    }
    .footer__col1__title {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Tiago Lageira</h1>
          <PText>
            Everyday is a chance to get better.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: "+351 934918447",
                path: "tel:+351934918447",
              },
              {
                title: "tiagolageira17@gmail.com",
                path: "mailto:tiagolageira17@gmail.com",
              },
              {
                title: "Portalegre, Portugal",
                path: "https://www.google.com/maps/place/Portalegre/@39.2889356,-7.4680152,13z/data=!3m1!4b1!4m5!3m4!1s0xd17bd8206392cdf:0xbfc14df2cabd5340!8m2!3d39.2967086!4d-7.4284755",
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/tiago-lageira-0b749b186/",
              },
              {
                title: "GitHub",
                path: "https://github.com/TiagoLageira",
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 | {" "}
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tiago-lageira-0b749b186/">
              Tiago Lageira
            </a>{" "}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
