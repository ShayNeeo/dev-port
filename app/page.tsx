"use client";

import {
    ArrowUpRight,
    Award,
    BrainCircuit,
    Code2,
    Database,
    Github,
    Mail,
    MapPin,
    Rocket,
    Send,
    Server,
    ShieldCheck,
    Terminal,
    Trophy,
    UserRound,
    Zap,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Stat = {
    label: string;
    value: string;
    tone: "green" | "blue" | "pink" | "yellow";
};

type Quest = {
    title: string;
    year: string;
    stack: string;
    summary: string;
    highlights: string[];
    href?: string;
    status: string;
};

type SkillGroup = {
    title: string;
    icon: React.ReactNode;
    skills: string[];
};

type Achievement = {
    title: string;
    detail: string;
    year: string;
};

type LinkItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
};

const contactPolicy = "No phone numbers on public contact";

const stats: Stat[] = [
    { label: "Top 10 GPA", value: "3.29/4", tone: "green" },
    { label: "W9 ecosystem", value: "4+ microservices", tone: "blue" },
    { label: "Scraper benchmark", value: "5x speedup", tone: "pink" },
    { label: "Data audit", value: "650k+ orders", tone: "yellow" },
];

const quests: Quest[] = [
    {
        title: "W9 Labs Network",
        year: "2025 - Present",
        stack: "Rust · Axum · Leptos · PostgreSQL · SurrealDB",
        summary:
            "A multi-service product lab with URL shortening, QR generation, markdown notes, auth, mail tooling, and an 8-bit voxel arcade landing hub.",
        highlights: [
            "Architected 4+ microservices behind Docker, Caddy, and Cloudflare WAF.",
            "Implemented OAuth 2.0 with PostgreSQL-backed identity across services.",
        ],
        href: "https://github.com/w9labs",
        status: "ONLINE",
    },
    {
        title: "Crypto Herding Analysis",
        year: "2025 - 2026",
        stack: "Python · Pandas · Stata · LaTeX",
        summary:
            "Quantitative research pipeline studying cryptocurrency herding during COVID-19 with market, VIX, and Google Trends signals.",
        highlights: [
            "Implemented CSAD, quantile regressions, and Markov Switching models.",
            "Automated LaTeX report generation for academic publication workflows.",
        ],
        status: "RESEARCH",
    },
    {
        title: "Real Estate Scraper",
        year: "2026",
        stack: "Python · AsyncIO · Playwright · curl_cffi",
        summary:
            "High-throughput extraction engine for cross-source price and area validation on real estate platforms.",
        highlights: [
            "Reverse-engineered direct APIs and async multiplexing for 5x speedup.",
            "Raised success rate with TLS fingerprinting and Playwright stealth.",
        ],
        status: "PIPELINE",
    },
    {
        title: "E-Commerce Intelligence",
        year: "2026",
        stack: "Python · R · BI · SHAP",
        summary:
            "Strategic data audit over 10 years of transactions, 121k customers, and 16.4B VND in order value.",
        highlights: [
            "Analyzed 650k+ orders and identified a 34.6% return-rate driver.",
            "Proposed sizing-guide and micro-hub logistics interventions.",
        ],
        status: "TOP 9",
    },
    {
        title: "Vocai",
        year: "Apr 2026",
        stack: "Rust · Axum · NVIDIA NIM · PostgreSQL",
        summary:
            "AI flashcard platform that generates study content, illustrations, and memory schedules for repeatable learning.",
        highlights: [
            "Integrated NVIDIA NIM and Pollinations AI for generated learning assets.",
            "Implemented SM-2 and Leitner spaced-repetition flows.",
        ],
        href: "https://vocai.top",
        status: "AI APP",
    },
    {
        title: "Nguyen Restaurant",
        year: "2025 - Present",
        stack: "TypeScript · Next.js · Tailwind CSS",
        summary:
            "Commercial restaurant website optimized for local discovery and practical customer conversion.",
        highlights: [
            "Built a live full-stack web presence for a real restaurant brand.",
            "Balanced responsive presentation with fast static delivery.",
        ],
        href: "https://nguyenrestaurant.de",
        status: "LIVE",
    },
];

