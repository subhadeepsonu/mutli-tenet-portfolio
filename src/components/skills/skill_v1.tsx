

import { PortfolioData } from '../data/portfolio';
import { Check } from 'lucide-react';


export default function SkillsV1(props: PortfolioData) {
    const skills = props.user.skills;

    return (
        <section id="skills" className="retro-container">
            <h2 className="font-display text-3xl text-retro-accent3 mb-6">SKILLS.sys</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill) => (
                    <div
                        key={skill.id}
                        className="retro-card flex items-center gap-3 hover:translate-y-[-2px]"
                    >
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-retro-accent2/20 text-retro-accent2">
                            <Check size={16} />
                        </div>
                        <span className="font-mono">{skill.name}</span>
                    </div>
                ))}

                {/* Additional skills for visual balance */}
                <div className="retro-card flex items-center gap-3 hover:translate-y-[-2px]">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-retro-accent2/20 text-retro-accent2">
                        <Check size={16} />
                    </div>
                    <span className="font-mono">TypeScript</span>
                </div>
                <div className="retro-card flex items-center gap-3 hover:translate-y-[-2px]">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-retro-accent2/20 text-retro-accent2">
                        <Check size={16} />
                    </div>
                    <span className="font-mono">Tailwind CSS</span>
                </div>
                <div className="retro-card flex items-center gap-3 hover:translate-y-[-2px]">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-retro-accent2/20 text-retro-accent2">
                        <Check size={16} />
                    </div>
                    <span className="font-mono">Docker</span>
                </div>
                <div className="retro-card flex items-center gap-3 hover:translate-y-[-2px]">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-retro-accent2/20 text-retro-accent2">
                        <Check size={16} />
                    </div>
                    <span className="font-mono">AWS</span>
                </div>
            </div>
        </section>
    );
};

