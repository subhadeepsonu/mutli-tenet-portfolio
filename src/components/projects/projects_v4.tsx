
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
    id: string;
    index: number;
    title: string;
    description: string;
    link: string;
    createdAt: string;
    updatedAt: string;
}

interface ProjectsProps {
    projects: Project[];
}

export default function Projects(props: ProjectsProps) {
    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                        <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {props.projects.map((project, index) => (
                            <a
                                key={project.id}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group animate-on-scroll"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="neo-card rounded-xl overflow-hidden hover-lift transition-all duration-500">
                                    <div className="h-48 bg-gradient-to-br from-accent/30 to-secondary flex items-center justify-center">
                                        <span className="text-4xl font-bold text-white/20">{project.index}</span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                                                {project.title}
                                            </h3>
                                            <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0" />
                                        </div>
                                        <p className="text-white/70 mb-4">{project.description}</p>
                                        <div className="text-xs text-white/50">
                                            {new Date(project.updatedAt).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

