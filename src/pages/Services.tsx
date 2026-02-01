import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Server, 
  Brain, 
  Wrench, 
  Database, 
  Code, 
  Rocket,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import useProfileData from "@/hooks/useProfileData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Brain,
  Wrench,
  Database,
  Code,
  Rocket,
};

const Services = () => {
  const profile = useProfileData();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Volver al inicio
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                Mis <span className="text-gradient">Servicios</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Soluciones de software especializadas en backend, AI/ML y desarrollo full-stack.
                Disponible para proyectos remotos a nivel global.
              </p>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(profile.services).map(([title, service], index) => {
              const Icon = iconMap[service.icon] || Server;
              return (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors shadow-card"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h2 className="text-2xl font-display font-semibold text-foreground">
                          {title}
                        </h2>
                        <span className="text-primary font-semibold whitespace-nowrap">
                          Consultar
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">
                        {service.summary}
                      </p>

                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={`mailto:${profile.personal_data.contact.email}?subject=Consulta: ${title}`}
                        className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:underline"
                      >
                        Solicitar información
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 bg-card border border-border rounded-2xl p-12 shadow-card"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
              Stack <span className="text-gradient">Tecnológico</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-primary font-semibold mb-3">Lenguajes</h3>
                <p className="text-muted-foreground text-sm">
                  {profile.skills.programming_languages.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="text-primary font-semibold mb-3">Backend & DB</h3>
                <p className="text-muted-foreground text-sm">
                  {profile.skills.backend_and_databases.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="text-primary font-semibold mb-3">Infraestructura</h3>
                <p className="text-muted-foreground text-sm">
                  {profile.skills.infrastructure_and_tools.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="text-primary font-semibold mb-3">Frontend & Mobile</h3>
                <p className="text-muted-foreground text-sm">
                  {profile.skills.frontend_and_mobile.join(", ")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center bg-card border border-border rounded-2xl p-12 shadow-card"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              ¿Listo para comenzar?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Cuéntame sobre tu proyecto y encontremos la mejor solución juntos.
              Disponible para trabajo remoto globalmente.
            </p>
            <a
              href={`mailto:${profile.personal_data.contact.email}`}
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-glow text-lg"
            >
              Contactar ahora
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
