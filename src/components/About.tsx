import { memo } from "react";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a fourth-year B.Tech Artificial Intelligence student building AI
          and full-stack systems. My work blends machine learning, backend
          engineering, and polished web experiences, with projects ranging from
          cattle recognition to smart grocery inventory tracking.
        </p>
      </div>
    </div>
  );
};

export default memo(About);
