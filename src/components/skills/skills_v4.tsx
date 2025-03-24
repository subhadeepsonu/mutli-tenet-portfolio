
import React from 'react';

interface Skill {
    id: string;
    name: string;
}

interface AboutProps {
    bio: string;
    skills: Skill[];
}

export default function About(props: AboutProps) {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                        <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                        <div className="lg:col-span-3 animate-on-scroll">
                            <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
                            <div className="space-y-4 text-white/80 leading-relaxed">
                                <p>{props.bio}</p>
                                <p>
                                    I specialize in building exceptional digital experiences that combine
                                    aesthetic design with efficient functionality. With a strong foundation
                                    in both frontend and backend technologies, I create responsive web applications
                                    that solve real-world problems.
                                </p>
                                <p>
                                    My approach focuses on writing clean, maintainable code and providing intuitive
                                    interfaces. I'm passionate about continuous learning and staying updated
                                    with the latest technologies and industry best practices.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-2 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                            <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                {props.skills.map((skill) => (
                                    <div
                                        key={skill.id}
                                        className="glass-card p-4 rounded-lg hover-lift flex items-center"
                                    >
                                        <div className="h-3 w-3 rounded-full bg-accent mr-3"></div>
                                        <span className="font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

