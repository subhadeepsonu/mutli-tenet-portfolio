import { Github, Linkedin, Twitter } from 'lucide-react';

export default function FooterV2(props: {
    socialLinks: {
        github?: string,
        twitter?: string,
        linkedin?: string
    }
}) {
    return (
        <footer className="py-10 px-6 border-t border-artsy-peach/30">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-full shadow-soft flex items-center justify-center text-sm font-bold">
                        JD
                    </div>
                    <p className="text-gray-600">© {new Date().getFullYear()} John Doe</p>
                </div>

                <div className="flex gap-6">
                    <a href={props.socialLinks.github} className="text-gray-600 hover:text-gray-900 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                        <Github size={18} />
                    </a>
                    <a href={props.socialLinks.linkedin} className="text-gray-600 hover:text-gray-900 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={18} />
                    </a>
                    <a href={props.socialLinks.twitter} className="text-gray-600 hover:text-gray-900 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                        <Twitter size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
