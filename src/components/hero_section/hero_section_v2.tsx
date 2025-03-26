import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

// Define the props type
interface HeroSectionV2Props {
    user: {
        bio: string;
        email: string;
        socialLinks: {
            github: string;
            linkedin: string;
            twitter: string;
        };
    };
}

export default function HeroSectionV2(props: HeroSectionV2Props) {
    const { user } = props;
    return (
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

    );
}
