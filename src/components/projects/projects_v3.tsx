import { Card, CardContent } from '../ui/card';
import { Separator } from '@radix-ui/react-separator';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
interface ProjectsV2Props {
    projects: {
        id: string;
        title: string;
        description: string;
        link: string;
    }[];
}
export default function ProjectsV3(props: ProjectsV2Props) {
    const user = props

    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-3 py-1 text-xs font-medium bg-black/40 border border-futuristic-purple/30 text-futuristic-bright-blue rounded-full mb-4 backdrop-blur-sm">Projects</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-futuristic-purple to-futuristic-bright-blue">Projects</span></h2>
                    <p className="text-gray-400 max-w-lg mx-auto">Discover some of my recent work and technical achievements.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {user.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group"
                        >
                            <Card className="overflow-hidden bg-black/40 backdrop-blur-md border-futuristic-purple/30 group-hover:border-futuristic-purple/60 transition-all duration-300 h-full">
                                <CardContent className="p-6">
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-futuristic-bright-blue transition-colors duration-300">{project.title}</h3>
                                        <p className="text-gray-400 text-sm mb-6">{project.description}</p>
                                        <Separator className="bg-futuristic-purple/20 my-4" />
                                        <div className="flex justify-between items-center">

                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-futuristic-blue hover:text-futuristic-bright-blue transition-all duration-300 text-sm group-hover:translate-x-1"
                                            >
                                                <span>View Project</span>
                                                <ExternalLink size={14} />
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
