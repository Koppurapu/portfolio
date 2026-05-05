import { memo } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:siddarthkoppurapu2006@gmail.com"
                rel="noreferrer"
                data-cursor="disable"
              >
                siddarthkoppurapu2006@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+919866153816" data-cursor="disable">
                +91-9866153816
              </a>
            </p>
            <h4>Education</h4>
            <p>Fourth-year B.Tech Artificial Intelligence student</p>
            <p>
              Focused on AI systems, backend engineering, and full-stack product
              development.
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Koppurapu"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="mailto:siddarthkoppurapu2006@gmail.com"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="tel:+919866153816"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Phone <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by{" "}
              <span>Siddartha Reddy Koppurapu</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
