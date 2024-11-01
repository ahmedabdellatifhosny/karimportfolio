import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import "../scrollTop/scrollTop.css";


function ScrollTop() {
  const [visible, setVisible] = useState(false); // حالة لرؤية الزر


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const handleScroll = () => {
    if (window.scrollY > 300) { 
      setVisible(true);
    } else {
      setVisible(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    visible && (
      <div className="scroll" onClick={scrollToTop} data-aos="fade-left" data-aos-duration="2000">
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    )
  );
}

export default ScrollTop;
