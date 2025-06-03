import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Skills />
      <Portfolio />
      <Experience />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