const skillGroups: SkillGroup[] = [
    {
        title: "Systems",
        icon: <Server aria-hidden="true" />,
        skills: ["Rust", "Axum", "Leptos", "Tokio", "REST APIs", "OAuth 2.0", "JWT"],
    },
    {
        title: "Data Engineering",
        icon: <Database aria-hidden="true" />,
        skills: ["Python AsyncIO", "Pandas", "NumPy", "ETL", "Web Scraping", "Econometrics", "Time-Series"],
    },
    {
        title: "Product UI",
        icon: <Code2 aria-hidden="true" />,
        skills: ["Next.js 15", "React", "TypeScript", "Tailwind CSS 4", "Framer Motion", "Node.js"],
    },
    {
        title: "Infra",
        icon: <ShieldCheck aria-hidden="true" />,
        skills: ["Docker", "Caddy", "Nginx", "Cloudflare Pages", "Cloudflare WAF", "OCI", "Multi-region DNS"],
    },
    {
        title: "AI/ML",
        icon: <BrainCircuit aria-hidden="true" />,
        skills: ["Transformers", "Vision Models", "Gradient Boosting", "SHAP", "Scikit-learn", "NVIDIA NIM"],
    },
];

const achievements: Achievement[] = [
    {
        title: "Datathon 2026",
        detail: "Top 9 at VinUni Data Analysis Competition with an end-to-end 650k+ order audit.",
        year: "2026",
    },
    {
        title: "DAZONE 2025",
        detail: "Top 10 finalist using feature engineering, Gradient Boosting, and SHAP interpretation.",
        year: "2025",
    },
    {
        title: "Green Innovation Camp",
        detail: "Best Innovative Idea for sustainable strategy and product execution.",
        year: "2024",
    },
    {
        title: "IU Innovation Camp",
        detail: "Winner with an MVP shipped in a 36-hour hackathon.",
        year: "2023",
    },
    {
        title: "Scholarship",
        detail: "International University - VNU HCMC scholarship recipient, Semester 1 AY 2023-2024.",
        year: "2024",
    },
];

const primaryLinks: LinkItem[] = [
    { label: "GitHub", href: "https://github.com/ShayNeeo", icon: <Github aria-hidden="true" /> },
    { label: "LinkedIn", href: "https://linkedin.com/in/shayneeo/", icon: <span aria-hidden="true">in</span> },
    { label: "Email", href: "mailto:shayneeo@0.id.vn", icon: <Mail aria-hidden="true" /> },
    { label: "Telegram", href: "https://t.me/shayneeo", icon: <Send aria-hidden="true" /> },
];

const socialLinks: LinkItem[] = [
    { label: "X", href: "https://x.com/Shay_Neeo", icon: <span aria-hidden="true">X</span> },
    { label: "Facebook", href: "https://www.facebook.com/pqt05", icon: <span aria-hidden="true">f</span> },
    { label: "Instagram", href: "https://www.instagram.com/shayneeo_", icon: <span aria-hidden="true">Ig</span> },
    { label: "Reddit", href: "https://www.reddit.com/user/Shay_Neeo/", icon: <span aria-hidden="true">Rd</span> },
];

function toneClasses(tone: Stat["tone"]) {
    const tones = {
        green: "border-retro-secondary text-retro-secondary shadow-retro-secondary/20",
        blue: "border-retro-accent text-retro-accent shadow-retro-accent/20",
        pink: "border-retro-primary text-retro-primary shadow-retro-primary/20",
        yellow: "border-retro-yellow text-retro-yellow shadow-retro-yellow/20",
    };

    return tones[tone];
}

