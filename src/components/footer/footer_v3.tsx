import { Github, Linkedin, Twitter } from 'lucide-react';

export default function FooterV3(props: {
    socialLinks: {
        github?: string,
        twitter?: string,
        linkedin?: string
    }
}) {
    return (
        <footer className="py-8 px-6 border-t border-futuristic-purple/20 bg-black/50 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">© {new Date().getFullYear()} John Doe. All rights reserved.</p>

                <div className="flex gap-4">
                    <a href={props.socialLinks.github} className="text-gray-400 hover:text-futuristic-bright-blue transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                        <Github size={18} />
                    </a>
                    <a href={props.socialLinks.linkedin} className="text-gray-400 hover:text-futuristic-bright-blue transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={18} />
                    </a>
                    <a href={props.socialLinks.twitter} className="text-gray-400 hover:text-futuristic-bright-blue transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                        <Twitter size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
