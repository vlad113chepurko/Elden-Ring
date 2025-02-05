// import inputContainerImage from "../../assets/InputContainer/Test.png";

import gitHub from "../../assets/InputContainer/GitHub.svg";
import linkedIn from "../../assets/InputContainer/LinkedInCircled.svg";
import instagram from "../../assets/InputContainer/InstagramCircle.svg";

export default function InputContainer() {
  return (
    <div className="input-container-main-wrapper">
      <div className="input-links-container-wrapper">
        <div className="input-container">
          <section className="input-container-section">
            <h1 className="input-container-title margin-bottom">
              Don't miss any news
            </h1>
            <p className="input-container-paragraph">
              Get the latest updates from our products and services
            </p>
            <input type="text" placeholder="Your Email" />
          </section>
        </div>
        <div className="links-container">
          <section className="input-container-section">
            <h1 className="input-container-title margin-bottom">FOLLOW US</h1>
            <p className="input-container-paragraph">
              Become part of the community
            </p>

            <nav className="links-container-nav">
              <a href="https://github.com/vlad113chepurko">
                <img src={gitHub} alt="GitHub" />
              </a>
              <a href="www.linkedin.com/in/vlad-chepurko-0953b32b0">
                <img src={linkedIn} alt="LinkedIn" />
              </a>
              <a href="#">
                <img src={instagram} alt="Instagram" />
              </a>
            </nav>
          </section>
        </div>
      </div>

      <div className="input-container-submit-container">
        <article className="input-container-submit-container-article">
          <h1 className="margin-bottom">SEEK FRO HELP? </h1>
          <p className="margin-bottom">We may have a solution for you!</p>
        </article>
        <button className="input-container-submit-container-article-button ">
          ASK THE SUPPORT TEAM
        </button>
      </div>
    </div>
  );
}
