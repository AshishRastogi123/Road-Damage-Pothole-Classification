import React from "react";
import "./Team.css";

// Team member and tasks data
const projectGuide = {
  name: "Rohit",
  role: "Project Guide",
  tasks: ["Provide guidance and review project progress"],
  photo: "https://xsgames.co/randomusers/assets/images/favicon.png",
};

const teamMembers = [
  {
    name: "Ashish Kumar Rastogi",
    role: "Deep Learning Model Developer",
    tasks: [
      "Design and train CNN/deep learning model",
      "Optimize accuracy and evaluate model",
      "Export trained model for backend integration",
    ],
    photo: "https://xsgames.co/randomusers/assets/images/favicon.png",
  },
  {
    name: "Hardik Agarwal",
    role: "Deep Learning Model Developer",
    tasks: [
      "Design and train CNN/deep learning model",
      "Optimize accuracy and evaluate model",
      "Export trained model for backend integration",
    ],
    photo: "https://xsgames.co/randomusers/assets/images/favicon.png",
  },
  {
    name: "Aditya Tiwari",
    role: "Data Preprocessing",
    tasks: [
      "Clean, resize, and normalize images",
      "Handle dataset splitting",
      "Augment data to balance classes",
    ],
    photo: "https://xsgames.co/randomusers/assets/images/favicon.png",
  },
  {
    name: "Manju",
    role: "Data Preprocessing",
    tasks: [
      "Clean, resize, and normalize images",
      "Handle dataset splitting",
      "Augment data to balance classes",
    ],
    photo: "https://xsgames.co/randomusers/assets/images/favicon.png",
  },
  {
    name: "Deepak Singh",
    role: "Backend Developer",
    tasks: [
      "Build backend API for model",
      "Create endpoints for image upload and prediction",
      "Connect backend with frontend",
    ],
    photo: "https://xsgames.co/randomusers/assets/images/favicon.png",
  },
  {
    name: "Ansh Saxena",
    role: "Backend Developer",
    tasks: [
      "Build backend API for model",
      "Create endpoints for image upload and prediction",
      "Connect backend with frontend",
    ],
    photo: "https://xsgames.co/randomusers/assets/images/favicon.png",
  },
  {
    name: "Prem Kumar",
    role: "Frontend Developer",
    tasks: [
      "Create React.js web app",
      "Add image upload & result visualization",
      "Ensure responsive UI/UX",
    ],
    photo: "https://xsgames.co/randomusers/assets/images/favicon.png",
  },
  {
    name: "Akshay Mishra",
    role: "Frontend Developer",
    tasks: [
      "Create React.js web app",
      "Add image upload & result visualization",
      "Ensure responsive UI/UX",
    ],
    photo: "https://xsgames.co/randomusers/assets/images/favicon.png",
  },
];

function Team() {
  return (
    <div className="team-section">
      <h2 className="team-header">Meet Our Project Team</h2>
      <p className="team-subheader">
        Collaborators and their roles in the Road Damage Detection Project
      </p>

      {/* Project Guide */}
      <div className="guide-card">
        <div className="photo-wrapper">
          <img src={projectGuide.photo} alt={projectGuide.name} className="member-photo" />
        </div>
        <h3 className="member-name">{projectGuide.name}</h3>
        <p className="member-role">{projectGuide.role}</p>
        <ul className="member-tasks">
          {projectGuide.tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>

      {/* Rest of the Team */}
      <div className="team-cards">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="team-card">
            <div className="photo-wrapper">
              <img src={member.photo} alt={member.name} className="member-photo" />
            </div>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <ul className="member-tasks">
              {member.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
