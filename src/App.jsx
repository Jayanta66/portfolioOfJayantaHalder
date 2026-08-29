import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import Freelance from "./components/Freelance";
import Certifications from "./components/Certifications";

import Aos from "aos";
import "aos/dist/aos.css"


const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])
 
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Freelance/>
        <Experience />
        <Skills />
        <Projects />
 {/*       <Certifications /> */}
        <Contact />
      </div>
    </>
  );
};

export default App;
