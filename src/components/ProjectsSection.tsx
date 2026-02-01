import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Agentic RAG Infrastructure",
    category: "AI/ML",
    description: "Sistema de gestión documental con LangChain, Gemini y FAISS para búsqueda semántica avanzada y generación aumentada por recuperación.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["LangChain", "Gemini", "FAISS", "Python"],
    period: "Mar 2025 – Jun 2025",
  },
  {
    title: "Automated Image Recognition Pipeline",
    category: "Machine Learning",
    description: "Pipeline completo de datos para procesamiento y clasificación de imágenes utilizando visión por computadora y machine learning.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    technologies: ["OpenCV", "XGBoost", "Python"],
    period: "Sep 2024 – Oct 2024",
  },
  {
    title: "Delivery Check App",
    category: "Full-Stack",
    description: "Aplicación móvil y web full-stack para gestión de entregas con sincronización en tiempo real y offline-first.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    technologies: ["React", "Capacitor", "FastAPI", "PostgreSQL"],
    period: "2023 – Presente",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" ref={ref} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Proyectos <span className="text-gradient">Destacados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes en backend, AI/ML y desarrollo full-stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <a
                    href="https://github.com/DaviDTR1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center text-background hover:opacity-80 transition-opacity"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {project.period}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
