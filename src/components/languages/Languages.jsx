import { useState, useEffect } from "react";
import Image from "next/image";
import i18n from "i18next"; 
import { useTranslation } from "react-i18next";
import AOS from "aos";

// استيراد الاستايلات الأساسية فقط
import "../languages/languages.css";

function Languages() {
  const [isArabic, setIsArabic] = useState(false);
  const { t } = useTranslation(); 

  // تغيير اللغة عند النقر
  const toggleLanguage = () => {
    setIsArabic(prev => !prev);
    i18n.changeLanguage(!isArabic ? "ar" : "en"); 
  };

  // تطبيق الاستايل الخاص باللغة بناءً على حالة اللغة
  useEffect(() => {
    const loadStyle = async () => {
      if (isArabic) {
        await import("../../app/sass-globals/rtl/rtl.css");
      } else {
        await import("../../app/sass-globals/globals.css");
      }
    };
    loadStyle();
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic]);

  // تهيئة AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div 
      className="langs" 
      onClick={toggleLanguage} 
      data-aos="fade-right" 
      data-aos-duration="1500" 
      data-aos-once="true"
    >
      <div className={`ar ${isArabic ? "active" : ""}`}>
        <span>{t("arabic")}</span>
        <Image
          src="/assets/images/languages/ar-egypt.png"
          width={30}
          height={30}
          alt="Arabic Logo"
        />
      </div>
      <div className={`en ${!isArabic ? "active" : ""}`}>
        <span>{t("english")}</span>
        <Image
          src="/assets/images/languages/en-usa.png"
          width={30}
          height={30}
          alt="English Logo"
        />
      </div>
    </div>
  );
}

export default Languages;
