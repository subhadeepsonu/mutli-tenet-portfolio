

import { Github, Linkedin, Twitter } from 'lucide-react';
import { PortfolioData } from '../data/portfolio';




export default function HeroSectionV1(props: PortfolioData) {
    const user = props.user

    return (
        <header className="retro-container pt-12">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                <div className="text-center md:text-left">
                    <h1 className="retro-header">
                        <span className="text-retro-accent3">{'<'}</span>
                        John Doe
                        <span className="text-retro-accent3">{'/>'}</span>
                    </h1>
                    <h2 className="retro-subheader terminal-prefix cursor-blink">
                        {user.bio}
                    </h2>
                    <p className="font-mono text-retro-muted mt-4 max-w-xl">
                        Welcome to my digital space. I build things for the web, focusing on clean code, user experience, and modern technologies.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <div className="inline-flex gap-3">
                        <a href={user.socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <Github size={20} className="text-retro-accent2" />
                        </a>
                        <a href={user.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <Linkedin size={20} className="text-retro-accent2" />
                        </a>
                        <a href={user.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                            <Twitter size={20} className="text-retro-accent2" />
                        </a>
                    </div>
                    <a
                        href={`mailto:${user.email}`}
                        className="font-mono text-sm text-retro-accent2 hover:text-retro-accent1 transition-colors"
                    >
                        {user.email}
                    </a>
                </div>
            </div>

            <nav className="mt-12 border-t border-b border-retro-border py-4">
                <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-mono text-sm">

                    <li><a href="#skills" className="retro-link">SKILLS</a></li>
                    <li><a href="#projects" className="retro-link">PROJECTS</a></li>
                    <li><a href="#experience" className="retro-link">EXPERIENCE</a></li>
                </ul>
            </nav>
        </header>
    );
};

