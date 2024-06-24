import "./WorkCardsStyles.css";
import React from "react";

import { NavLink } from "react-router-dom";

const WorkCards = (props) => {
  return (
    <div className="work-card">
      <h1 className="title">Projects</h1>
      <div className="card-wrapper">
        <div className="card-container">
          <div className="project-card">
            <div className="image-wrapper">
              <img src={props.img1} alt="image1" />
            </div>
            <h2 className="pro-title">Ecommerce Shop</h2>
            <div className="pro-content">
              <p>online shopping for a wide range of products</p>
            </div>
            <div className="pro-btns">
              <NavLink className="btn" to="/url.com">
                VIEW
              </NavLink>
              <NavLink className="btn" to="/https://github.com/eangle9">
                SOURCE
              </NavLink>
            </div>
          </div>

          <div className="project-card">
            <img src={props.img2} alt="image2" />
            <h2 className="pro-title">Fullstack Projects</h2>
            <div className="pro-content">
              <p>integrating technologies for web development.</p>
            </div>
            <div className="pro-btns">
              <NavLink className="btn" to="/url.com">
                VIEW
              </NavLink>
              <NavLink className="btn" to="/https://github.com/eangle9">
                SOURCE
              </NavLink>
            </div>
          </div>

          <div className="project-card">
            <img src={props.img3} alt="image3" />
            <h2 className="pro-title">Todo App</h2>
            <div className="pro-content">
              <p>A simple app for managing and organizing your daily tasks</p>
            </div>
            <div className="pro-btns">
              <NavLink className="btn" to="/url.com">
                VIEW
              </NavLink>
              <NavLink className="btn" to="/https://github.com/eangle9">
                SOURCE
              </NavLink>
            </div>
          </div>

          <div className="project-card">
            <img src={props.img4} alt="image3" />
            <h2 className="pro-title">Design Projects</h2>
            <div className="pro-content">
              <p>Frontend website design</p>
            </div>
            <div className="pro-btns">
              <NavLink className="btn" to="/url.com">
                VIEW
              </NavLink>
              <NavLink className="btn" to="/https://github.com/eangle9">
                SOURCE
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCards;
