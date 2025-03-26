import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Loading } from "./components/Loading";
import { Hero } from "./components/Hero";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

function App() {
  return (
    <main>
      <Loading />
      <Hero />
    </main>
  );
}

export default App;
