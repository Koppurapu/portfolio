import { memo } from "react";
import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My learning <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Full-Stack Developer</h4>
                <h5>Current focus</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building applied AI and full-stack projects with React, Django,
              Flask, Node.js, MongoDB, AWS, Kafka, TensorFlow, and PyTorch.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech AI</h4>
                <h5>Fourth-year student</h5>
              </div>
              <h3>2023-2027</h3>
            </div>
            <p>
              Studying artificial intelligence foundations while applying them in
              practical software systems, from machine learning prototypes to
              production-style web apps.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PAASHU</h4>
                <h5>AI cattle recognition system</h5>
              </div>
              <h3>AI</h3>
            </div>
            <p>
              Developed an AI-powered cattle recognition concept focused on
              reliable animal identification and digital livestock management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>InventoryTracker</h4>
                <h5>Smart grocery system</h5>
              </div>
              <h3>APP</h3>
            </div>
            <p>
              Built a smart grocery tracking experience for monitoring stock,
              reducing waste, and keeping household or store inventory organized.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Career);
