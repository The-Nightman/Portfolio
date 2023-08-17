import { Navbar } from "../components";
import errorImg from "../assets/error.png";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="separator" />
      <div className="error">
        <div className="error-container">
          <div className="error-text">
            <h1 className="error-header">404</h1>
            <p className="error-subheader">What are you looking for?</p>
            <p className="error-flavour">
              I don't know how or why you're here,
              <br />
              but before you go i just want you to know,
              <br />
              <span>you are...</span>
            </p>
          </div>
          <img className="error-image" src={errorImg} draggable="false" alt="You are Kenough" />
        </div>
      </div>
    </>
  );
};

export default Error;
