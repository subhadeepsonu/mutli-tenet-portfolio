import { PortfolioData } from '../data/portfolio';
import { ExternalLink, FolderOpen } from 'lucide-react';

export default function ProjectsV1(props: PortfolioData) {
    const projects = props.user.projects;
    return (
        <section id="projects" className="retro-container">
            <h2 className="font-display text-3xl text-retro-accent3 mb-6">PROJECTS.bat</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="retro-card group">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-retro-accent1/20 text-retro-accent1">
                                <FolderOpen size={20} />
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-retro-muted hover:text-retro-accent1 transition-colors"
                                aria-label={`View ${project.title}`}
                            >
                                <ExternalLink size={18} />
                            </a>
                        </div>

                        <h3 className="font-mono text-lg font-bold mb-2 group-hover:text-retro-accent1 transition-colors">
                            {project.title}
                        </h3>

                        <p className="font-mono text-sm text-retro-muted mb-4 line-clamp-2">
                            {project.description}
                        </p>


                    </div>
                ))}
            </div>
        </section>
    );
};
