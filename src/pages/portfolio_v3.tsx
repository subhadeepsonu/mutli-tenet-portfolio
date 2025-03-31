
import HeroSectionV3 from '@/components/hero_section/hero_section_v3';
import FooterV3 from '@/components/footer/footer_v3';
import ExperienceV3 from '@/components/experience/experience_v3';
import ProjectsV3 from '@/components/projects/projects_v3';
import SkillsV3 from '@/components/skills/skills_v3';
import { PortfolioData } from '@/components/data/portfolio';
import { useEffect } from 'react';

export default function PortfolioV3(props: PortfolioData) {
    const user = props.user;
    useEffect(() => {
        document.title = `${props.user.email.split('@')[0]} `
    }, [])

    return (
        <div className="bg-gradient-to-br  from-black to-futuristic-dark min-h-screen text-white overflow-hidden font-sans" >

            <HeroSectionV3 user={user} />

            {user.skills.length > 0 ? <SkillsV3 skills={user.skills} /> : null}

            {user.projects.length > 0 ? <ProjectsV3 projects={user.projects} /> : null}

            {user.experience.length > 0 ? <ExperienceV3 experiences={user.experience} /> : null}

            <FooterV3 github={user.github} linkedin={user.linkedin} twitter={user.twitter} />
        </div>
    );
};

