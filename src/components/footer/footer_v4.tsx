export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-10 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <div className="text-white/50 text-sm">
                    <p>&copy; {currentYear} John Doe. All rights reserved.</p>
                    <p className="mt-2">
                        Designed and built with precision and care.
                    </p>
                </div>
            </div>
        </footer>
    );
};

