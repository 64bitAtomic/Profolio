import React, { useRef } from "react";
import "./Certification.css";
import Slider from "react-slick";
import CertificationCard from "./CertificationCard/CertificationCard";
import { CERTIFICATE } from "../../utils/certificate";
const Certification = () => {
  const slideRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    slideRef.current.slickNext();
  };
  const slideLeft = () => {
    slideRef.current.slickPrev();
  };
  return (
    <section id="certificates" className="certificate-container">
      <h5>Certifications</h5>
      <div className="certificate-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>
        <Slider ref={slideRef} {...settings}>
          {CERTIFICATE.map((item) => (
            <CertificationCard key={item.name} value={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Certification;
