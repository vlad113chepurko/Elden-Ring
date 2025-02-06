import gitHub from "../assets/InputContainer/GitHub.svg";
import linkedIn from "../assets/InputContainer/LinkedInCircled.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <section>
        <h3 className="margin-bottom">Follow Me</h3>
        <ul>
          <li className="wrapper-li">
            <a href="https://github.com/vlad113chepurko">
              <img src={gitHub} alt="GitHub" />
            </a>
            <a href="https://github.com/vlad113chepurko">GitHub</a>
          </li>
          <li className="wrapper-li">
            <a href="www.linkedin.com/in/vlad-chepurko-0953b32b0">
              <img src={linkedIn} alt="linkedIn" />
            </a>
            <a href="https://github.com/vlad113chepurko">LinkedIn</a>
          </li>
        </ul>
      </section>
      <p>© 2025 Elden Ring. All rights reserved.</p>
    </footer>
  );
}
