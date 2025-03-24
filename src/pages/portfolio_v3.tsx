
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ExternalLink, Mail, MapPin, Calendar, Briefcase } from 'lucide-react';
import { userData } from '../lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PortfolioV3() {
    const { user } = userData;
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Add the scroll indicator animation
        const handleScroll = () => {
            const scrollIndicator = document.querySelector('.scroll-indicator');
            if (scrollIndicator && window.scrollY > 100) {
                scrollIndicator.classList.add('opacity-0');
            } else if (scrollIndicator) {
                scrollIndicator.classList.remove('opacity-0');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    };

    return (
        <div className="bg-gradient-to-br from-black to-futuristic-dark min-h-screen text-white overflow-hidden font-sans" ref={containerRef}>
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzOTNBNTYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-10"></div>
            </div>

            {/* <ThemeSwitcher /> */}

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center px-6">
                <div className="absolute inset-0 overflow-hidden">
                    {/* Animated tech grid-like background elements */}
                    <motion.div
                        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-futuristic-purple/10 to-futuristic-blue/20 blur-2xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.4, 0.6, 0.4],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />

                    <motion.div
                        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-futuristic-blue/10 to-futuristic-purple/20 blur-2xl"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 1
                        }}
                    />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-glow-gradient opacity-20"></div>
                </div>

                <motion.div
                    className="text-center z-10 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="inline-block"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                    >
                        <div className="w-28 h-28 bg-gradient-to-br from-futuristic-vivid-purple to-futuristic-blue rounded-3xl mb-8 flex items-center justify-center text-xl font-bold relative transform rotate-12 shadow-neon">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-futuristic-purple/30 to-futuristic-blue/30 blur-xl opacity-70 animate-pulse-glow"></div>
                            <span className="relative z-10 text-2xl font-bold tracking-wider transform -rotate-12">JD</span>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-4 font-display tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-futuristic-purple via-futuristic-bright-blue to-futuristic-blue">John</span>
                        <span className="text-white">Doe</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        {user.bio}
                    </motion.p>

                    <motion.div
                        className="flex gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <a href={user.socialLinks.github} className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-futuristic-purple/40 hover:border-futuristic-purple transition-all duration-300 hover:bg-futuristic-purple/20 hover:shadow-neon" target="_blank" rel="noopener noreferrer">
                            <Github size={18} />
                        </a>
                        <a href={user.socialLinks.linkedin} className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-futuristic-purple/40 hover:border-futuristic-purple transition-all duration-300 hover:bg-futuristic-purple/20 hover:shadow-neon" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={18} />
                        </a>
                        <a href={user.socialLinks.twitter} className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-futuristic-purple/40 hover:border-futuristic-purple transition-all duration-300 hover:bg-futuristic-purple/20 hover:shadow-neon" target="_blank" rel="noopener noreferrer">
                            <Twitter size={18} />
                        </a>
                        <a href={`mailto:${user.email}`} className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-futuristic-purple/40 hover:border-futuristic-purple transition-all duration-300 hover:bg-futuristic-purple/20 hover:shadow-neon">
                            <Mail size={18} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                    <div className="w-6 h-10 rounded-full border-2 border-futuristic-purple/50 flex justify-center">
                        <motion.div
                            className="w-1.5 h-1.5 bg-futuristic-bright-blue rounded-full mt-2"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
                        />
                    </div>
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
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-3 py-1 text-xs font-medium bg-black/40 border border-futuristic-purple/30 text-futuristic-bright-blue rounded-full mb-4 backdrop-blur-sm">Expertise</div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-futuristic-purple to-futuristic-bright-blue">Skills</span></h2>
                        <p className="text-gray-400 max-w-lg mx-auto">Core technologies and tools in my development arsenal.</p>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-5 max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {user.skills.map((skill, index) => (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-futuristic-purple/40 to-futuristic-blue/40 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="px-6 py-3 rounded-lg bg-black/60 backdrop-blur-md border border-futuristic-purple/30 group-hover:border-futuristic-purple/60 transition-all duration-300 relative z-10 flex items-center justify-center">
                                    <span className="text-futuristic-bright-blue group-hover:text-white transition-colors duration-300 font-medium">
                                        {skill.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-futuristic-purple/50 to-transparent"></div>
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
                                                <span className="text-xs text-gray-500">Last updated: {formatDate(project.updatedAt)}</span>
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

            {/* Experience Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="mb-16 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-3 py-1 text-xs font-medium bg-black/40 border border-futuristic-purple/30 text-futuristic-bright-blue rounded-full mb-4 backdrop-blur-sm">Experience</div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-futuristic-purple to-futuristic-bright-blue">History</span></h2>
                        <p className="text-gray-400 max-w-lg mx-auto">My professional journey and experiences.</p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-futuristic-purple/70 via-futuristic-blue/70 to-futuristic-purple/70 transform md:translate-x-px"></div>

                        {user.experience.map((job, index) => (
                            <motion.div
                                key={job.id}
                                className={`relative mb-16 md:mb-24 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16 md:ml-auto'}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                style={{ width: '100%', maxWidth: '400px' }}
                            >
                                {/* Timeline dot */}
                                <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0 md:right-auto md:left-full' : 'left-0 md:left-auto md:right-full'} w-4 h-4 bg-futuristic-bright-blue rounded-full transform translate-x-px md:translate-x-1/2 border-2 border-black/80 shadow-neon z-10`}></div>

                                <Card className="bg-black/40 backdrop-blur-md border-futuristic-purple/30 hover:border-futuristic-purple/60 transition-all duration-300 overflow-hidden">
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xl font-bold text-futuristic-bright-blue">{job.title}</h3>
                                        </div>

                                        <div className="mb-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                                                <Briefcase size={14} className="text-futuristic-purple" />
                                                <span>{job.company}</span>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                                                <MapPin size={14} className="text-futuristic-purple" />
                                                <span>{job.location}</span>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm text-gray-300">
                                                <Calendar size={14} className="text-futuristic-purple" />
                                                <span>
                                                    {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-gray-400 text-sm">{job.description}</p>
                                    </CardContent>
                                </Card>
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
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-3 py-1 text-xs font-medium bg-black/40 border border-futuristic-purple/30 text-futuristic-bright-blue rounded-full mb-4 backdrop-blur-sm">Contact</div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-futuristic-purple to-futuristic-bright-blue">Connect</span></h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-xl mx-auto">
                            <motion.a
                                href={`mailto:${user.email}`}
                                className="w-full sm:w-auto flex-1 p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300 bg-black/40 backdrop-blur-md border border-futuristic-purple/30 hover:border-futuristic-purple/60 rounded-2xl hover:shadow-neon"
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="w-12 h-12 rounded-full bg-futuristic-purple/20 flex items-center justify-center">
                                    <Mail size={22} className="text-futuristic-bright-blue" />
                                </div>
                                <span className="text-lg font-medium">{user.email}</span>
                            </motion.a>

                            <motion.a
                                href={user.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto flex-1 p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300 bg-black/40 backdrop-blur-md border border-futuristic-purple/30 hover:border-futuristic-purple/60 rounded-2xl hover:shadow-neon"
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="w-12 h-12 rounded-full bg-futuristic-purple/20 flex items-center justify-center">
                                    <Linkedin size={22} className="text-futuristic-bright-blue" />
                                </div>
                                <span className="text-lg font-medium">LinkedIn</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-futuristic-purple/20 bg-black/50 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} John Doe. All rights reserved.</p>

                    <div className="flex gap-4">
                        <a href={user.socialLinks.github} className="text-gray-400 hover:text-futuristic-bright-blue transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                            <Github size={18} />
                        </a>
                        <a href={user.socialLinks.linkedin} className="text-gray-400 hover:text-futuristic-bright-blue transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={18} />
                        </a>
                        <a href={user.socialLinks.twitter} className="text-gray-400 hover:text-futuristic-bright-blue transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                            <Twitter size={18} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

