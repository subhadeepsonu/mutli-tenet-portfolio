import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
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
export default function ExperienceV3(props: ExperienceV2Props) {
    const user = props
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
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-3 py-1 text-xs font-medium bg-black/40 border border-futuristic-purple/30 text-futuristic-bright-blue rounded-full mb-4 backdrop-blur-sm">Experience</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-futuristic-purple to-futuristic-bright-blue">History</span></h2>
                    <p className="text-gray-400 max-w-lg mx-auto">My professional journey and experiences.</p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-futuristic-purple/70 via-futuristic-blue/70 to-futuristic-purple/70 transform md:translate-x-px"></div>

                    {user.experiences.map((job, index) => (
                        <motion.div
                            key={job.id}
                            className={`relative mb-16 md:mb-24 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16 md:ml-auto'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ width: '100%', maxWidth: '400px' }}
                        >
                            {/* Timeline dot */}
                            <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0 md:right-auto md:left-full' : 'left-0 md:left-auto md:right-full'} w-4 h-4 bg-futuristic-bright-blue rounded-full transform translate-x-px md:translate-x-1/2 border-2 border-black/80 shadow-neon z-10`}></div>

                            <Card className="bg-black/40 backdrop-blur-md border-futuristic-purple/30 hover:border-futuristic-purple/60 transition-all duration-300 overflow-hidden">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-futuristic-bright-blue">{job.title}</h3>
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                                            <Briefcase size={14} className="text-futuristic-purple" />
                                            <span>{job.company}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-gray-300 mb-1">
                                            <MapPin size={14} className="text-futuristic-purple" />
                                            <span>{job.location}</span>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-gray-300">
                                            <Calendar size={14} className="text-futuristic-purple" />
                                            <span>
                                                {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm">{job.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
