/* eslint-disable react/prop-types */
import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
    return (
      <div className="project-card">
        <img src={project.image} alt={project.name} className="project-image" />
        <div className="project-info">
          <h3 className="pro-title">{project.name}</h3>
          <p className="project-description">{project.description}</p>
  
          <div className="tech-icons">
            {project.technologies.map((tech, index) => (
              <img key={index} src={tech.icon} alt={tech.name} title={tech.name} />
            ))}
          </div>
            
          <div className="buttons">
            <a href={project.preview} target="_blank" rel="noopener noreferrer" className="btn preview-btn">
              Preview
            </a>
            <a href={project.code} target="_blank" rel="noopener noreferrer" className="btn code-btn">
              Code
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
