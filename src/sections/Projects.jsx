
import { motion } from 'framer-motion';

const projects = [
  {
    number: '01',
    title: 'Secure User Management API',
    category: 'BACKEND DEVELOPMENT',
    description:
      'A secure user management application featuring authentication, JWT authorization, user management and a React frontend.',
    technologies: ['Python', 'FastAPI', 'MongoDB', 'JWT', 'React'],
    status: 'Completed',
    github: 'https://github.com/raghucodes89/User-Management-API',
    theme: 'project-dark',
  },
  {
    number: '02',
    title: 'Notes Application',
    category: 'FULL STACK DEVELOPMENT',
    description:
      'A web-based notes application designed to create and manage personal notes through a clean user interface.',
    technologies: ['React', 'JavaScript', 'Web Development'],
    status: 'Deployed',
    github: '',
    theme: 'project-green',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">03 — SELECTED WORK</p>

          <h2>
            Things I've
            <br />
            <span>built.</span>
          </h2>

          <p className="projects-intro">
            A selection of projects where I explore,
            experiment and turn ideas into applications.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${project.theme}`}
              key={project.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
            >
              <div className="project-top">
                <span>{project.number} / PROJECT</span>
                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <div className="project-visual">
                <span className="project-symbol">
                  {project.number === '01'
                    ? '{ API }'
                    : project.number === '02'
                    ? '📝'
                    : '✎'}
                </span>
              </div>

              <div className="project-info">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Source Code ↗
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
