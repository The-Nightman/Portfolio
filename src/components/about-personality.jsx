const AboutPersonality = () => {
  return (
    <>
      <section className="flex flex-col mb-8">
        <h2 className="mb-4 text-2xl font-bold">Also getting on with</h2>
        <ul className="flex flex-col gap-2 lg:grid lg:grid-cols-4 xl:gap-6">
          <li>
            <p>
              <span aria-hidden>//</span> Competitive Powerlifting
            </p>
          </li>
          <li>
            <p>
              <span aria-hidden>//</span> Road Trips and Mountains
            </p>
          </li>
          <li>
            <p>
              <span aria-hidden>//</span> Video Games
            </p>
          </li>
          <li>
            <p>
              <span aria-hidden>//</span> Bi/Pan Visibility
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default AboutPersonality;
