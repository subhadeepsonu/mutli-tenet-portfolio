import { PortfolioData } from '../data/portfolio';
import { Briefcase, Calendar } from 'lucide-react';
export default function ExperienceV1(props: PortfolioData) {
    const experience = props.user.experience;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short'
        });
    };

    return (
        <section id="experience" className="retro-container">
            <h2 className="font-display text-3xl text-retro-accent3 mb-6">EXPERIENCE.log</h2>

            <div className="space-y-6">
                {experience.map((exp) => (
                    <div key={exp.id} className="retro-card">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-retro-accent3/20 text-retro-accent3 mt-1">
                                <Briefcase size={20} />
                            </div>

                            <div className="flex-grow">
                                <h3 className="font-mono text-lg font-bold mb-1">
                                    {exp.title}
                                </h3>

                                <div className="font-mono text-base text-retro-accent1 mb-1">
                                    {exp.company}
                                </div>

                                <div className="flex items-center gap-2 font-mono text-xs text-retro-muted mb-4">
                                    <Calendar size={12} />
                                    <span>
                                        {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                                    </span>
                                    <span className="text-retro-border">|</span>
                                    <span>{exp.location}</span>
                                </div>

                                <p className="font-mono text-sm">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

