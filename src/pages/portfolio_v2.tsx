import { userData } from "@/lib/constants"
import HeroSectionV2 from '@/components/hero_section/hero_section_v2';
import SkillsV2 from '@/components/skills/skills_v2';
import ProjectsV2 from '@/components/projects/projects_v2';
import ExperienceV2 from '@/components/experience/experience_v2';
import FooterV2 from '@/components/footer/footer_v2';
import { PortfolioData } from "@/components/data/portfolio";

export default function PortfolioV2(props: PortfolioData) {
    const { user } = userData;

    return (
        <div className="bg-gradient-to-br from-white to-artsy-green/30 min-h-screen text-gray-800 font-sans" >
            <div className="fixed top-20 left-20 w-40 h-40 bg-artsy-yellow rounded-full opacity-20 blur-3xl parallax-element" data-speed="0.02"></div>
            <div className="fixed bottom-20 right-20 w-60 h-60 bg-artsy-peach rounded-full opacity-20 blur-3xl parallax-element" data-speed="0.05"></div>
            <div className="fixed top-1/3 right-1/4 w-24 h-24 bg-artsy-purple rounded-full opacity-10 blur-2xl parallax-element" data-speed="0.03"></div>

            <HeroSectionV2 user={user} />

            <SkillsV2 skills={user.skills} />

            <ProjectsV2 projects={user.projects} />

            <ExperienceV2 experiences={user.experience} />

            <FooterV2 socialLinks={user.socialLinks} />
        </div>
    );
};

