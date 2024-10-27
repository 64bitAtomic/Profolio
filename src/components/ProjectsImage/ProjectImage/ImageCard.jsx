import React from "react";
import "./ImageCard.css";
const ImageCard = ({ value }) => {
  return (
    <div className="image-card">
      <div
        style={{ backgroundImage: `url('${value.img}')` }}
        className="image-placeholder"
      >
        <div className="project-name">
          <span>{value.name}</span>
        </div>
      </div>
      <div className="button-container">
        <a target="_blank" href={value.git}>
          <button className="card-button">
            View on GitHub{" "}
            <img
              width={"25px"}
              height={"25px"}
              src={"./assets/images/github.png"}
            />
          </button>{" "}
        </a>
        <a target="_blank" href={value.web}>
          <button className="card-button">
            Website{" "}
            <img width={"25px"} height={"25px"} src="./assets/images/web.png" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
