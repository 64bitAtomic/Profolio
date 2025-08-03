import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "./WorkExperience.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WORK_EXPERIENCE } from "../../utils/workExp";
import { ExperienceCard } from "./ExperienceCard/ExperienceCard";

const WorkExperience = () => {
  const slideRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: WORK_EXPERIENCE.length > 1,
    speed: 500,
    slidesToShow: Math.min(WORK_EXPERIENCE.length, 2),
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    slideRef.current?.slickNext();
  };

  const slideLeft = () => {
    slideRef.current?.slickPrev();
  };

  return (
    <section id="work" className="experience-container">
      <h5>Work Experience</h5>
      <div className="experience-content">
        {WORK_EXPERIENCE.length > 1 && (
          <>
            <div
              className="arrow-right"
              onClick={slideRight}
              role="button"
              aria-label="Next slide"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && slideRight()}
            >
              <FaArrowRight style={{ fontSize: "16px" }} />
            </div>
            <div
              className="arrow-left"
              onClick={slideLeft}
              role="button"
              aria-label="Previous slide"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && slideLeft()}
            >
              <FaArrowLeft style={{ fontSize: "16px" }} />
            </div>
          </>
        )}
        {WORK_EXPERIENCE.length === 1 ? (
          <ExperienceCard details={WORK_EXPERIENCE[0]} />
        ) : (
          <Slider ref={slideRef} {...settings}>
            {WORK_EXPERIENCE.map((item) => (
              <ExperienceCard key={item.id || item.title} details={item} />
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default WorkExperience;