import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
interface HeroSectionV2Props {
    user: {
        bio: string;
        email: string;
        socialLink: {
            github: string;
            linkedin: string;
            twitter: string;
        };
    };
}
export default function HeroSectionV3(props: HeroSectionV2Props) {
    const user = props.user
    return (
        <section className="relative h-screen flex flex-col items-center justify-center px-6">
            <div className="absolute inset-0 overflow-hidden">

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
                    <a href={user.socialLink.github} className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-futuristic-purple/40 hover:border-futuristic-purple transition-all duration-300 hover:bg-futuristic-purple/20 hover:shadow-neon" target="_blank" rel="noopener noreferrer">
                        <Github size={18} />
                    </a>
                    <a href={user.socialLink.linkedin} className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-futuristic-purple/40 hover:border-futuristic-purple transition-all duration-300 hover:bg-futuristic-purple/20 hover:shadow-neon" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={18} />
                    </a>
                    <a href={user.socialLink.twitter} className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-futuristic-purple/40 hover:border-futuristic-purple transition-all duration-300 hover:bg-futuristic-purple/20 hover:shadow-neon" target="_blank" rel="noopener noreferrer">
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
    );
}
