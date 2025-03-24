
import { Heart } from 'lucide-react';

export default function FooterV1() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="retro-container pb-12">
            <div className="retro-divider"></div>

            <div className="text-center">
                <div className="font-mono text-sm text-retro-muted flex flex-col sm:flex-row justify-center items-center gap-2">
                    <span>© {currentYear} John Doe</span>
                    <span className="hidden sm:inline text-retro-border">|</span>
                    <span className="flex items-center gap-1">
                        Built with <Heart size={14} className="text-retro-accent1" /> and React
                    </span>
                </div>

                <p className="font-mono text-xs text-retro-muted mt-4">
                    This site is inspired by retro terminals and vintage computing
                </p>
            </div>
        </footer>
    );
};

