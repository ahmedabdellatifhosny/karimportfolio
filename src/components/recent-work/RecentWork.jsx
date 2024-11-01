import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';

import "../recent-work/recent-work.css";
import { useTranslation } from "react-i18next";

function MyRecentWork() {
  const { t } = useTranslation(); 
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleDetails, setVisibleDetails] = useState({});

  const projects = [
    { id: 1, title: "Golden Necklace", category: "apps , ui/ux", image: "/assets/images/projects/1.png", playLink: "https://play.google.com/store/apps/details?id=com.goldennecklace.player" },
    { id: 2, title: "Asyia Store", category: "ui/ux", image: "/assets/images/projects/2.png" },
    { id: 3, title: "Buy Luxury Store", category: "apps", image: "/assets/images/projects/3.png" },
    { id: 4, title: "Moshahid", category: "ui/ux", image: "/assets/images/projects/4.png", playLink: "https://play.google.com/store/apps/details?id=com.moshahid.app&hl=ar" },
    { id: 5, title: "Buy Luxury Store", category: "ui/ux", image: "/assets/images/projects/1.png" },
    { id: 6, title: "Moshahid", category: "ui/ux", image: "/assets/images/projects/3.png", playLink: "https://play.google.com/store/apps/details?id=com.moshahid.app&hl=ar" },
  ];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const toggleDetails = (id) => {
    setVisibleDetails(prevDetails => ({
      ...prevDetails,
      [id]: !prevDetails[id] 
    }));
  };

  return (
    <div className="my-recent-work" id="works">
      <div className="work-header text-center">
        <h2  data-aos="fade-up" data-aos-duration="2000">{t("Recentwork")}</h2>
      </div>

      <Container>
        <Row>
          <Col md={2}>
            <ul className="list-unstyled">
              <li>
                <button 
                  type="button" 
                  className={`btn btn-dark ${selectedCategory === "all" ? "active" : ""}`}
                  onClick={() => setSelectedCategory("all")}
                  data-aos="fade-up" data-aos-duration="1000"
                >
                  {t("all")}
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className={`btn btn-dark ${selectedCategory === "apps" ? "active" : ""}`}
                  onClick={() => setSelectedCategory("apps")}
                  data-aos="fade-up" data-aos-duration="1500"
                >
                  {t("apps")}
                </button>
              </li>
              <li>
                <button 
                  type="button" 
                  className={`btn btn-dark ${selectedCategory === "ui/ux" ? "active" : ""}`}
                  onClick={() => setSelectedCategory("ui/ux")}
                  data-aos="fade-up" data-aos-duration="2000"
                >
                  {t("uiux")}
                </button>
              </li>
            </ul>
          </Col>

          <Col md={10}>
            <div className="projects">
              <Row>
                {filteredProjects.map(project => (
                  <Col md={6} key={project.id}>
                    <div className="project-box">
                      <Image 
                        className="img-thumbnail" 
                        src={project.image} 
                        width={500} 
                        height={400} 
                        alt="project" 
                        onClick={() => toggleDetails(project.id)} 
                        data-aos="fade-up" data-aos-duration="2000"
                      />
                      <div className={`project-details ${visibleDetails[project.id] ? 'show' : ''}`}>
                        <h5>{project.title}</h5>
                        <div className="stores">
                          {project.playLink && (
                            <a href={project.playLink} target="_blank" rel="noopener noreferrer">
                              <FontAwesomeIcon icon={faGooglePlay} />
                            </a>
                          )}
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faAppStoreIos} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyRecentWork;
