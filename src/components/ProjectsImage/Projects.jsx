import React, { useRef } from "react";
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
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined">chevron_left</span>
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
