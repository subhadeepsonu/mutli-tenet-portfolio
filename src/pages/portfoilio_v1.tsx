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
                {(dummy.user.skills.length > 0) ? <SkillsV1 user={dummy.user} /> : null}
                <div className="retro-divider"></div>
                {(dummy.user.projects.length > 0) ? <ProjectsV1 user={dummy.user} /> : null}
                <div className="retro-divider"></div>
                {(dummy.user.experience.length > 0) ? <ExperienceV1 user={dummy.user} /> : null}
                <FooterV1 email={dummy.user.email} />
            </div>
        </div>
    )
}