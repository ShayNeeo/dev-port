"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Mail, Send, Terminal, Code, Server, Globe, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import RepoItem from "@/components/RepoItem";
import SocialLink from "@/components/SocialLink";
import ContactItem from "@/components/ContactItem";

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    return (
        <main ref={containerRef} className="flex flex-col items-center w-full min-h-screen p-4 md:p-24 gap-24">
            {/* Hero Section */}
            <motion.section
                className="h-screen flex flex-col items-center justify-center text-center sticky top-0 z-0 w-full"
                style={{ opacity, scale }}
            >
                <div className="relative w-48 h-48 mb-8 rounded-full overflow-hidden border-4 border-retro-primary shadow-[0_0_20px_rgba(255,0,85,0.5)]">
                    <Image
                        src="/personal_image.png"
                        alt="ShayNeeo"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <h1 className="text-6xl md:text-8xl font-bold mb-4 retro-shadow tracking-tighter">
                    SHAYNEEO
                </h1>
                <div className="flex items-center gap-2 text-xl md:text-2xl text-retro-secondary font-mono">
                    <Terminal className="w-6 h-6" />
                    <span>Full Stack Developer</span>
                    <span className="animate-pulse">_</span>
                </div>
                <p className="mt-4 text-retro-text/80 max-w-lg text-lg">
                    Building retro-futuristic web experiences and robust backend systems.
                </p>
            </motion.section>

            {/* Spacer for scrollytelling */}
            <div className="h-[50vh]"></div>

            {/* Projects Section */}
            <Section title="Active Projects" icon={<Code />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                    <ProjectCard
                        title="Portfolio Alternative"
                        desc="Alternative portfolio design"
                        link="https://sgn.is-a.dev"
                        tags={["Web", "Design"]}
                    />
                    <ProjectCard
                        title="W9 Tools"
                        desc="Short-link, QR Code generator in Rust"
                        link="https://w9.se"
                        tags={["Rust", "Axum", "HTMX"]}
                    />
                    <ProjectCard
                        title="W9 Mail"
                        desc="Mailing server conversion tools"
                        link="https://w9.nu/convert"
                        tags={["TypeScript", "Next.js"]}
                    />
                    <ProjectCard
                        title="Nguyen Restaurant"
                        desc="Restaurant website with booking system"
                        link="https://nguyenrestaurant.de"
                        tags={["React", "Tailwind"]}
                    />
                    <ProjectCard
                        title="Daily Reminders"
                        desc="Reminder service by w9labs"
                        link="https://reminder.w9.nu"
                        tags={["Rust", "Actix"]}
                    />
                    <ProjectCard
                        title="w9labs"
                        desc="Community driven OSS project"
                        link="https://github.com/w9labs"
                        tags={["Open Source", "Community"]}
                    />
                </div>
            </Section>

            {/* w9labs Section */}
            <Section title="w9labs Organization" icon={<Server />}>
                <div className="w-full max-w-4xl bg-retro-bg/50 p-8 border border-retro-accent/30 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-retro-accent/20 rounded-full flex items-center justify-center text-retro-accent">
                            <Globe />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-retro-accent">w9labs</h3>
                            <Link href="https://github.com/w9labs" className="text-sm text-retro-text/60 hover:text-retro-primary transition-colors">
                                github.com/w9labs
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <RepoItem name="w9-tools" desc="Short-link, QR Code generator in Rust" lang="Rust" />
                        <RepoItem name="w9-mail" desc="Mailing server utilities" lang="TypeScript" />
                        <RepoItem name="w9-daily-reminders" desc="Daily reminder service" lang="Rust" />
                        <RepoItem name="discussions" desc="Community discussions" lang="Markdown" />
                    </div>
                </div>
            </Section>

            {/* Contact & Socials Section */}
            <Section title="Connect" icon={<User />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-retro-yellow mb-4 border-b border-retro-yellow/30 pb-2">Socials</h3>
                        <SocialLink href="https://github.com/ShayNeeo" icon={<Github />} label="GitHub" />
                        <SocialLink href="https://x.com/Shay_Neeo" icon={<span className="font-bold text-lg">X</span>} label="Twitter / X" />
                        <SocialLink href="https://linkedin.com/in/shayneeo/" icon={<span className="font-bold">in</span>} label="LinkedIn" />
                        <SocialLink href="https://www.facebook.com/pqt05" icon={<span className="font-bold">f</span>} label="Facebook" />
                        <SocialLink href="https://www.instagram.com/shayneeo_" icon={<span className="font-bold">Ig</span>} label="Instagram" />
                        <SocialLink href="https://www.reddit.com/user/Shay_Neeo/" icon={<span className="font-bold">Rd</span>} label="Reddit" />
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-retro-primary mb-4 border-b border-retro-primary/30 pb-2">Contact</h3>
                        <ContactItem icon={<Mail />} label="Email" value="shayneeo@0.id.vn" href="mailto:shayneeo@0.id.vn" />
                        <ContactItem icon={<Send />} label="Telegram" value="@shayneeo" href="https://t.me/shayneeo" />
                        <ContactItem icon={<span className="font-bold">#</span>} label="Discord" value="ShayNeeo#8298" />
                    </div>
                </div>
            </Section>

            <footer className="w-full py-8 text-center text-retro-text/40 text-sm mt-12">
                <p>© {new Date().getFullYear()} ShayNeeo. Built with Next.js & Retro Vibes.</p>
            </footer>
        </main>
    );
}
