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
        className="made-with"
      >
        <h2 className="tags">/*This site was built with*/</h2>
        <div className="made-with-grid">
          <ul className="col-tools">
            <h3 ref={ref} className="made-with-col-title">
              <span>def</span>
              <span className="func">(</span>
              <span>_tools</span>
              <span className="func">)</span>
            </h3>
            <li>
              <span>// HTML</span>
            </li>
            <li>
              <span>// CSS</span>
            </li>
            <li>
              <span>// JavaScript</span>
            </li>
            <li>
              <span>// React</span>
            </li>
            <li>
              <span>// Framer Motion</span>
            </li>
            <li>
              <span>// Adobe Illustrator</span>
            </li>
            <li>
              <span>// Adobe Photoshop</span>
            </li>
            <li>
              <span>// One Easter Egg</span>
            </li>
          </ul>
          <ul className="col-music">
            <h3 className="made-with-col-title">
              <span>def</span>
              <span className="func">(</span>
              <span>_music</span>
              <span className="func">)</span>
            </h3>
            <li>
              <a
                href="https://open.spotify.com/track/7wdwIaXUuzlu1grzWMFRJm?si=5abfe714ff464a5b"
                target="_blank"
              >
                // Ghost
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/7ISL3LO8AWP3fKIXunvqTa?si=33420d9f1d94451a"
                target="_blank"
              >
                // Wolfmother
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/0wvIGFIgbyz4JNwQhZgTv2?si=f5645a70cd954fa3"
                target="_blank"
              >
                // Alice In Chains
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/3LPgJC2BDy9Ji8QBhwioI2?si=35beb7a46d4a487b"
                target="_blank"
              >
                // Spoon
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/5OQsiBsky2k2kDKy2bX2eT?si=526b8f04876347b9"
                target="_blank"
              >
                // Foo Fighters
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/6pC4bAgzuhOyLJPxsZSQxi?si=cb623072573f4a61"
                target="_blank"
              >
                // Temples
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/1iDcKYNvo6gglrOG6lvnHL?si=e4c0935b585e4811"
                target="_blank"
              >
                // The Rolling Stones
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/2AxCeJ6PSsBYiTckM0HLY7?si=dfb20acbd44241df"
                target="_blank"
              >
                // Jimmy Hendrix
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/47W6YR93MPCGLEUReLMyDm?si=d8b7339b381c4408"
                target="_blank"
              >
                // Jamiroquai
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/5Vx3Cb6AM8TNqQqkwIMDh4?si=89a63267534843ba"
                target="_blank"
              >
                // Turbowolf
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/2gYriPqWA8iAKKP2pgW3OR?si=8e82352bdc4645da"
                target="_blank"
              >
                // Erric Holmes
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/2BSEWKPGXooXHbDDle1noH?si=a8c6c59064fa4a74"
                target="_blank"
              >
                // Suspended 4th
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/track/1ITSmdk6J2yWwMNH2FOU79?si=bbc6efbb33544120"
                target="_blank"
              >
                // Martin O'Donnell
              </a>
            </li>
          </ul>
        </div>
      </motion.section>
    </>
  );
};

export default MadeWith;