function SectionShell({
    id,
    icon,
    title,
    subtitle,
    children,
}: {
    id: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    children: React.ReactNode;
}) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 42 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-7 border-2 border-white/10 bg-retro-bg/90 p-5 shadow-[8px_8px_0_rgba(0,0,0,0.55)] backdrop-blur md:p-8"
        >
            <div className="flex flex-col gap-3 border-b-2 border-dashed border-white/15 pb-5 md:flex-row md:items-end md:justify-between">
                <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center border-2 border-retro-secondary bg-retro-secondary/10 text-retro-secondary shadow-[4px_4px_0_rgba(0,255,153,0.24)]">
                        {icon}
                    </div>
                    <div>
                        <p className="font-mono text-sm uppercase tracking-[0.28em] text-retro-primary">Quest Select</p>
                        <h2 className="text-4xl font-bold leading-none text-retro-text md:text-5xl">{title}</h2>
                    </div>
                </div>
                <p className="max-w-2xl font-sans text-sm leading-6 text-retro-text/72 md:text-right">{subtitle}</p>
            </div>
            {children}
        </motion.section>
    );
}

function ArcadeLink({ item }: { item: LinkItem }) {
    return (
        <Link
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            className="group flex min-h-12 items-center gap-3 border-2 border-white/10 bg-white/[0.04] px-4 py-3 text-retro-text transition hover:-translate-y-0.5 hover:border-retro-yellow hover:bg-retro-yellow/10 hover:text-retro-yellow"
        >
            <span className="grid h-6 w-6 place-items-center text-retro-yellow [&>svg]:h-5 [&>svg]:w-5">{item.icon}</span>
            <span className="font-mono text-sm uppercase tracking-[0.18em]">{item.label}</span>
            <ArrowUpRight className="ml-auto h-4 w-4 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
        </Link>
    );
}

function QuestCard({ quest, index }: { quest: Quest; index: number }) {
    const content = (
        <article className="group flex h-full flex-col border-2 border-white/10 bg-black/28 p-5 shadow-[6px_6px_0_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:border-retro-secondary hover:bg-retro-secondary/[0.06]">
            <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-retro-accent">
                        Quest {String(index + 1).padStart(2, "0")} / {quest.year}
                    </p>
                    <h3 className="mt-2 text-3xl font-bold leading-none text-retro-primary group-hover:text-retro-yellow">
                        {quest.title}
                    </h3>
                </div>
                <span className="border border-retro-yellow/60 px-2 py-1 font-mono text-xs uppercase tracking-[0.18em] text-retro-yellow">
                    {quest.status}
                </span>
            </div>
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.14em] text-retro-secondary">{quest.stack}</p>
            <p className="font-sans text-sm leading-6 text-retro-text/78">{quest.summary}</p>
            <ul className="mt-5 space-y-3 font-sans text-sm text-retro-text/72">
                {quest.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                        <Zap className="mt-1 h-4 w-4 shrink-0 text-retro-yellow" aria-hidden="true" />
                        <span>{highlight}</span>
                    </li>
                ))}
            </ul>
            {quest.href ? (
                <div className="mt-auto pt-6 font-mono text-xs uppercase tracking-[0.2em] text-retro-accent">
                    Open cartridge
                </div>
            ) : null}
        </article>
    );

    if (!quest.href) {
        return content;
    }

    return (
        <Link href={quest.href} target="_blank" className="block h-full">
            {content}
        </Link>
    );
}

