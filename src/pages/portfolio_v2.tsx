import SkillsV2 from '@/components/skills/skills_v2';
import ProjectsV2 from '@/components/projects/projects_v2';
import ExperienceV2 from '@/components/experience/experience_v2';
import FooterV2 from '@/components/footer/footer_v2';
import { PortfolioData } from "@/components/data/portfolio";
import HeroSectionV2 from '@/components/hero_section/hero_section_v2';
import { useEffect } from 'react';

export default function PortfolioV2(props: PortfolioData) {
    const user = props.user;
    useEffect(() => {
        document.title = `${props.user.email.split('@')[0]}`
    }, [])
    return (
        <div className="bg-gradient-to-br h-screen from-white to-artsy-green/30 min-h-screen text-gray-800 font-sans">
            <div className="fixed top-20 left-20 w-40 h-40 bg-artsy-yellow rounded-full opacity-20 blur-3xl parallax-element" data-speed="0.02"></div>
            <div className="fixed bottom-20 right-20 w-60 h-60 bg-artsy-peach rounded-full opacity-20 blur-3xl parallax-element" data-speed="0.05"></div>
            <div className="fixed top-1/3 right-1/4 w-24 h-24 bg-artsy-purple rounded-full opacity-10 blur-2xl parallax-element" data-speed="0.03"></div>
            <HeroSectionV2 user={user} />
            {user.skills?.length > 0 && <SkillsV2 skills={user.skills} />}
            {user.projects?.length > 0 && <ProjectsV2 projects={user.projects} />}
            {user.experience?.length > 0 && <ExperienceV2 experiences={user.experience} />}
            <FooterV2
                email={user.email}
                github={user.github}
                twitter={user.twitter}
                linkedin={user.linkedin}
            />
        </div>
    );
};
