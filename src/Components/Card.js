import React from "react";
import profile from "../Assets/profile.png";

const Card = ({ id, title, tag, userId, status, priority, available }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p>{id}</p>
        <div className="user-avatar">
          <img src={profile} className="user-avatar" alt="user"></img>
        </div>
      </div>
      <div className="card-title">
        <p>{title}</p>
      </div>
      <div className="card-footer">
        <div className="feature-container">
          <i className="bx bx-dots-horizontal-rounded"></i>
        </div>
        {tag?.map((value, index) => {
          return (<div className="feature-container" key={index}>
            <div className="alert-icon"></div>
            <div className="feature-request">
              {value}
            </div>
          </div>)
        })}
      </div>
    </div>
  );
};

export default Card;
