import video1 from "..//../assets/videos/eldenring-kf-01-animated-new.webm";
import video2 from "..//../assets/videos/eldenring-kf-02-animated-new.webm";
import video3 from "..//../assets/videos/eldenring-kf-03-animated-new.webm";

import { useEffect, useRef } from "react";

export default function KeyFeatures() {
  const videosRef = useRef<NodeListOf<HTMLVideoElement> | null>(null);
  useEffect(() => {
    videosRef.current = document.querySelectorAll("video");

    if (!videosRef.current.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videosRef.current.forEach((video) => observer.observe(video));

    return () =>
      videosRef.current?.forEach((video) => observer.unobserve(video));
  }, []);

  return (
    <div className="key-wrapper">
      <h1 className="key-title">Key Features</h1>
      <div className="video-text-wrapper">
        <section className="video-container">
          <video>
            <source src={video1} type="video/webm" />
            Your browser can't play video
          </video>
        </section>
        <section className="text-container">
          <div className="text-container-title-1 margin-bottom">
            <h1>A NEW FANTASYWORLD</h1>
          </div>
          <p className="margin-bottom">
            Journey through the Lands Between, a new fantasy world created by
            Hidetaka Miyazaki, creator of the influential DARK SOULS video game
            series, and George R. R. Martin, author of The New York Times
            best-selling fantasy series, A Song of Ice and Fire.
          </p>

          <p>
            Unravel the mysteries of the Elden Ring’s power. Encounter
            adversaries with profound backgrounds, characters with their own
            unique motivations for helping or hindering your progress, and
            fearsome creatures.
          </p>
        </section>
      </div>

      <div className="video-text-wrapper">
        <section className="text-container-left">
          <div className="text-container-title-2 margin-bottom">
            <h1>WORLD EXPLORATION IN THE LANDS BETWEEN</h1>
          </div>
          <p className="margin-bottom">
            ELDEN RING features vast fantastical landscapes and shadowy, complex
            dungeons that are connected seamlessly.
          </p>

          <p>
            Traverse the breathtaking world on foot or on horseback, alone or
            online with other players, and fully immerse yourself in the grassy
            plains, suffocating swamps, spiraling mountains, foreboding castles
            and other sites of grandeur on a scale never seen before in a
            FromSoftware title.
          </p>
        </section>
        <section className="video-container-right">
          <video>
            <source src={video2} type="video/webm" />
            Your browser can't play video
          </video>
        </section>
      </div>
      <div className="video-text-wrapper">
        <section className="video-container">
          <video>
            <source src={video3} type="video/webm" />
            Your browser can't play video
          </video>
        </section>
        <section className="text-container">
          <div className="text-container-title-3 margin-bottom">
            <h1>GENRE-DEFINING GAMEPLAY </h1>
          </div>
          <p className="margin-bottom">
            Create your character in FromSoftware's refined action-RPG and
            define your playstyle by experimenting with a wide variety of
            weapons, magical abilities, and skills found throughout the world.
          </p>

          <p>
            Charge into battle, pick off enemies one-by-one using stealth, or
            even call upon allies for aid. Many options are at your disposal as
            you decide how to approach exploration and combat.
          </p>
        </section>
      </div>
    </div>
  );
}
