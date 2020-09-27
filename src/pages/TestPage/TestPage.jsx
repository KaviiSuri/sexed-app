import React from "react";

import "./Styles.css";

import sexualOrientationImg from "../../assets/sexual-orientation.png";

const TestPage = () => {
  return (
    <div className="test-page-container">
      <div className="hero">
        <img src={sexualOrientationImg} alt="Header" />
        <span className="close"><p>&#10005;</p></span>
      </div>

      <div className="header">
        <h1>
          Sexual Orientation <i className="fas fa-angle-down"></i>
        </h1>
        <p className="time">10 - 12mins</p>
      </div>

      <div className="summary">
        <h3>Summary</h3>
        <p>
          Sexual orientation is a term used to describe your pattern of
          emotional, romantic or sexual attraction. Sexual orientation may
          include attraction to the same gender (homosexuality), a gender...
        </p>
      </div>
      <div className="quiz">
        <h3>Quiz</h3>
      </div>
    </div>
  );
};

export default TestPage;
