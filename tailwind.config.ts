
import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                retro: {
                    background: '#1E1E1E',
                    text: '#E5E5E5',
                    accent1: '#FF6B6B',
                    accent2: '#4ECDC4',
                    accent3: '#FFD166',
                    muted: '#8D8D8D',
                    card: '#2A2A2A',
                    border: '#3A3A3A'
                },
                futuristic: {
                    dark: '#1A1F2C',
                    purple: '#9b87f5',
                    'vivid-purple': '#8B5CF6',
                    blue: '#0EA5E9',
                    'bright-blue': '#1EAEDB',
                    charcoal: '#403E43'
                },
                artsy: {
                    green: '#F2FCE2',
                    yellow: '#FEF7CD',
                    orange: '#FEC6A1',
                    purple: '#E5DEFF',
                    pink: '#FFDEE2',
                    peach: '#FDE1D3',
                    magenta: '#D946EF'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            fontFamily: {
                'mono': ['Space Mono', 'monospace'],
                'display': ['VT323', 'monospace'],
                'body': ['Roboto Mono', 'monospace']
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'crt-flicker': {
                    '0%': { opacity: '0.9' },
                    '10%': { opacity: '1' },
                    '15%': { opacity: '0.9' },
                    '20%': { opacity: '1' },
                    '80%': { opacity: '1' },
                    '85%': { opacity: '0.9' },
                    '90%': { opacity: '1' },
                    '100%': { opacity: '0.9' }
                },
                'scan-line': {
                    '0%': { transform: 'translateY(0%)' },
                    '100%': { transform: 'translateY(100%)' }
                },
                'blink': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' }
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'scale-in': {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' }
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.8' }
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-500px 0' },
                    '100%': { backgroundPosition: '500px 0' }
                },
                'fade-out': {
                    '0%': { opacity: '1', transform: 'translateY(0)' },
                    '100%': { opacity: '0', transform: 'translateY(10px)' }
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'crt-flicker': 'crt-flicker 2s infinite',
                'scan-line': 'scan-line 10s linear infinite',
                'blink': 'blink 1s step-end infinite',
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'fade-out': 'fade-out 0.5s ease-out',
                'scale-in': 'scale-in 0.3s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'futuristic-gradient': 'linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)',
                'artsy-gradient': 'linear-gradient(90deg, hsla(46, 73%, 75%, 1) 0%, hsla(176, 73%, 88%, 1) 100%)',
                'glow-gradient': 'radial-gradient(circle, rgba(102,51,238,0.2) 0%, rgba(102,51,238,0) 70%)'
            },
            boxShadow: {
                'neon': '0 0 10px rgba(102,51,238,0.5), 0 0 20px rgba(102,51,238,0.2)',
                'neo': '5px 5px 10px #121212, -5px -5px 10px #262626',
                'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
                'highlight': '0 0 15px rgba(255, 255, 255, 0.05)',
                'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)'
            },
            backdropBlur: {
                'xs': '2px'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;