import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import "@/components/education/education.css";
import { Col, Container, Row } from "react-bootstrap";

import AOS from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Education() {
  
  useEffect(() => {
    AOS.init();
  }, []);
  const { t } = useTranslation();
  return (
    <div className="education text-center" id="education">
      <div className="education-header">
        <h2 data-aos="fade-up" data-aos-duration="2000">
          <FontAwesomeIcon icon={faGraduationCap} /> <span> {t("myeducation")} </span>
        </h2>
      </div>
      <div className="education-content">
        <Container>
          <Row>
            <Col md={6}>
              <div
                className="education-details text-start"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h3 className="year">2015 - 2019</h3>
                <h3 className="fw-bold">{t("boxonecources")}</h3>
                <h6>{t("boxoneuniversity")} </h6>
              </div>
            </Col>
            <Col md={6}>
              <div
                className="education-details text-start"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h3 className="year">2019- 2020 </h3>
                <h3 className="fw-bold">{t("boxtwocources")}</h3>
                <h6>{t("boxtwouniversity")} </h6>
              </div>
            </Col>
            <Col md={6}>
              <div
                className="education-details text-start"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <h3 className="year">2020 - 2021</h3>
                <h3 className="fw-bold">{t("boxthreecources")}</h3>
                <h6>{t("boxthreeuniversity")} </h6>
              </div>
            </Col>
            <Col md={6}>
              <div
                className="education-details text-start"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h3 className="year">2021 - 2022</h3>
                <h3 className="fw-bold">{t("boxfourecources")}</h3>
                <h6>{t("boxfouruniversity")} </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Education;
