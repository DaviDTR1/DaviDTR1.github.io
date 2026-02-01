import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Brain, Wrench, Rocket, Database, Code } from "lucide-react";
import useProfileData from "@/hooks/useProfileData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Brain,
  Wrench,
  Rocket,
  Database,
  Code,
};

const ServicesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const profile = useProfileData();

  const serviceEntries = Object.entries(profile.services).slice(0, 4);

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Mis <span className="text-gradient">Servicios</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Soluciones de software especializadas en backend, inteligencia artificial y desarrollo full-stack
            </p>
          </div>
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
          >
            Ver todos los servicios
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceEntries.map(([title, service], index) => {
            const Icon = iconMap[service.icon] || Server;
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 shadow-card"
              >
                <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-5 shadow-glow">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.summary}
                </p>
                <p className="text-primary font-semibold">Consultar</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
