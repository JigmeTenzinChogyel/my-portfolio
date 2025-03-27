import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Loading } from "./components/Loading";
import { Hero } from "./components/Hero";

gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

function App() {
  return (
    <main>
      <Loading />
      <Hero />
    </main>
  );
}

export default App;
