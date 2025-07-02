import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Loading } from "./components/Loading";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

gsap.registerPlugin(useGSAP, TextPlugin, ScrollTrigger);

function App() {
  return (
    <main>
      <Loading />
      <Hero />
      <Work />
      <About />
      <Contact />
    </main>
  );
}

export default App;
