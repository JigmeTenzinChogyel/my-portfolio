import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export const Hero = () => {
  const tl = useRef<gsap.core.Timeline>(null);

  useGSAP(() => {
    tl.current = gsap.timeline().from(".heroText", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
    });
    //   .from(".progress", {
    //     opacity: 0,
    //     delay: 1,
    //     duration: 1,
    //     scaleX: 0,
    //     transformOrigin: "0px 0px",
    //   })
    //   .to(".loading", {
    //     y: -1000,
    //     duration: 1,
    //     opacity: 0.9,
    //   });
  });

  const heroText = `I design and develop engaging, visually captivating digital experiences through code.`;
  const meText = `I am Mohit Tiwari, a 13 year old teenager from`;
  const locationText = ` Uttar Pradesh, India.`;
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

      <h2 className="heroText">{heroText}</h2>
      <div
        style={{
          borderTop: "2px solid black",
          width: "70%",
        }}
      />
      <p>{meText}</p>
      <p>{locationText}</p>
    </section>
  );
};
