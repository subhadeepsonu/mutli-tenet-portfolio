

import { ArrowDown } from 'lucide-react';

interface HeroProps {
    bio: string;
}

export default function Hero(props: HeroProps) {
    return (
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[20%] right-[10%] w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[20%] left-[10%] w-60 h-60 bg-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 rounded-full bg-secondary/30 blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 py-10 z-10 animate-fade-in">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-6 inline-block">
                        <span className="px-3 py-1 text-xs uppercase tracking-wider border border-accent/50 rounded-full text-accent">
                            Full-Stack Developer
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="block text-white">Hello, I'm</span>
                        <span className="block text-white">
                            John <span className="text-accent">Doe</span>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
                        {props.bio}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-accent text-white font-medium rounded-lg hover-lift"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-colors hover-lift"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>

            <a
                href="#about"
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60 hover:text-white transition-colors"
                aria-label="Scroll down"
            >
                <span className="text-sm mb-2">Scroll</span>
                <ArrowDown className="w-5 h-5 animate-float" />
            </a>
        </section>
    );
};

