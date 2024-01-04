import { ReactComponent as GithubSVG } from "../assets/github.svg";

const ProjectCard = ({ image, name, body, repo, live, fullstack }) => {
  return (
    <div className="proj-card">
      <img src={image} alt={`${name} Project Preview Image`} width="250" height="250" draggable="false" />
      <p className="description">
        {name}
        <br />
        <br />
        {body}
      </p>
      <div className="proj-buttons-container">
        {!fullstack && !live ? (
          <a
            type="button"
            href={repo}
            target="_blank"
            className="proj-button"
            draggable="false"
            aria-label={`View ${name} repository`}
          >
            <GithubSVG className="project-github" />
            <span>Repository</span>
          </a>
        ) : fullstack && !live ? (
          <>
            <a
              type="button"
              href={repo[0]}
              target="_blank"
              className="proj-button"
              draggable="false"
              aria-label={`View ${name} front-end repository`}
            >
              <GithubSVG className="project-github" />
              <span>FE Repo</span>
            </a>
            <a
              type="button"
              href={repo[1]}
              target="_blank"
              className="proj-button"
              draggable="false"
              aria-label={`View ${name} back-end repository`}
            >
              <GithubSVG className="project-github" />
              <span>BE Repo</span>
            </a>
          </>
        ) : !fullstack && live ? (
          <>
            <a
              type="button"
              href={live}
              target="_blank"
              className="proj-button"
              draggable="false"
              aria-label={`View ${name} live app`}
            >
              <span>Live app</span>
            </a>
            <a
              type="button"
              href={repo}
              target="_blank"
              className="proj-button"
              draggable="false"
              aria-label={`View ${name} repository`}
            >
              <GithubSVG className="project-github" />
              <span>Repo</span>
            </a>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
