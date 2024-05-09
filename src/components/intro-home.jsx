const IntroHome = () => {
  return (
    <>
      <section className="flex flex-col min-h-[60vh]">
        <span className="my-16 text-accent select-none" aria-hidden>
          {"<intro>"}
        </span>
        <h1 className="text-5xl font-bold text-primary">
          KBrant
          <span className="text-accent">
            .dev<span aria-hidden>()</span>
          </span>
        </h1>
        <p className="text-[2rem]/[1.2] text-accent">Keenan Brant</p>
        <p>
          Junior Software Developer
          <br />
          based in the UK
        </p>
        <span className="text-accent my-16 select-none" aria-hidden>
          {"</intro>"}
        </span>
      </section>
    </>
  );
};

export default IntroHome;
