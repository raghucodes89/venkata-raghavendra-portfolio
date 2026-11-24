
import Navbar from './components/Navbar';

import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';


import './styles/global.css';
import './styles/animations.css';

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">

          <p className="hero-label">
            PORTFOLIO — 2026
          </p>

          <h1>
            Building digital
            <br />
            <span>experiences.</span>
          </h1>

          <p className="hero-description">
            Hello, I'm Raghu. An aspiring Backend Developer
            passionate about Python, AI and building
            meaningful digital products.
          </p>

          <a href="#projects" className="hero-button">
            Explore my work ↗
          </a>

          <div className="hero-avatar">
            <img
              src="/images/raghu-avatar.png"
              alt="Raghu - Developer Avatar"
            />
          </div>

        </section>

        {/* Portfolio Sections */}
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />

      </main>
    </>
  );
}

export default App;
