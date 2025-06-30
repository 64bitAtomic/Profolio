import  { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Projects.css";
import Slider from "react-slick";
import ImageCard from "./ProjectImage/ImageCard";
import { PROJECtS } from "../../utils/projects";
const Projects = () => {
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
    <section id="projects" className="projects-container">
      <h5>Projects</h5>
      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined"><FaArrowRight style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", width: "100px" }} /></span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined"><FaArrowLeft style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", width: "100px" }} /></span>
        </div>
        <Slider ref={slideRef} {...settings}>
          {PROJECtS.map((item) => (
            <ImageCard key={item.name} value={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
