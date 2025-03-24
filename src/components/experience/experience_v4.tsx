import { Briefcase } from 'lucide-react';

interface Experience {
    id: string;
    index: number;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

interface ExperienceProps {
    experiences: Experience[];
}

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
    });
};

export default function Experience(props: ExperienceProps) {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                        <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-16">
                        {props.experiences.map((experience, index) => (
                            <div
                                key={experience.id}
                                className="relative animate-on-scroll"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {index < props.experiences.length - 1 && (
                                    <div className="absolute top-16 bottom-0 left-[27px] w-[2px] bg-white/10"></div>
                                )}
                                <div className="flex gap-5 sm:gap-8">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="flex items-center justify-center w-14 h-14 rounded-full glass-card text-accent">
                                            <Briefcase className="w-6 h-6" />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="bg-secondary/20 border border-white/5 p-6 rounded-xl hover-lift">
                                            <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                                                <h3 className="text-xl font-semibold">{experience.title}</h3>
                                                <div className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full">
                                                    {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Present'}
                                                </div>
                                            </div>

                                            <div className="mb-4 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                                                <div className="text-white/70">
                                                    <span className="font-medium">{experience.company}</span>
                                                </div>
                                                <div className="text-white/50">
                                                    {experience.location}
                                                </div>
                                            </div>

                                            <p className="text-white/80 leading-relaxed">
                                                {experience.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

