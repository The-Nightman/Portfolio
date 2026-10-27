const AboutSkills = () => {
  return (
    <>
      <section className="flex flex-col mb-8">
        <h2 className="mb-4 text-2xl font-bold">Skills</h2>
        <ul className="grid w-11/12 md:w-full [grid-template: 1fr / 1fr] sm:grid-cols-3 gap-4 sm:gap-8">
          <li>
            <p>
              <span aria-hidden>/* </span>HTML, CSS, Tailwind, JavaScript,
              TypeScript, Node, Express, React/React Native, Vue.JS, Next.JS,
              C#/.NET, ASP.NET, Entity Framework, SQL (SQLite, MySQL,
              PostgreSQL), Python, Flask
              <span aria-hidden> */</span>
            </p>
          </li>
          <li>
            <p>
              <span aria-hidden>/* </span>Agile, Test Driven Development (Jest,
              NUnit, NSubstitute, Swagger, Postman/Insomnia), MVC, RESTful API,
              UX/UI, GitHub Actions, Docker
              <span aria-hidden> */</span>
            </p>
          </li>
          <li>
            <p>
              <span aria-hidden>/* </span>Adobe Illustrator, Adobe Photoshop,
              Figma<span aria-hidden> */</span>
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default AboutSkills;
