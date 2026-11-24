
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">

        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">05 — EDUCATION</p>

          <h2>
            My academic
            <br />
            <span>background.</span>
          </h2>

          <p>
            My educational foundation and the beginning
            of my journey in technology.
          </p>
        </motion.div>

        <div className="education-card">
          <div className="education-icon">
            <GraduationCap size={35} />
          </div>

          <div className="education-info">
            <span>UNDERGRADUATE DEGREE</span>

            <h3>BCA (Hons) — Computer Applications</h3>

            <h4>PVKK Degree & PG College</h4>

            <p>Anantapur, Andhra Pradesh</p>

            <div className="education-tags">
              <span>Computer Applications</span>
              <span>Programming</span>
              <span>Database Concepts</span>
            </div>
          </div>
        </div>

        <div className="education-note">
          <BookOpen size={20} />
          <p>
            Beyond academics, I continuously develop my
            technical skills through independent learning
            and practical projects.
          </p>
        </div>

      </div>
    </section>
  );
}
