
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ExternalLink, Mail, MapPin, Calendar, Briefcase } from 'lucide-react';
import { userData } from '../lib/constants';

export default function PortfolioV2() {
    const { user } = userData;
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Add a subtle parallax effect
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const elements = document.querySelectorAll('.parallax-element');
            elements.forEach((el) => {
                const htmlEl = el as HTMLElement;
                const speed = parseFloat(htmlEl.getAttribute('data-speed') || '0.05');
                const x = (window.innerWidth - e.pageX * speed) / 100;
                const y = (window.innerHeight - e.pageY * speed) / 100;

                htmlEl.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    };

    return (
        <div className="bg-gradient-to-br from-white to-artsy-green/30 min-h-screen text-gray-800 font-sans" ref={containerRef}>
            {/* <ThemeSwitcher /> */}

            {/* Decorative elements */}
            <div className="fixed top-20 left-20 w-40 h-40 bg-artsy-yellow rounded-full opacity-20 blur-3xl parallax-element" data-speed="0.02"></div>
            <div className="fixed bottom-20 right-20 w-60 h-60 bg-artsy-peach rounded-full opacity-20 blur-3xl parallax-element" data-speed="0.05"></div>
            <div className="fixed top-1/3 right-1/4 w-24 h-24 bg-artsy-purple rounded-full opacity-10 blur-2xl parallax-element" data-speed="0.03"></div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
                <motion.div
                    className="text-center z-10 max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                        className="relative inline-block mb-8"
                    >
                        <div className="w-32 h-32 bg-white rounded-full shadow-soft flex items-center justify-center text-2xl font-bold font-handwriting text-gray-800 relative z-10">
                            JD
                        </div>
                        <div className="absolute inset-0 bg-artsy-pink rounded-full blur-md -z-10 animate-float"></div>
                    </motion.div>

                    <motion.h1
                        className="text-6xl md:text-7xl font-bold mb-6 font-handwriting"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        John Doe
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-600 max-w-xl mx-auto mb-10 font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        {user.bio}
                    </motion.p>

                    <motion.div
                        className="flex gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <a href={user.socialLinks.github} className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-artsy-peach/30 shadow-soft hover:shadow-md transition-all duration-300 hover:border-artsy-orange/50" target="_blank" rel="noopener noreferrer">
                            <Github size={20} className="text-gray-700" />
                        </a>
                        <a href={user.socialLinks.linkedin} className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-artsy-peach/30 shadow-soft hover:shadow-md transition-all duration-300 hover:border-artsy-orange/50" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={20} className="text-gray-700" />
                        </a>
                        <a href={user.socialLinks.twitter} className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-artsy-peach/30 shadow-soft hover:shadow-md transition-all duration-300 hover:border-artsy-orange/50" target="_blank" rel="noopener noreferrer">
                            <Twitter size={20} className="text-gray-700" />
                        </a>
                        <a href={`mailto:${user.email}`} className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-artsy-peach/30 shadow-soft hover:shadow-md transition-all duration-300 hover:border-artsy-orange/50">
                            <Mail size={20} className="text-gray-700" />
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="mb-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-3 py-1 text-xs font-bold bg-artsy-orange/60 text-gray-800 rounded-full mb-4">Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-handwriting">My Skills</h2>
                        <div className="w-40 h-1 bg-artsy-orange/40 rounded-full mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-lg mx-auto">Core technologies and tools I work with.</p>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-5 max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {user.skills.map((skill, index) => (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                            >
                                <div className="px-5 py-2 rounded-full bg-white shadow-soft border border-artsy-peach/30 hover:border-artsy-orange/50 hover:shadow-md transition-all duration-300">
                                    <span className="text-gray-700 font-medium">{skill.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
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
                        {user.projects.map((project, index) => (
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
                                        <span className="text-xs text-gray-500">Last updated: {formatDate(project.updatedAt)}</span>
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

            {/* Experience Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="mb-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-3 py-1 text-xs font-bold bg-artsy-pink/60 text-gray-800 rounded-full mb-4">Experience</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-handwriting">Work History</h2>
                        <div className="w-40 h-1 bg-artsy-pink/40 rounded-full mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-lg mx-auto">My professional journey and experiences.</p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline dotted line */}
                        <div className="absolute left-0 md:left-1/2 top-0 h-full w-px border-l-2 border-dashed border-artsy-orange/30 transform md:translate-x-px"></div>

                        {user.experience.map((job, index) => (
                            <motion.div
                                key={job.id}
                                className={`relative mb-16 md:mb-24 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16 md:ml-auto'}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                style={{ width: '100%', maxWidth: '450px' }}
                            >
                                {/* Timeline flower */}
                                <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0 md:right-auto md:left-full' : 'left-0 md:left-auto md:right-full'} w-6 h-6 bg-white rounded-full transform translate-x-px md:-translate-x-1/2 border-2 border-artsy-orange/50 flex items-center justify-center`}>
                                    <div className="w-2 h-2 bg-artsy-orange rounded-full"></div>
                                </div>

                                <div className="artsy-card p-8">
                                    <h3 className="text-2xl font-bold mb-3 font-handwriting">{job.title}</h3>

                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 text-gray-600 mb-1">
                                            <Briefcase size={14} className="text-artsy-magenta" />
                                            <span>{job.company}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-gray-600 mb-1">
                                            <MapPin size={14} className="text-artsy-magenta" />
                                            <span>{job.location}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Calendar size={14} className="text-artsy-magenta" />
                                            <span>
                                                {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600">{job.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-3 py-1 text-xs font-bold bg-artsy-green/60 text-gray-800 rounded-full mb-4">Contact</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-handwriting">Let's Connect</h2>
                        <div className="w-40 h-1 bg-artsy-green/40 rounded-full mx-auto mb-8"></div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-xl mx-auto">
                            <a href={`mailto:${user.email}`} className="artsy-card w-full sm:w-auto flex-1 p-8 flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300">
                                <Mail size={28} className="text-artsy-magenta" />
                                <span className="text-lg font-medium">{user.email}</span>
                            </a>

                            <a href={user.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="artsy-card w-full sm:w-auto flex-1 p-8 flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300">
                                <Linkedin size={28} className="text-artsy-magenta" />
                                <span className="text-lg font-medium">LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-10 px-6 border-t border-artsy-peach/30">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white rounded-full shadow-soft flex items-center justify-center text-sm font-bold">
                            JD
                        </div>
                        <p className="text-gray-600">© {new Date().getFullYear()} John Doe</p>
                    </div>

                    <div className="flex gap-6">
                        <a href={user.socialLinks.github} className="text-gray-600 hover:text-gray-900 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                            <Github size={18} />
                        </a>
                        <a href={user.socialLinks.linkedin} className="text-gray-600 hover:text-gray-900 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={18} />
                        </a>
                        <a href={user.socialLinks.twitter} className="text-gray-600 hover:text-gray-900 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                            <Twitter size={18} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

