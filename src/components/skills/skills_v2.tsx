import { motion } from "framer-motion";


export interface SkillsV2Props {
    skills: {
        id: string;
        name: string;
    }[];
}

export default function SkillsV2(props: SkillsV2Props) {
    const { skills } = props;
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

                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
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
    );
}
