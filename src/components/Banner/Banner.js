import React from "react";
import "./Banner.css";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import { TEXTS } from "../../constants/banner";

function Banner() {
  const mailTo = `mailto: ${TEXTS.EMAIL_ID}`;

  return (
    <div className="banner">
      <div className="banner_title1">
        <p>
          <span className="emerge">{TEXTS.HI}</span> {TEXTS.MY_NAME_IS}
        </p>
      </div>
      <div className="banner_title2">
        <p>{TEXTS.NAME}.</p>
      </div>
      <div className="banner_desc1">
        <p>
          {TEXTS.DESIGNATION_SENTENCE}
          <span className="emerge">{TEXTS.COMPANY_NAME}</span>.
        </p>
      </div>
      <div className="banner_desc2">
        <p>{TEXTS.DESCRIPTION_LINE_1}</p>
        <p>
          <span className="emerge">{TEXTS.HIGHLIGHTED_TEXT} </span>
          {TEXTS.DESCRIPTION_LINE_2}{" "}
          <span className="emerge">{TEXTS.HIGHLIGHTED_TEXT}</span>
        </p>
      </div>
      <div className="social_logo">
        <div className="social_logo1">
          <a href={TEXTS.LINKEDIN_LINK} target="_blank" rel="noreferrer">
            <img className="social_logo_image" src={linkedin} alt="" />
          </a>
        </div>
        <div className="social_logo1">
          <a href={TEXTS.GITHUB_LINK} target="_blank" rel="noreferrer">
            <img className="social_logo_image" src={github} alt="" />
          </a>
        </div>
      </div>
      <div className="mail_btn">
        <a href={mailTo}>
          <button className="mail_btnn">{TEXTS.EMAIL_BTN_TEXT}</button>
        </a>
      </div>
    </div>
  );
}

export default Banner;
