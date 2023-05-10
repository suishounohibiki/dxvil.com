/* eslint-disable react/no-unescaped-entities */
'use client'

import { siteConfig } from "@/config/site"
import ProjectTile from "../projectTile"
import ProjectsTitle from "../projectsTitle"

export default function IndexPage() {
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
           <ProjectsTitle />
        </section>
    )
}
