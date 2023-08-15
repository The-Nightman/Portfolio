import { ProjectCard } from "./";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <span className="tags">&lt;projects&gt;</span>
        <h2 className="projects-title">
          <span>projects</span>
          <span className="func">&#123;</span>
          <span>display</span>
          <span className="func">&#125;</span>
        </h2>
        <div className="projects-cards">
            {projects.map(({ image, name, body, repo, live }) => {
              return (
                <ProjectCard
                  key={name}
                  image={image}
                  name={name}
                  body={body}
                  repo={repo}
                  live={live}
                />
              );
            })}
        </div>
        <span className="tags">&lt;/projects&gt;</span>
      </section>
    </>
  );
};

export default Projects;
