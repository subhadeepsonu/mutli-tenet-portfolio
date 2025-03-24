import ExperienceV1 from "@/components/experience/experience_v1"
import FooterV1 from "@/components/footer/footer_v1"
import HeroSectionV1 from "@/components/hero_section/hero_section_v1"
import ProjectsV1 from "@/components/projects/projects_v1"
import SkillsV1 from "@/components/skills/skill_v1"

import { userData } from "@/lib/constants"



export default function Portfolio() {
    const dummy = userData
    return (
        <div className="min-h-screen  bg-retro-background text-retro-text relative overflow-x-hidden">

            <div className="retro-scan-line"></div>
            <div className="retro-crt-flicker"></div>
            <div className="retro-noise"></div>


            <div className="relative z-10">
                <HeroSectionV1 user={dummy.user} />

                <main>


                    <div className="retro-divider"></div>
                    <SkillsV1 user={dummy.user} />

                    <div className="retro-divider"></div>
                    <ProjectsV1 user={dummy.user} />

                    <div className="retro-divider"></div>
                    <ExperienceV1 user={dummy.user} />
                </main>

                <FooterV1 />
            </div>
        </div>
    )
}