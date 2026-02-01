import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Engineer (Backend & AI/ML)",
    company: "AllySolutions – EU (Remote)",
    period: "Jul 2025 – Presente",
    description: "Diseño e implementación de infraestructura backend de alta concurrencia para ecosistema de reportes automatizados. Desarrollo de pipelines de datos con Langflow Agents, integración con Google Sheets y Jira APIs. Optimización de búsqueda híbrida (full-text + vector).",
  },
  {
    type: "work",
    title: "Lead Backend Architect",
    company: "Desoft – Cuba",
    period: "Nov 2024 – Ene 2026",
    description: "Liderazgo en diseño arquitectónico y desarrollo de plataformas B2B empresariales. Diseño de herramientas de automatización con RAG para gestión portuaria. Optimización de esquemas PostgreSQL para operaciones de alta confiabilidad.",
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    company: "Freelance – Remote",
    period: "Mar 2023 – Presente",
    description: "Desarrollo de soluciones de software end-to-end para plataformas móviles y web. Creación de 'Delivery Check', aplicación full-stack con React, Capacitor, FastAPI y PostgreSQL.",
  },
  {
    type: "education",
    title: "B.Sc. en Ciencias de la Computación",
    company: "Universidad de Oriente – Santiago de Cuba, Cuba",
    period: "Sep 2022 – Sep 2025",
    description: "Enfoque en algoritmos avanzados, principios de ingeniería de software y sistemas distribuidos.",
  },
  {
    type: "award",
    title: "ICPC Caribbean Finals 2021-2023",
    company: "Top 10 Finish (3x)",
    period: "2021 – 2023",
    description: "Resolución de problemas algorítmicos complejos de teoría de grafos, programación dinámica y matemáticas avanzadas.",
  },
  {
    type: "award",
    title: "Olimpiada Nacional de Informática",
    company: "Medalla de Oro (2x) + Bronce",
    period: "2017 – 2019",
    description: "Excelencia demostrada en resolución de problemas e implementación eficiente de código bajo presión.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return Briefcase;
      case "education":
        return GraduationCap;
      case "award":
        return Award;
      default:
        return Briefcase;
    }
  };

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Mi <span className="text-gradient">Trayectoria</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experiencia profesional, formación académica y logros competitivos
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = getIcon(exp.type);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 pb-12 last:pb-0 border-l border-border"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-8 h-8 -translate-x-1/2 bg-card border-2 border-primary rounded-full flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors shadow-card">
                  <span className="text-sm text-primary font-medium">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-1 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
