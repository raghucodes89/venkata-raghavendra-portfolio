import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    name: "GitHub",
    username: "raghucodes89",
    icon: FaGithub,
    url: "https://github.com/raghucodes89",
  },
  {
    name: "LinkedIn",
    username: "Connect professionally",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/venkata-raghavendra-esapathi-97823a3a8/",
  },
];

export default function Contact() {
  // Replace this with your actual email address
  const email = "YOUR_EMAIL@example.com";

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Contact Heading */}
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          <p className="section-label">06 — GET IN TOUCH</p>

          <h2>
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>

          <p className="contact-description">
            I'm an aspiring developer open to entry-level opportunities,
            collaboration and interesting projects.
          </p>

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-main-button">
            <Mail size={18} />
            Say Hello
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* Social Links */}
        <div className="social-links">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card">
                <Icon size={23} />

                <div>
                  <h3>{social.name}</h3>
                  <p>{social.username}</p>
                </div>

                <ArrowUpRight size={18} />
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="portfolio-footer">
          <a href="#home" className="footer-logo">
            RAGHU.
          </a>

          <p>Designed & built with passion.</p>

          <span>© {new Date().getFullYear()}Venkata Raghavendra</span>
        </footer>
      </div>
    </section>
  );
}
