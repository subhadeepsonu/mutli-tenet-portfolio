import { motion } from "framer-motion";


interface SkillsV2Props {
    skills: {
        id: string;
        name: string;
    }[];
}
export default function SkillsV3(props: SkillsV2Props) {
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
    );
}
