import { ReactComponent as GithubSVG } from "../assets/github.svg";

const ProjectCard = ({ image, name, body, repo, live, fullstack }) => {
  return (
    <article
      className="relative flex flex-col items-center h-[42rem] w-72 p-4 rounded-lg bg-gray-800"
      aria-label={`${name} project card`}
    >
      <img
        className="aspect-square w-full"
        src={image}
        alt={`${name} Project Preview Image`}
        draggable="false"
      />
      <h3 className="my-2 self-start text-primary text-lg font-medium">
        {name}
      </h3>
      <p className="break-words text-base">{body}</p>
      <div className="flex flex-row justify-between mt-auto">
        {!fullstack && !live ? (
          <a
            type="button"
            href={repo}
            target="_blank"
            className="group flex flex-row items-center m-2 p-2 rounded-md bg-accent hover:bg-accentComplementary text-white transition-colors duration-300"
            draggable="false"
            aria-label={`View ${name} repository`}
          >
            <GithubSVG className="w-4 mr-2 fill-accentComplementary group-hover:fill-accent transition-colors duration-300" />
            <span>Repository</span>
          </a>
        ) : fullstack && !live ? (
          <>
            <a
              type="button"
              href={repo[0]}
              target="_blank"
              className="group flex flex-row items-center m-2 p-2 rounded-md bg-accent hover:bg-accentComplementary text-white transition-colors duration-300"
              draggable="false"
              aria-label={`View ${name} front-end repository`}
            >
              <GithubSVG className="w-4 mr-2 fill-accentComplementary group-hover:fill-accent transition-colors duration-300" />
              <span>FE Repo</span>
            </a>
            <a
              type="button"
              href={repo[1]}
              target="_blank"
              className="group flex flex-row items-center m-2 p-2 rounded-md bg-accent hover:bg-accentComplementary text-white transition-colors duration-300"
              draggable="false"
              aria-label={`View ${name} back-end repository`}
            >
              <GithubSVG className="w-4 mr-2 fill-accentComplementary group-hover:fill-accent transition-colors duration-300" />
              <span>BE Repo</span>
            </a>
          </>
        ) : !fullstack && live ? (
          <>
            <a
              type="button"
              href={live}
              target="_blank"
              className="group flex flex-row items-center m-2 p-2 rounded-md bg-accent hover:bg-accentComplementary text-white transition-colors duration-300"
              draggable="false"
              aria-label={`View ${name} live app`}
            >
              <span>Live app</span>
            </a>
            <a
              type="button"
              href={repo}
              target="_blank"
              className="group flex flex-row items-center m-2 p-2 rounded-md bg-accent hover:bg-accentComplementary text-white transition-colors duration-300"
              draggable="false"
              aria-label={`View ${name} repository`}
            >
              <GithubSVG className="w-4 mr-2 fill-accentComplementary group-hover:fill-accent transition-colors duration-300" />
              <span>Repo</span>
            </a>
          </>
        ) : null}
      </div>
    </article>
  );
};

export default ProjectCard;
