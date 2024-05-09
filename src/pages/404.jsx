import { Navbar } from "../components";
import errorImg from "../assets/error.png";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="absolute flex flex-col min-h-[calc(100%-(9vh+4rem))] items-center justify-between">
        <div className="flex flex-col text-center">
          <h1 className="text-accent text-9xl font-bold">404</h1>
          <p className="mb-4 text-primary text-[1.4rem]/[1.75rem] sm:text-[2rem]/[2.5rem] font-medium">
            What are you looking for?
          </p>
          <p className="mb-12 sm:mb-0 text-xl">
            I don't know how or why you're here,
            <br />
            but before you go i just want you to know,
            <br />
            <span className="text-accentComplementary">you are...</span>
          </p>
        </div>
        <img
          className="w-full sm:w-[40%] lg:w-[30%]"
          src={errorImg}
          draggable="false"
          alt="You are Kenough"
        />
      </div>
    </>
  );
};

export default Error;
