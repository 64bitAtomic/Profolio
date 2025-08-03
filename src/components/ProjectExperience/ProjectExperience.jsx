import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./ProjectExperience.css";
import { PROJECT_EXPERIENCE } from "../../utils/ProjectExp";
import { ExperienceCard } from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";
const ProjectExperience = () => {
  const slideRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
    <section id="project" className="experience-container">
      <h5>Project Experience</h5>
      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined"><FaArrowRight style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", width: "100px" }} /></span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined"><FaArrowLeft style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", width: "100px" }} /></span>
        </div>
        <Slider ref={slideRef} {...settings}>
          {PROJECT_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectExperience;
