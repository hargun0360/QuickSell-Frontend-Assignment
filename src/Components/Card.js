import React from "react";
import profile from "../Assets/profile.png";
import profile1 from "../Assets/profile1.png";
import profile4 from "../Assets/profile4.jpeg";
import profile5 from "../Assets/profile5.jpeg";
import profile6 from "../Assets/profile6.png";
import profile7 from "../Assets/profile7.png";

const Card = ({ id, title, tag, userId, userData, priority }) => {
  const user = userData.find((user) => user.id === userId);
  console.log(priority);

  return (
    <div className="card">
      <div className="card-header">
        <p>{id}</p>
        <div
          className={
            user && !user.available ? "user-avatar-unavailable" : "user-avatar"
          }
        >
          <img
            src={
              userId == "usr-1"
                ? profile1
                : userId == "usr-2"
                ? profile6
                : userId == "usr-3"
                ? profile7
                : userId == "usr-4"
                ? profile5
                : userId == "usr-5"
                ? profile4
                : profile
            }
            className={
              user && !user.available
                ? "user-avatar-unavailable"
                : "user-avatar"
            }
            alt="user"
          ></img>
        </div>
      </div>
      <div className="card-title">
        <p>{title}</p>
      </div>
      <div className="card-footer">
        <div className="feature-container">
          {priority == "0" ? (
            <i className="bx bx-dots-horizontal-rounded"></i>
          ) : priority == "1" ? (
            <i class="bx bx-signal-2"></i>
          ) : priority == "2" ? (
            <i class="bx bx-signal-3"></i>
          ) : priority == "3" ? (
            <i class="bx bx-signal-4"></i>
          ) : (
            <i class="bx bxs-message-square-error"></i>
          )}
        </div>
        {tag?.map((value, index) => {
          return (
            <div className="feature-container" key={index}>
              <div className="alert-icon"></div>
              <div className="feature-request">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
