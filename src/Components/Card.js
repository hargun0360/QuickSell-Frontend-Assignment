import React from "react";
import profile from "../Assets/profile.png";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <p>CAM-11</p>
        <div className="user-avatar">
          <img src={profile} className="user-avatar" alt="user"></img>
        </div>
      </div>
      <div className="card-title">
        <p>Conduct Security Vulnerability Assessment</p>
      </div>
      <div className="card-footer">
        <div className="feature-container">
          <i className="bx bx-dots-horizontal-rounded"></i>
        </div>
        <div className="feature-container">
          <div className="alert-icon"></div>
          <div className="feature-request">Feature Request</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
