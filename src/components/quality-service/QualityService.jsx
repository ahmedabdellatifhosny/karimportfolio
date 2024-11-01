import { useState , useEffect } from "react";
import "@/components/quality-service/quality-service.css";
import AOS from 'aos';
import { useTranslation } from 'react-i18next';

function QualityService() {
  const [activeIndex, setActiveIndex] = useState(0); // لتحديد العنصر النشط

  const handleBoxClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    AOS.init();
  }, [])
  const { t } = useTranslation();
  return (
    <div className="quality-service text-center" id="service">
      <div className="head-quality-service">
        <h2 data-aos="fade-up" data-aos-duration="1000">{t("QualityServices")}</h2>
        <p data-aos="fade-up" data-aos-duration="2000">
          {t("QualityServicesParagraph")}
        </p>
      </div>
      <div className="my-quality-services text-center" data-aos="fade-up" data-aos-duration="2000">
        <div 
          className={`box ${activeIndex === 0 ? 'active' : ''}`} 
          onClick={() => handleBoxClick(0)}
        >
          <ul>
            <li>
              <div className="box-id">
                <p>01</p>
              </div>
            </li>
            <li>
              <div className="box-title">
                <p>ui/ux design</p>
              </div>
            </li>
            <li>
              <div className="box-description">
                <p className="text-start"> {t("uiuxservice")}</p>
              </div>
            </li>
          </ul>
        </div>

        {/* الصندوق الثاني */}
        <div 
          className={`box ${activeIndex === 1 ? 'active' : ''}`} 
          onClick={() => handleBoxClick(1)}
        >
          <ul>
            <li>
              <div className="box-id">
                <p>02</p>
              </div>
            </li>
            <li>
              <div className="box-title">
                <p>app design</p>
              </div>
            </li>
            <li>
              <div className="box-description -lg " >
                <p className="text-start">{t("appsdesignservice")}</p>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default QualityService;
