import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects, profile } from '../data/portfolio';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects that turned ideas into infrastructure."
        description="A glimpse at production-grade DevOps work — from AI-assisted pipelines to fully automated EKS deployments."
      />

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 flex justify-center"
      >
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          <FaGithub />
          See more on GitHub
        </a>
      </motion.div>
    </section>
  );
}
