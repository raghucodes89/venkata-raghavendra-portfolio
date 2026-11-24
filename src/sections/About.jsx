
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">01 — ABOUT ME</p>

          <h2>
            Turning ideas into
            <br />
            <span>digital reality.</span>
          </h2>
        </motion.div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Venkata Raghavendra, a Backend Developer
              and AI/ML enthusiast passionate about
              building useful digital products.
            </p>

            <p>
              I work with Python, FastAPI, databases
              and modern frontend technologies.
              I enjoy learning new technologies,
              solving problems and turning ideas
              into working applications.
            </p>

            <p>
              Currently, I'm focused on strengthening
              my software development skills and
              exploring AI-powered applications.
            </p>
          </div>

          <div className="about-details">
            <div>
              <span>01</span>
              <h3>Backend Development</h3>
              <p>Python · FastAPI · SQL</p>
            </div>

            <div>
              <span>02</span>
              <h3>Frontend Development</h3>
              <p>HTML · CSS · JavaScript · React</p>
            </div>

            <div>
              <span>03</span>
              <h3>AI / ML Enthusiast</h3>
              <p>Python · Machine Learning · AI</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
