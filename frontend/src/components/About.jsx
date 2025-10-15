import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-section">
      <h2 className="about-header">About the Project</h2>
      <p className="about-subheader">
        Road Damage Detection is a machine learning project aimed at identifying
        road damages and potholes efficiently, helping in timely maintenance
        and improving road safety.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <h3>Objective</h3>
          <p>
            Detect potholes and road damages from images using deep learning
            techniques and provide quick, actionable results.
          </p>
        </div>

        <div className="about-card">
          <h3>Technology Stack</h3>
          <p>
            <strong>Frontend:</strong> React.js <br />
            <strong>Backend:</strong> Flask/Django <br />
            <strong>Machine Learning:</strong> CNN/Deep Learning <br />
            <strong>Database:</strong> MySQL/PostgreSQL
          </p>
        </div>

        <div className="about-card">
          <h3>Team Collaboration</h3>
          <p>
            The project is developed by a team of skilled developers and guided
            by Rohit to ensure high quality and accuracy in predictions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
