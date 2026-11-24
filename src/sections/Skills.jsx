
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Globe,
  Wrench,
} from 'lucide-react';

const skillGroups = [
  {
    number: '01',
    title: 'Programming',
    description: 'Writing clean and logical code.',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'Java'],
  },
  {
    number: '02',
    title: 'Backend Development',
    description: 'Building APIs and server-side applications.',
    icon: Server,
    skills: ['FastAPI', 'REST APIs', 'Pydantic'],
  },
  {
    number: '03',
    title: 'Databases',
    description: 'Working with structured and NoSQL data.',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'SQL'],
  },
  {
    number: '04',
    title: 'AI / ML',
    description: 'Exploring intelligent applications.',
    icon: BrainCircuit,
    skills: ['Machine Learning', 'Pandas', 'NumPy'],
  },
  {
    number: '05',
    title: 'Frontend',
    description: 'Creating responsive user interfaces.',
    icon: Globe,
    skills: ['HTML', 'CSS', 'React'],
  },
  {
    number: '06',
    title: 'Developer Tools',
    description: 'Tools for development and collaboration.',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Postman'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">02 — MY EXPERTISE</p>

          <h2>
            Tools of my
            <br />
            <span>craft.</span>
          </h2>

          <p className="skills-intro">
            Technologies and tools I use while
            building software and exploring new ideas.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                className="skill-card"
                key={group.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
              >
                <div className="skill-card-top">
                  <span>{group.number}</span>
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                <h3>{group.title}</h3>

                <p>{group.description}</p>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
