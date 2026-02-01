import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import useProfileData from "@/hooks/useProfileData";

const Footer = () => {
  const profile = useProfileData();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="text-xl font-display font-semibold">
              <span className="text-gradient">{profile.personal_data.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {profile.personal_data.name}. Software Engineer.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://${profile.personal_data.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={`https://${profile.personal_data.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.personal_data.contact.email}`}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
