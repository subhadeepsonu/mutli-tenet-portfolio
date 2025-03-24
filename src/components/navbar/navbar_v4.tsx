
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Twitter, Menu, X } from 'lucide-react';

interface NavbarProps {
    socialLinks: {
        github: string;
        linkedin: string;
        twitter: string;
    };
}

export default function Navbar(props: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '#hero', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#contact', label: 'Contact' },
    ];

    const socialIcons = [
        { href: props.socialLinks.github, icon: Github, label: 'GitHub' },
        { href: props.socialLinks.linkedin, icon: Linkedin, label: 'LinkedIn' },
        { href: props.socialLinks.twitter, icon: Twitter, label: 'Twitter' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300',
                isScrolled
                    ? 'backdrop-blur-lg bg-black/40 border-b border-white/5 py-3'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
                <a href="#hero" className="text-2xl font-bold tracking-tight relative">
                    <span className="text-white">john</span>
                    <span className="text-accent">doe</span>
                    <span className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 ">
                    <ul className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group pb-1"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center space-x-4 pl-4 border-l border-white/10">
                        {socialIcons.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-white transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white/80 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <div
                className={cn(
                    'fixed inset-0 bg-background backdrop-blur-lg z-40 flex flex-col md:hidden pt-20 px-6 pb-6 transition-transform duration-300 ease-in-out',
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <nav className="flex-1">
                    <ul className="space-y-6 py-8">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="text-lg font-medium text-white/80 hover:text-white block transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="border-t border-white/10 pt-6">
                    <div className="flex items-center justify-center space-x-8">
                        {socialIcons.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/70 hover:text-white transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

