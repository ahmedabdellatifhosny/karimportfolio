import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import "../menu/menu.css";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation(); 

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="mailto:ahemdabdellatifhosny@gmail.com">
          <Image
            src="/assets/images/hero/image-rounded.png"
            width={70}
            height={70}
            alt="Logo"
          />
          <span className="nav-title text-uppercase">
          Karimabdelaziz.dev@outlook.com
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#service">{t("services")}</Nav.Link>
            <Nav.Link href="#works">{t("works")}</Nav.Link>
            <Nav.Link href="#education">{t("education")}</Nav.Link>
            <Nav.Link href="#skills">{t("skills")}</Nav.Link>
            <Nav.Link href="#contacts">{t("contact")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
