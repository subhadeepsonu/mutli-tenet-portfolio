import { PortfolioData } from "@/components/data/portfolio"
import ExperienceV1 from "@/components/experience/experience_v1"
import FooterV1 from "@/components/footer/footer_v1"
import HeroSectionV1 from "@/components/hero_section/hero_section_v1"
import ProjectsV1 from "@/components/projects/projects_v1"
import SkillsV1 from "@/components/skills/skill_v1"
import { useEffect } from "react"


export default function PortfolioV1(props: PortfolioData) {
    useEffect(() => {
        console.log(props)
    }, [])
    const dummy = props
    return (
        <div className="min-h-screen  bg-retro-background text-retro-text relative overflow-x-hidden">
            <div className="relative z-10">
                <HeroSectionV1 user={dummy.user} />
                <div className="retro-divider"></div>
                <SkillsV1 user={dummy.user} />
                <div className="retro-divider"></div>
                <ProjectsV1 user={dummy.user} />
                <div className="retro-divider"></div>
                <ExperienceV1 user={dummy.user} />

                <FooterV1 />
            </div>
        </div>
    )
}