import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export const Loading = () => {
  const container = useRef<HTMLHeadingElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);
  useGSAP(() => {
    tl.current = gsap
      .timeline()
      .from(".name", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
      })
      .from(".progress", {
        opacity: 0,
        delay: 1,
        scaleX: 0,
        transformOrigin: "0px 0px",
      })
      .to(".loading", {
        y: "-100%",
        opacity: 0.9,
      })
      .duration(3);
  });
  return (
    <div
      ref={container}
      className="loading"
      style={{
        position: "fixed",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#050301",
        color: "white",
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="name">Jigme</h1>
          <h1 className="name">Tenzin</h1>
          <h1 className="name">Chogyel</h1>
        </div>
        <div
          className="progress"
          style={{
            height: "0.2rem",
            width: "75%",
            backgroundColor: "white",
            borderRadius: "15%",
          }}
        />
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "3rem",
        }}
      >
        <p>Loading...</p>
        <p>Get Blown Away</p>
      </div>
    </div>
  );
};