export default function Home() {
    const { scrollY } = useScroll();

    const heroOpacity = useTransform(scrollY, [0, 720], [1, 0.15]);
    const heroScale = useTransform(scrollY, [0, 720], [1, 0.94]);

    return (
        <main className="relative isolate min-h-screen overflow-hidden px-4 py-5 md:px-8">
            <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(0,255,153,0.12),transparent_28%),radial-gradient(circle_at_78%_10%,rgba(255,0,85,0.16),transparent_30%),linear-gradient(180deg,rgba(10,10,20,0.82),rgba(12,10,18,0.97))]" />
            <div className="pixel-grid pointer-events-none fixed inset-0 -z-10 opacity-55" />

            <nav className="fixed left-1/2 top-4 z-40 hidden w-[min(960px,calc(100%-40px))] -translate-x-1/2 items-center justify-between border-2 border-white/10 bg-black/70 px-4 py-3 font-mono text-xs uppercase tracking-[0.22em] text-retro-text/80 backdrop-blur md:flex">
                <Link href="#top" className="text-retro-secondary hover:text-retro-yellow">
                    SHAYNEEO_OS
                </Link>
                <div className="flex items-center gap-5">
                    <Link href="#quests" className="hover:text-retro-yellow">
                        Quests
                    </Link>
                    <Link href="#loadout" className="hover:text-retro-yellow">
                        Loadout
                    </Link>
                    <Link href="#achievements" className="hover:text-retro-yellow">
                        Awards
                    </Link>
                    <Link href="#connect" className="hover:text-retro-yellow">
                        Connect
                    </Link>
                </div>
            </nav>

            <motion.section
                id="top"
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="relative z-0 mx-auto grid w-full max-w-6xl items-center gap-8 pb-8 pt-16 md:min-h-[94vh] md:grid-cols-[1.08fr_0.92fr] md:pb-0 md:pt-20"
            >
                <div className="flex flex-col gap-6 md:gap-7">
                    <div className="inline-flex w-fit items-center gap-3 border-2 border-retro-secondary bg-retro-secondary/10 px-4 py-2 font-mono text-sm uppercase tracking-[0.22em] text-retro-secondary shadow-[4px_4px_0_rgba(0,255,153,0.22)]">
                        <Terminal className="h-5 w-5" aria-hidden="true" />
                        Player 01 loaded
                    </div>

                    <div className="space-y-4">
                        <p className="font-mono text-base uppercase tracking-[0.24em] text-retro-accent md:text-lg md:tracking-[0.26em]">PHAM QUOC THANH / SHAYNEEO</p>
                        <h1 className="max-w-4xl text-5xl font-bold leading-[0.88] text-retro-text retro-shadow md:text-8xl">
                            FinTech Engineer
                            <span className="block text-retro-primary">MVP Architect</span>
                        </h1>
                        <p className="max-w-3xl font-sans text-base leading-7 text-retro-text/80 md:text-xl md:leading-8">
                            Rust/Systems Developer and Data Engineering builder in Ho Chi Minh City, turning finance research,
                            scraping pipelines, and product ideas into fast, shipped web systems.
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {primaryLinks.map((item) => (
                            <ArcadeLink key={item.label} item={item} />
                        ))}
                    </div>
                </div>

                <aside className="relative hidden border-2 border-retro-accent bg-black/34 p-4 shadow-[8px_8px_0_rgba(0,204,255,0.16)] md:block">
                    <div className="mb-4 flex items-center justify-between border-b-2 border-dashed border-retro-accent/30 pb-3 font-mono text-xs uppercase tracking-[0.22em] text-retro-accent">
                        <span>Character Sheet</span>
                        <span>HCMC</span>
                    </div>
                    <div className="grid gap-5 md:grid-cols-[0.82fr_1fr]">
                        <div className="relative aspect-square overflow-hidden border-2 border-retro-primary bg-retro-primary/10 shadow-[5px_5px_0_rgba(255,0,85,0.22)]">
                            <Image
                                src="/personal_image.png"
                                alt="Portrait of Pham Quoc Thanh"
                                fill
                                priority
                                sizes="(min-width: 768px) 260px, 70vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center gap-3">
                            <div className="border-2 border-white/10 bg-white/[0.04] p-3">
                                <p className="font-mono text-xs uppercase tracking-[0.18em] text-retro-text/50">Education</p>
                                <p className="mt-1 text-2xl font-bold leading-none text-retro-yellow">IU - VNU HCMC</p>
                                <p className="mt-2 font-sans text-sm leading-5 text-retro-text/70">
                                    Finance & Banking, Financial Investment, expected 2027.
                                </p>
                            </div>
                            <div className="border-2 border-white/10 bg-white/[0.04] p-3">
                                <p className="font-mono text-xs uppercase tracking-[0.18em] text-retro-text/50">Current build</p>
                                <p className="mt-1 text-2xl font-bold leading-none text-retro-secondary">W9 Labs</p>
                                <p className="mt-2 font-sans text-sm leading-5 text-retro-text/70">
                                    Product lab for Rust services, mail utilities, QR tools, and self-hosted infra.
                                </p>
                            </div>
                        </div>
                    </div>
                </aside>
            </motion.section>

            <div className="relative z-10 mx-auto mb-16 grid w-full max-w-6xl grid-cols-2 gap-3 md:grid-cols-4">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className={`border-2 bg-black/35 p-4 shadow-lg ${toneClasses(stat.tone)}`}
                    >
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-retro-text/55">{stat.label}</p>
                        <p className="mt-2 text-3xl font-bold leading-none">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="relative z-10 flex flex-col gap-16 pb-10">
                <SectionShell
                    id="quests"
                    icon={<Rocket aria-hidden="true" />}
                    title="Active Quests"
                    subtitle="CV-backed projects rewritten as readable proof: shipped systems, research pipelines, automation, and commercial web work."
                >
                    <div className="grid gap-5 md:grid-cols-2">
                        {quests.map((quest, index) => (
                            <QuestCard key={quest.title} quest={quest} index={index} />
                        ))}
                    </div>
                </SectionShell>

                <SectionShell
                    id="loadout"
                    icon={<Code2 aria-hidden="true" />}
                    title="Skill Loadout"
                    subtitle="A recruiter-readable inventory of what the arcade shell is really selling: systems, data, product UI, infrastructure, and AI/ML."
                >
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                        {skillGroups.map((group) => (
                            <div key={group.title} className="border-2 border-white/10 bg-black/30 p-4">
                                <div className="mb-4 flex items-center gap-3 text-retro-yellow">
                                    <div className="[&>svg]:h-5 [&>svg]:w-5">{group.icon}</div>
                                    <h3 className="text-2xl font-bold leading-none">{group.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="border border-retro-accent/35 bg-retro-accent/10 px-2 py-1 font-mono text-xs uppercase tracking-[0.12em] text-retro-accent"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </SectionShell>

                <SectionShell
                    id="achievements"
                    icon={<Trophy aria-hidden="true" />}
                    title="Achievement Items"
                    subtitle="Competition, scholarship, and research signals pulled from the newest CVs, without burying the engineering story."
                >
                    <div className="grid gap-4 md:grid-cols-5">
                        {achievements.map((achievement) => (
                            <div key={achievement.title} className="border-2 border-white/10 bg-black/30 p-4">
                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <Award className="h-6 w-6 text-retro-primary" aria-hidden="true" />
                                    <span className="border border-retro-primary/40 px-2 py-1 font-mono text-xs text-retro-primary">
                                        {achievement.year}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold leading-none text-retro-yellow">{achievement.title}</h3>
                                <p className="mt-3 font-sans text-sm leading-6 text-retro-text/72">{achievement.detail}</p>
                            </div>
                        ))}
                    </div>
                </SectionShell>

                <SectionShell
                    id="connect"
                    icon={<UserRound aria-hidden="true" />}
                    title="Contact Terminal"
                    subtitle="Public channels only: email, Telegram, LinkedIn, GitHub, and social profiles."
                >
                    <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
                        <div className="border-2 border-retro-secondary bg-retro-secondary/10 p-5">
                            <p className="font-mono text-sm uppercase tracking-[0.24em] text-retro-secondary">Ready for</p>
                            <h3 className="mt-3 text-4xl font-bold leading-none text-retro-text">
                                FinTech products, data systems, scraping infrastructure, and MVP builds.
                            </h3>
                            <p className="mt-4 font-sans text-sm leading-6 text-retro-text/74">
                                {contactPolicy}. The fastest public route is email or Telegram; GitHub and LinkedIn carry the
                                technical trail.
                            </p>
                            <div className="mt-6 flex items-center gap-2 font-mono text-sm uppercase tracking-[0.18em] text-retro-yellow">
                                <MapPin className="h-4 w-4" aria-hidden="true" />
                                Ho Chi Minh City, Vietnam
                            </div>
                        </div>
                        <div className="grid gap-3">
                            {[...primaryLinks, ...socialLinks].map((item) => (
                                <ArcadeLink key={item.label} item={item} />
                            ))}
                        </div>
                    </div>
                </SectionShell>

                <footer className="mx-auto w-full max-w-6xl border-t-2 border-dashed border-white/15 py-8 text-center font-mono text-sm uppercase tracking-[0.18em] text-retro-text/45">
                    © {new Date().getFullYear()} ShayNeeo. Built with Next.js, Tailwind CSS, and arcade-grade pixels.
                </footer>
            </div>
        </main>
    );
}
