import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Cloud, Trophy } from "lucide-react";
import useProfileData from "@/hooks/useProfileData";

const skills = [
  { icon: Code, label: "Backend Development", description: "Python, FastAPI, PostgreSQL" },
  { icon: Brain, label: "AI/ML Engineering", description: "LangChain, RAG, Vector Search" },
  { icon: Cloud, label: "Cloud & DevOps", description: "AWS Lambda, Docker, SQS" },
  { icon: Trophy, label: "Competitive Programming", description: "ICPC, Algorithms, C++" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const profile = useProfileData();

  return (
    <section ref={ref} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Sobre <span className="text-gradient">Mí</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {profile.summary}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors shadow-card"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {skill.label}
              </h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
        >
          {[
            { value: "3+", label: "Años de experiencia" },
            { value: "3x", label: "Top 10 ICPC Caribbean" },
            { value: "2x", label: "Medallas de Oro ONI" },
            { value: profile.skills.languages.English, label: "Nivel de Inglés" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
