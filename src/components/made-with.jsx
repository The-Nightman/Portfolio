import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const MadeWith = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.section
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 1 }}
        initial="hidden"
        animate={controls}
        className="pb-40"
      >
        <h2 className="mt-16 mb-8 text-accent text-2xl font-bold">
          <span aria-hidden>/*</span>This site was built with
          <span aria-hidden>*/</span>
        </h2>
        <div className="grid auto-cols-max md:grid-cols-[max-content_max-content] auto-rows-auto md:grid-rows-1 gap-16 md:gap-32">
          <section>
            <h3 ref={ref} className="mb-2 text-primary text-lg font-bold">
              <span aria-hidden>
                def
                <span className="text-accent">(</span>
                _tools
                <span className="text-accent">)</span>
              </span>
              <span className="sr-only">Made with tools</span>
            </h3>
            <ul className="text-accent">
              <li>
                <span aria-hidden>//</span>
                <span> HTML</span>
              </li>
              <li>
                <span aria-hidden>//</span>
                <span> Tailwind CSS</span>
              </li>
              <li>
                <span aria-hidden>//</span>
                <span> JavaScript</span>
              </li>
              <li>
                <span aria-hidden>//</span>
                <span> React</span>
              </li>
              <li>
                <span aria-hidden>//</span>
                <span> Framer Motion</span>
              </li>
              <li>
                <span aria-hidden>//</span>
                <span> Adobe Illustrator</span>
              </li>
              <li>
                <span aria-hidden>//</span>
                <span> Adobe Photoshop</span>
              </li>
              <li>
                <span aria-hidden>//</span>
                <span> One Easter Egg</span>
              </li>
            </ul>
          </section>
          <section>
            <h3 className="mb-2 text-primary text-lg font-bold">
              <span aria-hidden>
                <span>def</span>
                <span className="text-accent">(</span>
                <span>_music</span>
                <span className="text-accent">)</span>
              </span>
              <span className="sr-only">My music</span>
            </h3>
            <ul className="text-accent">
              <li>
                <a
                  className="hover:text-accentComplementary transition-colors duration-300"
                  href="https://open.spotify.com/track/7wdwIaXUuzlu1grzWMFRJm?si=5abfe714ff464a5b"
                  target="_blank"
                >
                  <span aria-hidden>//</span>
                  <span> Ghost</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accentComplementary transition-colors duration-300"
                  href="https://open.spotify.com/track/7ISL3LO8AWP3fKIXunvqTa?si=33420d9f1d94451a"
                  target="_blank"
                >
                  <span aria-hidden>//</span>
                  <span> Wolfmother</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accentComplementary transition-colors duration-300"
                  href="https://open.spotify.com/track/0wvIGFIgbyz4JNwQhZgTv2?si=f5645a70cd954fa3"
                  target="_blank"
                >
                  <span aria-hidden>//</span>
                  <span> Alice In Chains</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accentComplementary transition-colors duration-300"
                  href="https://open.spotify.com/track/3LPgJC2BDy9Ji8QBhwioI2?si=35beb7a46d4a487b"
                  target="_blank"
                >
                  <span aria-hidden>//</span>
                  <span> Spoon</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accentComplementary transition-colors duration-300"
                  href="https://open.spotify.com/track/5OQsiBsky2k2kDKy2bX2eT?si=526b8f04876347b9"
                  target="_blank"
                >
                  <span aria-hidden>//</span>
                  <span> Foo Fighters</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accentComplementary transition-colors duration-300"
                  href="https://open.spotify.com/track/6pC4bAgzuhOyLJPxsZSQxi?si=cb623072573f4a61"
                  target="_blank"
                >
                  <span aria-hidden>//</span>
                  <span> Temples</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accentComplementary transition-colors duration-300"
                  href="https://open.spotify.com/track/1iDcKYNvo6gglrOG6lvnHL?si=e4c0935b585e4811"
                  target="_blank"
                >
                  <span aria-hidden>//</span>
                  <span> The Rolling Stones</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accentComplementary transition-colors duration-300"
                  href="https://open.spotify.com/track/2AxCeJ6PSsBYiTckM0HLY7?si=dfb20acbd44241df"
                  target="_blank"
                >
                  <span aria-hidden>//</span>
                  <span> Jimmy Hendrix</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accentComplementary transition-colors duration-300"
                  href="https://open.spotify.com/track/47W6YR93MPCGLEUReLMyDm?si=d8b7339b381c4408"
                  target="_blank"
                >
                  <span aria-hidden>//</span>
                  <span> Jamiroquai</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accentComplementary transition-colors duration-300"
                  href="https://open.spotify.com/track/5Vx3Cb6AM8TNqQqkwIMDh4?si=89a63267534843ba"
                  target="_blank"
                >
                  <span aria-hidden>//</span>
                  <span> Turbowolf</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accentComplementary transition-colors duration-300"
                  href="https://open.spotify.com/track/2gYriPqWA8iAKKP2pgW3OR?si=8e82352bdc4645da"
                  target="_blank"
                >
                  <span aria-hidden>//</span>
                  <span> Elliot Holmes</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accentComplementary transition-colors duration-300"
                  href="https://open.spotify.com/track/2BSEWKPGXooXHbDDle1noH?si=a8c6c59064fa4a74"
                  target="_blank"
                >
                  <span aria-hidden>//</span>
                  <span> Suspended 4th</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accentComplementary transition-colors duration-300"
                  href="https://open.spotify.com/track/1ITSmdk6J2yWwMNH2FOU79?si=bbc6efbb33544120"
                  target="_blank"
                >
                  <span aria-hidden>//</span>
                  <span> Martin O'Donnell</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accentComplementary transition-colors duration-300"
                  href="https://open.spotify.com/track/15DKVRxHhKqRmIE2L6G82h?si=7e73be1984ed46bf"
                  target="_blank"
                >
                  <span aria-hidden>//</span>
                  <span> CASIOPEA</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accentComplementary transition-colors duration-300"
                  href="https://open.spotify.com/track/4CpLkaW3Hjr8sIKvdA5I0t?si=2108b6a2a69a4c15"
                  target="_blank"
                >
                  <span aria-hidden>//</span>
                  <span> Delicate Steve</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </motion.section>
    </>
  );
};

export default MadeWith;
