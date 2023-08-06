export default NavMobile = () => {
  return (
    <nav className="header-navbar">
      <ul>
        <li>
          <a href="/">K.dev()</a>
        </li>
        <li>
          <a href="/about">.about()</a>
        </li>
        <li>
          <a href="#">.email()</a>
        </li>
        <div className="navbar-icons">
          <li className="github" title="GitHub">
            <a href="https://github.com/The-Nightman" target="_blank">
              <GithubSVG />
            </a>
          </li>
          <li className="linkedin" title="LinkedIn">
            <a href="https://www.linkedin.com/in/keenan-brant/" target="_blank">
              <LinkedinSVG />
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};
