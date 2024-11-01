import { Container ,Nav , Navbar } from "react-bootstrap";
import Image from "next/image";
import AOS from 'aos';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import "../footer/footer.css";



function Footer() {
  useEffect(() => {
    AOS.init();
  }, [])
  const { t } = useTranslation(); 
  return (
    <div className="footer text-center">
      <div className="footer-info text-center " data-aos="fade-in" data-aos-duration="2000">
        <Image
          src="/assets/images/hero/slide-picture.png"
          width={100}
          height={100}
          alt="footer image"
        />
        <span >mobile appplications developer</span>

        <Navbar expand="lg">
          <Container>
              <Nav className="mx-auto">
                <Nav.Link href="#service">{t("services")}</Nav.Link>
                <Nav.Link href="#works">{t("works")}</Nav.Link>
                <Nav.Link href="#education">{t("education")}</Nav.Link>
                <Nav.Link href="#skills">{t("skills")}</Nav.Link>
                <Nav.Link href="#contacts">{t("contact")}</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Footer;
