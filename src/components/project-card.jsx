import { ReactComponent as GithubSVG } from "../assets/github.svg";

const ProjectCard = ({ image, name, body, repo, live, fullstack }) => {
  const buttonDict = {
    1: (
      <div className="flex flex-row justify-between mt-auto">
        <a
          type="button"
          href={repo}
          target="_blank"
          className="group flex flex-row items-center m-2 p-2 rounded-md bg-accent hover:bg-accentComplementary text-white font-semibold transition-colors duration-300"
          draggable="false"
          aria-label={`View ${name} repository`}
        >
          <GithubSVG className="w-4 mr-2 fill-accentComplementary group-hover:fill-accent transition-colors duration-300" />
          <span>Repository</span>
        </a>
      </div>
    ),
    2: (
      <div className="flex flex-row justify-between mt-auto">
        <a
          type="button"
          href={repo[0]}
          target="_blank"
          className="group flex flex-row items-center m-2 p-2 rounded-md bg-accent hover:bg-accentComplementary text-white font-semibold transition-colors duration-300"
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
          className="group flex flex-row items-center m-2 p-2 rounded-md bg-accent hover:bg-accentComplementary text-white font-semibold transition-colors duration-300"
          draggable="false"
          aria-label={`View ${name} back-end repository`}
        >
          <GithubSVG className="w-4 mr-2 fill-accentComplementary group-hover:fill-accent transition-colors duration-300" />
          <span>BE Repo</span>
        </a>
      </div>
    ),
    3: (
      <div className="flex flex-row justify-between mt-auto">
        <a
          type="button"
          href={live}
          target="_blank"
          className="group flex flex-row items-center m-2 p-2 rounded-md bg-accent hover:bg-accentComplementary text-white font-semibold transition-colors duration-300"
          draggable="false"
          aria-label={`View ${name} live app`}
        >
          <span>Live app</span>
        </a>
        <a
          type="button"
          href={repo}
          target="_blank"
          className="group flex flex-row items-center m-2 p-2 rounded-md bg-accent hover:bg-accentComplementary text-white font-semibold transition-colors duration-300"
          draggable="false"
          aria-label={`View ${name} repository`}
        >
          <GithubSVG className="w-4 mr-2 fill-accentComplementary group-hover:fill-accent transition-colors duration-300" />
          <span>Repo</span>
        </a>
      </div>
    ),
    4: (
      <div className="flex flex-col items-center mt-auto">
        <div className="flex flex-row justify-between">
          <a
            type="button"
            href={repo[0]}
            target="_blank"
            className="group flex flex-row items-center m-2 p-2 rounded-md bg-accent hover:bg-accentComplementary text-white font-semibold transition-colors duration-300"
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
            className="group flex flex-row items-center m-2 p-2 rounded-md bg-accent hover:bg-accentComplementary text-white font-semibold transition-colors duration-300"
            draggable="false"
            aria-label={`View ${name} back-end repository`}
          >
            <GithubSVG className="w-4 mr-2 fill-accentComplementary group-hover:fill-accent transition-colors duration-300" />
            <span>BE Repo</span>
          </a>
        </div>
        <a
          type="button"
          href={live}
          target="_blank"
          className="group flex flex-row items-center m-2 p-2 rounded-md bg-accent hover:bg-accentComplementary text-white font-semibold transition-colors duration-300"
          draggable="false"
          aria-label={`View ${name} live app`}
        >
          <span>Live app</span>
        </a>
      </div>
    ),
  };

  const buttonCase = (fullstack, live) => {
    if (!fullstack && !live) return 1;
    if (fullstack && !live) return 2;
    if (!fullstack && live) return 3;
    if (fullstack && live) return 4;
    return null;
  };

  return (
    <article
      className="relative flex flex-col items-center h-[42rem] w-72 p-4 pb-2 rounded-lg bg-gray-800"
      aria-label={`${name} project card`}
    >
      <img
        className="aspect-square w-full"
        src={image}
        alt={`${name} Project Preview Image`}
        draggable="false"
      />
      <h3 className="mt-2 mb-1 self-start text-primary text-lg font-medium">
        {name}
      </h3>
      <p className="break-words">{body}</p>
      {buttonDict[buttonCase(fullstack, live)]}
    </article>
  );
};

export default ProjectCard;
