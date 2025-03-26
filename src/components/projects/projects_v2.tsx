import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';


interface ProjectsV2Props {
    projects: {
        id: string;
        title: string;
        description: string;
        link: string;
    }[];
}

export default function ProjectsV2(props: ProjectsV2Props) {
    const { projects } = props;
    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-3 py-1 text-xs font-bold bg-artsy-yellow/60 text-gray-800 rounded-full mb-4">Projects</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-handwriting">My Creative Work</h2>
                    <div className="w-40 h-1 bg-artsy-orange/40 rounded-full mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-lg mx-auto">Discover some of my recent work and technical achievements.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="artsy-card p-8 relative overflow-hidden group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            {/* Decorative corner dots */}
                            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-artsy-orange/60"></div>
                            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-artsy-pink/60"></div>
                            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-artsy-purple/60"></div>
                            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-artsy-green/60"></div>

                            <div className="mb-4">
                                <h3 className="text-2xl font-bold mb-3 font-handwriting">{project.title}</h3>
                                <p className="text-gray-600 mb-6">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-1 text-gray-800 hover:text-artsy-magenta transition-all duration-300"
                                    >
                                        <span>View Project</span>
                                        <ExternalLink size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
