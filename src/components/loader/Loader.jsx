import Image from "next/image";
import "@/helpers/plugins";
import { TypeAnimation } from "react-type-animation";

import "@/components/loader/loader.css";

function Loader() {
    
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-image">
        <Image
          src="/assets/images/hero/image-rounded.png"
          width={70}
          height={70}
          alt="Logo"
        />
        </div>
        <span className="ani-text">
        <TypeAnimation
                  sequence={[
                    "Karim Abdel Aziz",
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
                    fontSize: "22px",
                    position: "relative",
                    zIndex: 2,
                    fontWeight: "bold",
                    lineHeight: 1.3,
                    textTransform : "capitalize",
                  }}
                  repeat={Infinity}
                />
        </span> 
      </div>
    </div>
  );
}

export default Loader;
