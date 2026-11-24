
import { motion } from 'framer-motion';

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
];

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <a href="#home" className="logo">
        VENKATA RAGHAVENDRA<span>.</span>
      </a>

      <div className="nav-links">
        {links.map(([name, href]) => (
          <a href={href} key={name}>
            {name}
          </a>
        ))}
      </div>

      <a href="#contact" className="contact-btn">
        Let's Talk ↗
      </a>
    </motion.nav>
  );
}
