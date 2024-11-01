"use client"
import "../skills/skills.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import AOS from 'aos';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Skills() {
  useEffect(() => {
    AOS.init();
  }, [])
  const { t } = useTranslation();
  return (
    <div className="skills text-center" id="skills" >
      <div className="skills-header text-center">
        <h2 data-aos="fade-up" data-aos-duration="1500">{t("myskills")}</h2>
        <p data-aos="fade-up" data-aos-duration="2000">
        {t("aboutskills")}
        </p>
      </div>
      <div className="skill-info text-center">
        <Container>
          <Row>
            <Col md={3}>
              <div className="skills-box" data-aos="fade-up" data-aos-duration="100">
                <Image
                  src="/assets/images/skills/dart.png"
                  width={120}
                  height={120}
                  alt="dart skill"
                />
                <div className="presentage">
                    <span>90%</span>
                </div>
              </div>
              <div className="box-title">
                <p>dart</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="skills-box" data-aos="fade-up" data-aos-duration="1000">
                <Image
                  src="/assets/images/skills/flutter.png"
                  width={120}
                  height={120}
                  alt="flutter skill"
                />
                  <div className="presentage">
                    <span>90%</span>
                </div>
              </div>
              <div className="box-title">
                <p>flutter</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="skills-box" data-aos="fade-up" data-aos-duration="1500">
                <Image
                  src="/assets/images/skills/firebase.png"
                  width={120}
                  height={120}
                  alt="firebase skill"
                />
                  <div className="presentage">
                    <span>90%</span>
                </div>
              </div>
              <div className="box-title">
                <p>firebase</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="skills-box" data-aos="fade-up" data-aos-duration="2000">
                <Image
                  src="/assets/images/skills/woocommerce.png"
                  width={120}
                  height={120}
                  alt="woocommerce skill"
                />
                  <div className="presentage">
                    <span>90%</span>
                </div>
              </div>
              <div className="box-title">
                <p>woo commerce</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="skills-box" data-aos="fade-up" data-aos-duration="2000">
                <Image
                  src="/assets/images/skills/wordpress.png"
                  width={120}
                  height={120}
                  alt="wordpress skill"
                />
                  <div className="presentage">
                    <span>90%</span>
                </div>
              </div>
              <div className="box-title">
                <p>wordpress</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="skills-box" data-aos="fade-up" data-aos-duration="2000">
                <Image
                  src="/assets/images/skills/googleplay.png"
                  width={120}
                  height={120}
                  alt="googleplay skill"
                />
                  <div className="presentage">
                    <span>90%</span>
                </div>
              </div>
              <div className="box-title">
                <p>google play</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="skills-box" data-aos="fade-up" data-aos-duration="2000">
                <Image
                  src="/assets/images/skills/appstore.png"
                  width={120}
                  height={120}
                  alt="appstore skill"
                />
                  <div className="presentage">
                    <span>90%</span>
                </div>
              </div>
              <div className="box-title">
                <p>app store</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Skills;
