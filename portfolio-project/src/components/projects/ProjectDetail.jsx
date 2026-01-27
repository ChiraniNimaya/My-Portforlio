import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Projects_Data from "../../assets/projects_data";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const project = Projects_Data.find(
    (p) => p.p_name.replace(/\s+/g, "-") === projectName
  );

  if (!project) {
    return (
      <div className="project-detail">
        <h2>Project not found</h2>
      </div>
    );
  }

  const details = project.details;

  return (
    <div className="project-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>{details.title}</h1>
      <p className="project-desc">{details.description}</p>

      <h3>Tech Stack:</h3>
      <ul className="tech-stack">
        {details.techStack.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>

      <h3>Features:</h3>
      <ul className="features-list">
        {details.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <div className="project-links">
        <a href={details.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {/* <a href={details.demo} target="_blank" rel="noopener noreferrer">Live Demo</a> */}
      </div>
    </div>
  );
};

export default ProjectDetail;
