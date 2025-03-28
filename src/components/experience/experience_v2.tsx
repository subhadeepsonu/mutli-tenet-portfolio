import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';


interface ExperienceV2Props {
    experiences: {
        id: string;
        company: string;
        title: string;
        description: string;
        location: string;
        startDate: string;
        endDate: string
    }[];
}

export default function ExperienceV2(props: ExperienceV2Props) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    };
    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-3 py-1 text-xs font-bold bg-artsy-pink/60 text-gray-800 rounded-full mb-4">Experience</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-handwriting">Work History</h2>
                    <div className="w-40 h-1 bg-artsy-pink/40 rounded-full mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-lg mx-auto">My professional journey and experiences.</p>
                </motion.div>

                <div className="relative">
                    {/* Timeline dotted line */}
                    <div className="absolute left-0 md:left-1/2 top-0 h-full w-px border-l-2 border-dashed border-artsy-orange/30 transform md:translate-x-px"></div>

                    {props.experiences.map((job, index) => (
                        <motion.div
                            key={job.id}
                            className={`relative mb-16 md:mb-24 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16 md:ml-auto'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ width: '100%', maxWidth: '450px' }}
                        >
                            {/* Timeline flower */}
                            <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0 md:right-auto md:left-full' : 'left-0 md:left-auto md:right-full'} w-6 h-6 bg-white rounded-full transform translate-x-px md:-translate-x-1/2 border-2 border-artsy-orange/50 flex items-center justify-center`}>
                                <div className="w-2 h-2 bg-artsy-orange rounded-full"></div>
                            </div>

                            <div className="artsy-card p-8">
                                <h3 className="text-2xl font-bold mb-3 font-handwriting">{job.title}</h3>

                                <div className="mb-4">
                                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                                        <Briefcase size={14} className="text-artsy-magenta" />
                                        <span>{job.company}</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                                        <MapPin size={14} className="text-artsy-magenta" />
                                        <span>{job.location}</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Calendar size={14} className="text-artsy-magenta" />
                                        <span>
                                            {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-gray-600">{job.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
