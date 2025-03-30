import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface ContactProps {
    email: string;
    socialLinks: {
        github: string;
        linkedin: string;
        twitter: string;
    };
}

export default function Contact(props: ContactProps) {
    const socialData = [
        {
            name: 'GitHub',
            icon: Github,
            url: props.socialLinks.github,
            username: 'johndoe',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: props.socialLinks.linkedin,
            username: 'johndoe',
        },
        {
            name: 'Twitter',
            icon: Twitter,
            url: props.socialLinks.twitter,
            username: 'johndoe',
        },
        {
            name: 'Email',
            icon: Mail,
            url: `mailto:${props.email}`,
            username: props.email,
        },
    ];

    return (
        <section id="contact" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                        <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
                        <p className="mt-6 text-lg text-white/80 max-w-lg mx-auto">
                            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {socialData.map((item) => (
                            <a
                                key={item.name}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-6 neo-card rounded-xl hover-lift group"
                            >
                                <div className="mr-5 flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center glass-card text-accent group-hover:text-white group-hover:bg-accent transition-colors">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-1">{item.name}</h3>
                                    <p className="text-white/70">{item.username}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

