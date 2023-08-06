import { ReactComponent as GithubSVG } from "../assets/github.svg";

const ProjectCard = ({ image, name, body, repo, live }) => {
  return (
    <div className="proj-card">
      <img src={image} width="250" height="250" />
      <p className="description">
        {name}
        <br />
        <br />
        {body}
      </p>
      <a
        type="button"
        href={repo}
        target="_blank"
        className="proj-1-button"
      >
        <GithubSVG className="project-github" />
        <span>Repository</span>
      </a>
    </div>
  );
};

export default ProjectCard;
