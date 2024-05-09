const AboutSkills = () => {
  return (
    <>
      <section className="flex flex-col mb-8">
        <h2 className="mb-4 text-2xl font-bold">Skills</h2>
        <ul className="grid w-11/12 [grid-template: 1fr / 1fr] sm:grid-cols-3 gap-4 sm:gap-8">
          <li>
            <p>
              <span aria-hidden>/*</span> HTML, CSS, Tailwind, JavaScript, Node,
              Express, React, React Native, C#, .NET 7, ASP.NET core, SQL,
              PostgreSQL, Python, SVG <span aria-hidden>*/</span>
            </p>
          </li>
          <li>
            <p>
              <span aria-hidden>/*</span> TDD (Jest, Swagger, Insomnia), MVC,
              RESTful API, GitHub Actions, UX/UI <span aria-hidden>*/</span>
            </p>
          </li>
          <li>
            <p>
              <span aria-hidden>/*</span> Adobe Illustrator, Adobe Photoshop,
              Adobe Xd, Figma <span aria-hidden>*/</span>
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default AboutSkills;
