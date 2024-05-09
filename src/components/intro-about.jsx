import { GithubSVG, LinkedinSVG, CvButton } from "../assets";
import cvPDF from "../assets/Keenan Brant CV.pdf";

const IntroAbout = () => {
  return (
    <>
      <section className="flex flex-col mb-16 min-h-[35vh]">
        <h1 className="text-[2.5rem]/[3rem] text-accent font-bold">
          Keenan Brant
        </h1>
        <div className="flex flex-row gap-4 my-4">
          <a
            href="https://github.com/The-Nightman"
            title="GitHub"
            aria-label="GitHub"
            target="_blank"
            draggable="false"
          >
            <GithubSVG className="w-12 fill-accent hover:fill-accentComplementary transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/keenan-brant/"
            title="Linked in"
            aria-label="Linked in"
            target="_blank"
            draggable="false"
          >
            <LinkedinSVG className="w-12 fill-accent hover:fill-accentComplementary transition-colors duration-300" />
          </a>
        </div>
        <a
          href={cvPDF}
          title="Open CV"
          aria-label="Open Cv"
          target="_blank"
          draggable="false"
        >
          <CvButton className="mb-4 fill-accent hover:fill-accentComplementary transition-colors duration-300" />
        </a>
        <p className="mb-4">
          <span className="block">Junior Software Developer</span>
          <span className="block">based in the UK</span>
        </p>
        <p>
          <span aria-hidden>// </span>Music and Gym addict, concept art fan and
          video game fiend
        </p>
      </section>
    </>
  );
};

export default IntroAbout;
