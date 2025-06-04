import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
