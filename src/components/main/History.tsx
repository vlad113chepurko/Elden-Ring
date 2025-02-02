import elden_tree from "..//../assets/elden-tree.png";

export default function History() {
  return (
    <div className="history-container">
      <h1 className="margin">ELDEN RING</h1>
      <div className="history-container-wrapper">
        <article className="article-text-container ">
          <h1>The Golden Order has been broken</h1>
          <p className="margin-bottom">
            Rise, Tarnished, and be guided by grace to brandish the power of the
            Elden Ring and become an Elden Lord in the Lands Between.
          </p>
          <p className="margin-bottom">
            In the Lands Between ruled by Queen Marika the Eternal, the Elden
            Ring, the source of the Erdtree, has been shattered.
          </p>
          <p className="margin-bottom">
            Marika's offspring, demigods all, claimed the shards of the Elden
            Ring known as the Great Runes, and the mad taint of their newfound
            strength triggered a war: The Shattering. A war that meant
            abandonment by the Greater Will.
          </p>
          <p className="margin-bottom">
            And now the guidance of grace will be brought to the Tarnished who
            were spurned by the grace of gold and exiled from the Lands Between.
            Ye dead who yet live, your grace long lost, follow the path to the
            Lands Between beyond the foggy sea to stand before the Elden Ring.
          </p>
          <p>And become the Elden Lord.</p>
        </article>
        <section className="section-elden-tree">
          <i className="elden-tree-container-image">
            <img className="elden-tree" src={elden_tree} alt="elden_tree" />
          </i>
        </section>
      </div>
    </div>
  );
}
