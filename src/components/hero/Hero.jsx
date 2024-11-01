import { Col, Container, Row, Button } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import React, { useEffect } from "react";

import { TypeAnimation } from "react-type-animation";
import AOS from "aos";

import "../hero/hero.css";
import { useTranslation } from 'react-i18next';

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="stroke-text text-uppercase">
        <h2 className="text-center" data-aos="fade-up" data-aos-duration="2000">{t("strick")}</h2>
      </div>
      <Container>
        <Row>
          <Col md={6}>
            <div className="info" data-aos="fade-right" data-aos-duration="2000">
              <div className="header-title">
                <TypeAnimation
                  sequence={[
                    "I'm Karim Abdel Aziz",
                    1000,
                    "mobile app developer",
                    1000,
                  ]}
                  speed={50}
                  style={{
                    background:
                      "linear-gradient(to right, #8750f7 0%, #ffffff 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: "53px",
                    position: "relative",
                    zIndex: 2,
                    fontWeight: "bold",
                    lineHeight: 1.3,
                    marginBottom: "15px",
                  }}
                  repeat={Infinity}
                />
              </div>
              <div className="lead">
                <p>

                {t('aboutme')}
                
                </p>
              </div>

              <ul className="list-unstyled d-flex gap-4 justify-content-start align-items-center mt-5">
                <li>
                  <a href="https://wa.me/201155779498?text=Karim%20Abdelaziz" target="_blank">
                    <Button className="cv">
                      <FontAwesomeIcon icon={faWhatsapp} /> whatsapp{" "}
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/karimelghabaty" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/KarimAbdelaziz96" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div className="hero-img" data-aos="fade-left" data-aos-duration="2000"  >
              <Image
                src="/assets/images/hero/slide-picture.png"
                width={350}
                height={350}
                alt="slide Picture"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
