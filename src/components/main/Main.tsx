import History from "../main/History";
import KeyFeatures from "./KeyFeatures";
import Heroes from "./Heroes";
import InputContainer from "./InputContainer";
import WishList from "./WishList";

import img1 from "../../assets/ELDENRING_05_4K.jpg";
import img2 from "../../assets/ELDENRING_08_4K.jpg";
import img3 from "../../assets/ELDENRING_12_4K.jpg";
import elden_line from "../../assets/elden-line.svg";
import ornament from '../../assets/Elden-ring-ornament-icon-feather-two 1.svg';


type Props = {
  width: number;
};

export default function Main({ width }: Props) {
  return (
    <main className="main-container">
      <History />
      <KeyFeatures width={width} />
      <Heroes />
      <span className="elden-line">
        <img src={elden_line} alt="eldenLine" />
      </span>
      <article className="article">
        <h1 className="title-article">Tarnished of the Lands Between</h1>
        <section className="paragraph-container">
          <p className="article-paragraph">
            The Golden Order has been shattered. Throughout the Lands Between,
            Demigods holding shards of the Elden Ring squabble and make war over
            the ruins of a perfect realm, now abandoned by the golden guidance
            of the Greater Will.
          </p>

          <p className="article-paragraph">
            As the echoes of this conflict thunder in the distance, an outcast
            arrives. Once, their ancestors called the Lands Between home, but
            the blessed light of grace was lost to their tribe long ago and they
            were expelled from the kingdom. They are the Tarnished, and they
            have returned to claim the Elden Lordship promised to them by
            legend.
          </p>

          <p className="article-paragraph">
            This is the world of ELDEN RING. As a Tarnished, the Lands Between
            await your exploration. You will ride through the vast fields,
            gallop over rolling hills, and leap to the top of rocky crags on
            your ephemeral steed, revealing a world teeming with life and
            danger.
          </p>

          <p className="article-paragraph">
            In the grand fields where your journey begins, mythic creatures
            prowl the veldts, ineffable horrors lurk in the bogs and marshes,
            and all manner of soldiers and itinerant warriors are waiting for
            those who wander unawares. Shy creatures nibble on sweet grasses or
            scuttle through the underbrush.
          </p>

          <p className="article-paragraph">
            Those few inhabitants who are not mad or hostile linger near the
            broken remnants of cities left behind by the Shattering. They may
            have answers for you, if you help them. Above them all, ensconced in
            vast legacies bristling with traps, secrets, and guardians, the
            Demigods - warped Lords who began as members of a royal and noble
            family - rule their domains with the unyielding power granted by
            shards of the Elden Ring.
          </p>
        </section>
      </article>
      <span className="elden-line">
        <img src={elden_line} alt="eldenLine" />
      </span>
      <div className="container-images">
        <img src={img1} alt="image-1" />
        <img src={img2} alt="image-2" />
        <img src={img3} alt="image-3" />
      </div>
      <span className="elden-line">
        <img src={elden_line} alt="eldenLine" />
      </span>
      <article className="paragraph-container">
        <p className="article-paragraph">
          The guidance of lost graces – should you find them - will put you on a
          road to re-take these lands from the Demigods through might and magic,
          but you need not follow their path.
        </p>
        <p className="article-paragraph">
          The choice is yours. Do you crave power, or do you seek understanding?
          Decide for yourself, then build your character as you see fit.
        </p>
        <p className="article-paragraph">
          Try dozens of skills and find one to best suit your style. Practice
          stealth to avoid danger or catch enemies unaware. Use the environment,
          the weather, and the time of day to gain an advantage. Learn the art
          of combat , where you must read your enemy's intentions and a
          well-timed dodge or parry could be the difference between life and
          death. Ride your steed into battle against mounted mercenaries and cut
          them from their horses. Master arcane spells from the masters that
          still linger among the ruins of the war. Summon familiar spirits to
          even the odds against you or call on your fellow Tarnished to fight at
          your side and share the burden as you explore. Or, delve into the
          complex, bloody history of the Shattering and discover the lost
          secrets of the Demigods and their kin. All these paths are possible,
          and more.
        </p>
        <p className="article-paragraph">
          Ultimately, your journey will be defined by the strength of your own
          ambition. The greater your goals, the greater the challenge will be.
          Should you choose to claim the Lands Between as your birthright then
          yes, you must fight.
        </p>
        <p className="article-paragraph">And yes, you may die.</p>
        <p className="article-paragraph">But you will return to fight again.</p>
        <p className="article-paragraph">
          For that is how a champion - or a Lord - is born.
        </p>
      </article>
      <span className="ornament-container">
        <img className="ornament" src={ornament} alt="ornament" />
      </span>
      <WishList />
      <InputContainer />
    </main>
  );
}
