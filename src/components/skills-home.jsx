import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import {
  HtmlSVG,
  CssSVG,
  JavaScriptSVG,
  ReactSVG,
  NodeSVG,
  ExpressSVG,
  PsqlSVG,
  DotnetSVG,
  CSharpSVG,
  TailwindSVG,
  ReactNativeSVG,
} from "../assets";

const SkillsHome = () => {
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
        className="flex flex-col min-h-[70vh]"
      >
        <span className="text-accent my-16 select-none" aria-hidden>
          {"<skills>"}
        </span>
        <h2
          ref={ref}
          className="text-primary text-[1.6rem]/[1.975rem] font-bold"
        >
          <span aria-hidden>
            <span>developing</span>
            <span className="text-accent">.skills(</span>
            <span>in</span>
            <span className="text-accent">)</span>
          </span>
          <span className="sr-only">Developing skills in:</span>
        </h2>
        <p>
          <span aria-hidden>/*</span>view more skills in about
          <span aria-hidden>*/</span>
        </p>
        <p>
          <span className="xl:hidden">
            <span aria-hidden>/*</span>Hold to view<span aria-hidden>*/</span>
          </span>
          <span className="hidden xl:block">
            <span aria-hidden>/*</span>Hover to view<span aria-hidden>*/</span>
          </span>
        </p>
        <ul className="inline-flex flex-wrap gap-6 mt-4">
          <Tooltip title="HTML" followCursor>
            <li>
              <span className="sr-only">HTML</span>
              <HtmlSVG className="h-[3.75rem] w-[3.75rem]" />
            </li>
          </Tooltip>
          <Tooltip title="CSS" followCursor>
            <li>
              <span className="sr-only">CSS</span>
              <CssSVG className="h-[3.75rem] w-[3.75rem]" />
            </li>
          </Tooltip>
          <Tooltip title="TailwindCSS" followCursor>
            <li>
              <span className="sr-only">Tailwind CSS</span>
              <TailwindSVG className="h-[3.75rem] w-[3.75rem]" />
            </li>
          </Tooltip>
          <Tooltip title="JavaScript" followCursor>
            <li>
              <span className="sr-only">JavaScript</span>
              <JavaScriptSVG className="h-[3.75rem] w-[3.75rem]" />
            </li>
          </Tooltip>
          <Tooltip title="React" followCursor>
            <li>
              <span className="sr-only">React JS</span>
              <ReactSVG className="h-[3.75rem] w-[3.75rem]" />
            </li>
          </Tooltip>
          <Tooltip title="React Native" followCursor>
            <li>
              <span className="sr-only">React Native</span>
              <ReactNativeSVG className="h-[3.75rem] w-[3.75rem]" />
            </li>
          </Tooltip>
          <Tooltip title="Node JS" followCursor>
            <li>
              <span className="sr-only">Node JS</span>
              <NodeSVG className="h-[3.75rem] w-[3.75rem]" />
            </li>
          </Tooltip>
          <Tooltip title="Express JS" followCursor>
            <li>
              <span className="sr-only">Express JS</span>
              <ExpressSVG className="h-[3.75rem] w-[3.75rem]" />
            </li>
          </Tooltip>
          <Tooltip title="C# (C Sharp)" followCursor>
            <li>
              <span className="sr-only">C Sharp</span>
              <CSharpSVG className="h-[3.75rem] w-[3.75rem]" />
            </li>
          </Tooltip>
          <Tooltip title=".Net 7 / ASP.NET Core" followCursor>
            <li>
              <span className="sr-only">Dotnet 7 / ASP.NET Core</span>
              <DotnetSVG className="h-[3.75rem] w-[3.75rem]" />
            </li>
          </Tooltip>
          <Tooltip title="PostgreSql" followCursor>
            <li>
              <span className="sr-only">PostgreSql</span>
              <PsqlSVG className="h-[3.75rem] w-[3.75rem]" />
            </li>
          </Tooltip>
        </ul>
        <span className="text-accent my-16 select-none" aria-hidden>
          {"</skills>"}
        </span>
      </motion.section>
    </>
  );
};

export default SkillsHome;
