import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import useProfileData from "@/hooks/useProfileData";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const profile = useProfileData();

  const experiences = [
    ...profile.experience.map((exp) => ({
      type: "work",
      title: exp.role,
      company: exp.company,
      period: exp.period,
      description: exp.responsibilities?.join(" ") || exp.highlights?.join(" ") || "",
    })),
    {
      type: "education",
      title: profile.education.degree,
      company: profile.education.institution,
      period: profile.education.period,
      description: profile.education.focus,
    },
    ...profile.awards.map((award) => ({
      type: "award",
      title: award.competition,
      company: award.achievement,
      period: award.years,
      description: "",
    })),
  ];

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
                  {exp.description && (
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  )}
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
