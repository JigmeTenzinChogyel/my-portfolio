import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export const Hero = () => {
  const tl = useRef<gsap.core.Timeline>(null);
  const heroText = `I design and develop engaging, visually captivating digital experiences through code`;
  const meText = `I am Jigme Tenzin Chogyel, a Software Engineer`;
  const locationText = `Based in Thimphu, Bhutan`;
  const delay = 3.5;

  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .to(".heroText", {
        text: heroText,
      })
      .to(".meText", {
        text: meText,
      })
      .to(".locationText", { text: locationText })
      .duration(4)
      .delay(delay);
    gsap.from(".heroProgress", {
      delay: delay,
      opacity: 0,
      scaleX: 0,
      duration: 3,
      transformOrigin: "0px 0px",
    });
  });

  return (
    <section
      style={{
        padding: "2% 4% ",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "start",
        gap: "0.7rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed",
          width: "100%",
          padding: "2% 4% ",
          top: "0",
          left: "0",
        }}
      >
        <h1>JigmeTenzinChogyel</h1>
        <nav>
          <ul
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              listStyle: "none",
            }}
          >
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
          </ul>
        </nav>
      </div>

      <h2 className="heroText" />
      <div
        className="heroProgress"
        style={{
          height: "0.1rem",
          width: "75%",
          backgroundColor: "black",
          borderRadius: "15%",
        }}
      />
      <p className="meText" />
      <p className="locationText" />
    </section>
  );
};
