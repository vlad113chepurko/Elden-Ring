import hero_1 from "../../assets/hero-1.svg";
import hero_2 from "../../assets/hero-2.svg";
import hero_3 from "../../assets/hero-3.svg";

import elden_line from "../../assets/elden-line.svg";

export default function Heroes() {
  return (
    <div className="heroes-container">
      <article className="heroes-article">
        <h1 className="heroes-title">Heroes</h1>
        <p className="heroes-paragraph">
          In the game you will meet many characters who influence its plot.
        </p>
      </article>
      <section className="heroes-images-wrapper">
        <i className="heroes-image-container">
          <img src={hero_1} alt="hero" />
        </i>
        <i className="heroes-image-container">
          <img src={hero_2} alt="hero" />
        </i>
        <i className="heroes-image-container">
          <img src={hero_3} alt="hero" />
        </i>
      </section>
      <span className="elden-line">
        <img src={elden_line} alt="eldenLine" />
      </span>
    </div>
  );
}
