import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/assets/animations/done-animation.json";
import { useEffect, useState } from "react";

import AOS from "aos";

import "../contact/contact.css";

import { useTranslation } from "react-i18next";

function Contact() {
  const [state, handleSubmit] = useForm("mqakplow");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleReset = () => {
    document.getElementById("contact-form").reset();
  };

  const handleSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  const { t } = useTranslation();
  return (
    <div className="contact" id="contacts">
      <Container>
        <Row>
          <Col md={8}>
            <div className="send-mail">
              <h2 data-aos="fade-up" data-aos-duration="1000">
              {t("contacttitle")}
              </h2>
              <p data-aos="fade-up" data-aos-duration="2000">
              {t("contactparagraph")}
              </p>

              <Form
                id="contact-form"
                method="POST"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e).then(() => {
                    handleReset();
                    handleSuccess();
                  });
                }}
              >
                <Row>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder={t("firstname")}
                      name="firstName"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder={t("lastname")}
                      name="lastName"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Control
                      type="email"
                      placeholder={t("email")}
                      name="email"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="number"
                      placeholder={t("phone")}
                      name="phoneNumber"
                      data-aos="fade-up"
                      data-aos-duration="2000"
                    />
                  </Col>
                </Row>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder={t("textarea")}
                    name="message"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="w-100"
                  variant="primary"
                  disabled={state.submitting}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {state.submitting ? t("sending") : t("sendbutton")}
                </Button>

                <div
                  className="loti-message"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                  }}
                >
                  {showSuccessMessage && (
                    <>
                      <span
                        style={{
                          fontSize: "16px",
                          marginLeft: "5px",
                          marginTop: "15px",
                          textTransform: "capitalize",
                        }}
                      >
                        {t("sendmessage")}
                      </span>
                      <Lottie
                        style={{
                          width: "10%",
                        }}
                        animationData={doneAnimation}
                      />
                    </>
                  )}
                </div>
              </Form>
            </div>
          </Col>
          <Col md={4}>
            <div className="contact-data">
              <ul className="list-unstyled">
                <li>
                  <div
                    className="contact-info"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="icon">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                    </div>
                    <div className="info-contact">
                      <p className="info-title">{t("phonenumber")}</p>
                      <p className="phone-nmber-details">+20 11 55779498</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="contact-info"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="info-contact">
                      <p className="info-title">{t("emailtext")}</p>
                      <p>karimabdelaziz.dev@outlook.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="contact-info"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="icon">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className="info-contact">
                      <p className="info-title">{t("address")}</p>
                      <address>
                         cairo,egypt
                      </address>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
