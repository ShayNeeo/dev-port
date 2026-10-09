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
    role: string;
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

type Role = {
    org: string;
    period: string;
    detail: string;
};

type LinkItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
};

const contactPolicy = "No phone numbers on public contact";

const stats: Stat[] = [
    { label: "GPA, top 10%", value: "3.33/4.00", tone: "green" },
    { label: "DataTrust noise cut", value: "81.8%", tone: "pink" },
    { label: "EcoMiles test suite", value: "526 green", tone: "blue" },
    { label: "Deadheading removed", value: "-17.1%", tone: "yellow" },
];

const quests: Quest[] = [
    {
        title: "DataTrust OS v5.0",
        year: "2026",
        role: "Lead architect, 392 of 546 commits",
        stack: "Python · FastAPI · DuckDB · LangGraph · React 19 · Docker",
        summary:
            "Causal AI console for VinGroup mobility telemetry. Telemetry goes in, an incident queue comes out, and nothing reaches the warehouse until a person signs a hash.",
        highlights: [
            "184,715 rows cleared the detector stack in 15.21s: 775 signals, 141 incidents, 81.8% noise cut.",
            "Four detector layers (constraints, rolling MAD, invariants, CUSUM/PELT) feed a ReAct escalation ladder.",
            "The repo also records its own misses: RCA top-1 hit 0.33 on the sealed holdout and 0.0 on the C1 harness.",
        ],
        href: "https://t086.w9.nu",
        status: "ONLINE",
    },
    {
        title: "SHB Corporate Sales Copilot",
        year: "2026",
        role: "Dominant committer, 104 of 192 commits, VAIC corporate banking track",
        stack: "Python · FastAPI · PostgreSQL 17 · MCP RAG · Flutter · Gemini",
        summary:
            "Agent workspace for SHB corporate relationship managers. It reads a client's paperwork, checks eligibility against fixed rules, and waits for the RM to approve before anything reaches the CRM.",
        highlights: [
            "Ran 40 cases through a single agent and a specialist chain: missing-info recall 0.89 against 0.0.",
            "Unsupported-claim rate came back at 0.0, citations valid on every case.",
            "The model never decides eligibility. Rules do, which is why the eval is comparable.",
        ],
        href: "https://vaic.w9.nu",
        status: "ONLINE",
    },
    {
        title: "GSMartPin",
        year: "Oct 2026",
        role: "Sole author, 36 of 36 commits, VinUni V-RIC research assistant",
        stack: "Python stdlib · Hungarian algorithm · LaTeX · Zotero gates",
        summary:
            "Simulation study for Green Smart Mobility: does an EV dispatcher that knows each car's state of charge beat one that ignores it?",
        highlights: [
            "Battery-aware dispatch cut deadheading 17.1% and purchased energy 10.2% across 7 seeds.",
            "60 vehicles, 9 zones, 20 days, 3 demand scenarios, day and night, both arms.",
            "22 verification gates pass. Demand is synthetic, no GreenSM logs exist yet, and the README says so plainly.",
        ],
        status: "RESEARCH",
    },
    {
        title: "EcoMiles / GreenLogix",
        year: "2026",
        role: "Fullstack and AI, 82 of 90 commits, two startup contests",
        stack: "FastAPI · SQLite · Flutter · Cloudflare Worker · Valhalla · OSRM",
        summary:
            "Route and emissions tool for urban delivery fleets. Takes orders, returns truck routes, and puts a fuel and CO2 number on each one.",
        highlights: [
            "526 backend tests green in 13.9s, plus a frozen OpenAPI snapshot across 23 paths.",
            "Routing works without Google Maps: Valhalla truck profile, then OSRM, then haversine, with honest DEGRADED flags.",
            "CO2 factors trace to IPCC 2006. Labelled a TTW accounting estimate, not a certified ISO 14083 pack.",
        ],
        href: "https://greenlogix.w9.nu",
        status: "SHIPPED",
    },
    {
        title: "Nani Chinese",
        year: "Sep 2026",
        role: "Sole freelancer, 55 hour contract",
        stack: "Next.js 16 · React 19 · Cloudflare Workers · D1 · Drizzle · R2",
        summary:
            "Freelance build for a Vietnamese Chinese tutoring centre. Lessons, exercises, flashcards, spaced repetition, and a teacher CMS.",
        highlights: [
            "Fixed an R2 range bug where every PDF chunk request pulled the whole 4.19MB file back.",
            "21 of 21 Playwright checks green across desktop and mobile, screenshots committed to the repo.",
            "181 source files, 17.7k lines of app code and 5.8k lines of tests.",
        ],
        href: "https://nanichinese.vn",
        status: "LIVE",
    },
    {
        title: "OdysseyBot",
        year: "Aug 2026",
        role: "Team lead and graph engineer, 37 of 65 commits",
        stack: "Python · discord.py · LangGraph · NetworkX · SQLite FTS5",
        summary:
            "Discord bot for a course cohort. It answers logistics questions from official sources only, and hands off to a TA when the answer actually lives in student chat.",
        highlights: [
            "6,870 Discord messages cleaned to 5,145, then 1,438 triples and 987 entities in the graph.",
            "Golden set went from 18 of 20 to 20 of 20 once a clarification step was added.",
            "TA median wait measured at 33 minutes, p90 past 10 hours. That gap was the pitch.",
        ],
        status: "HACKATHON",
    },
    {
        title: "An Tâm Số",
        year: "Jul 2026",
        role: "Data and impact analyst, 39 of 164 commits, UNESCO Youth Hackathon",
        stack: "Expo 57 · React Native 0.86 · Express · Gemma · Docker · Cloudflare Tunnel",
        summary:
            "Scam-warning app for Vietnamese adults over 55. Screenshot a suspicious message and it comes back with the red flags in plain language.",
        highlights: [
            "Seven deterministic risk rules with Vietnamese regex, plus an explainer that falls back to templates when the model fails.",
            "Tier 1 redaction strips Vietnamese phone, ID, bank and money patterns before anything reaches the model.",
            "Zod contracts on all seven work package interfaces, plus ADRs and CI gates.",
        ],
        href: "https://unesco.w9.nu",
        status: "LIVE",
    },
    {
        title: "DustGuard VN",
        year: "2026",
        role: "Frontend routes and auth, plus the print poster pipeline",
        stack: "React 18 · Tailwind · Cloudflare Workers · D1 · R2 · Typst",
        summary:
            "Inspection platform for construction dust. Officers rank risk, open violation cases, generate the legal documents, and track the fix.",
        highlights: [
            "Top 6 at the Clean Air Innovation 2026 final, Hanoi, 07/09/2026.",
            "Built the Citizen, Staff and Executive portals and the auth flow.",
            "70x90cm poster compiled from one Typst source, with 36 QA and release checks behind it.",
        ],
        href: "https://dustguard.phamphunguyenhung.com",
        status: "TOP 6",
    },
    {
        title: "Viettoria",
        year: "Sep 2026",
        role: "53 of 54 commits",
        stack: "Next.js 16 · Three.js · react-three/fiber · Draco · Tailwind 4",
        summary:
            "Store selling collectible models of five Vietnamese monuments, each with a 3D viewer in the browser.",
        highlights: [
            "Draco compressed models land between 1.1 and 1.5MB each, inside the size target.",
            "Public assets went 332MB down to 15MB, hero video 17.5MB down to 2.6MB.",
            "41 of 41 routes render, 168 unit tests pass, zero type errors.",
        ],
        href: "https://viettoria.pages.dev",
        status: "LIVE",
    },
    {
        title: "VinAI Prep",
        year: "Jul 2026",
        role: "Sole author, 24 commits in two days",
        stack: "React 19 · Vite 8 · TypeScript 6 · FastAPI · Gemini · Expo",
        summary:
            "Exam prep app for the Vingroup and VinUni AI Applied entrance exam, in Vietnamese, on web and mobile.",
        highlights: [
            "409 questions across four modules, with Gemini rubric scoring for short answers and case studies.",
            "Full CI for both the web deploy and the mobile build.",
        ],
        href: "https://master.vin-ai-prep.pages.dev",
        status: "LIVE",
    },
    {
        title: "Nguyen Restaurant",
        year: "2025 - 2026",
        role: "Sole author, 280 commits over eight months",
        stack: "Rust · Axum · sqlx · SQLite · Next.js 16 · React 19",
        summary:
            "Bilingual site and ordering system for a real restaurant. Menu, cart, coupons, reservations, newsletter, admin, JWT auth.",
        highlights: [
            "Rust backend on SQLite with a Next.js 16 frontend, deployed by a single script on Debian 13.",
            "Collapsed 9 redundant migrations into one clean initial schema.",
            "Payment and email integrations are wired but have never run against live keys.",
        ],
        href: "https://nguyenrestaurant.de",
        status: "LIVE",
    },
    {
        title: "Anna's Archive MCP",
        year: "Aug 2026",
        role: "Sole author",
        stack: "Rust · tokio · reqwest · scraper · MCP",
        summary:
            "CLI and MCP server that searches Anna's Archive, works out which mirror is actually up, and falls back through IPFS and Libgen when a download stalls.",
        highlights: [
            "7 MCP tools, 3,505 lines, 13 tests.",
            "Ranks mirrors off the official list, cross checked against heartbeats.",
            "Atomic writes and path traversal safe filenames.",
        ],
        href: "https://github.com/ShayNeeo/annas-mcp",
        status: "OPEN",
    },
    {
        title: "Rạp Xiếc Bỏ Túi",
        year: "Sep 2026",
        role: "Led the AI, 3D and export work, 20 of 35 commits",
        stack: "React 19 · Vite 8 · Three.js · Gemini RAG · jsPDF",
        summary:
            "Portal about modern circus in Vietnam: history, venue maps, an interactive 3D circus, and a chatbot that answers from a curated Vietnamese corpus.",
        highlights: [
            "RAG index of 17 chunks at 3072 dimensions across 7 topic categories.",
            "Traced the broken ticket PNG export to a pixelRatio OOM, a foreignObject clip, and scrollWidth against clientWidth.",
        ],
        href: "https://github.com/ShayNeeo/rapxiecbotui",
        status: "OPEN",
    },
];

const skillGroups: SkillGroup[] = [
    {
        title: "AI Systems",
        icon: <BrainCircuit aria-hidden="true" />,
        skills: ["vLLM", "TensorRT-LLM", "llama.cpp", "Ollama", "PagedAttention", "GGUF/AWQ 4-bit", "MCP", "A2A", "ReAct", "LangGraph", "Unsloth", "PyTorch"],
    },
    {
        title: "Data",
        icon: <Database aria-hidden="true" />,
        skills: ["Iceberg", "Delta Lake", "DuckDB", "Qdrant", "Milvus", "Feast", "PostgreSQL", "SurrealDB", "SQLite", "Prisma", "Drizzle", "Pandas"],
    },
    {
        title: "Languages",
        icon: <Code2 aria-hidden="true" />,
        skills: ["Python", "FastAPI", "AsyncIO", "Rust", "Axum", "Leptos", "TypeScript", "Next.js", "React", "R", "Stata", "SQL"],
    },
    {
        title: "Infra",
        icon: <Server aria-hidden="true" />,
        skills: ["Docker", "Cloudflare Pages", "Workers", "Tunnels", "WAF", "GitHub Actions", "Linux", "Bash", "Nginx", "Caddy", "HA/DR", "GPU FinOps"],
    },
    {
        title: "Quant & Obs",
        icon: <ShieldCheck aria-hidden="true" />,
        skills: ["OpenTelemetry", "OpenLineage", "Sentry", "CI gating", "PLS-SEM", "CB-SEM", "Quantile Regression", "Forecasting", "Econometrics", "Causal Discovery"],
    },
];

const achievements: Achievement[] = [
    {
        title: "Clean Air Innovation 2026",
        detail: "Top 6 finalist with DustGuard VN. Final round in Hanoi, 07/09/2026.",
        year: "2026",
    },
    {
        title: "ESG thesis, IU 2026",
        detail: "Market reactions to negative ESG disclosure in S&P 500 Form 8-K filings, advised by Dr Nguyen Phuc Lam Thy.",
        year: "2026",
    },
    {
        title: "Datathon 2026",
        detail: "Top 9. Python and R ETL over 650k transactions worth 16.4B VND, with the reports generated automatically.",
        year: "2026",
    },
    {
        title: "Grab the Future 2026",
        detail: "National technical finalist. Mobility prototype built on public transit and demographic data.",
        year: "2026",
    },
    {
        title: "DAZONE and Quant Challenge",
        detail: "Top 10 at DAZONE 2025. Ranked 12 of 198 at the Vietnam Quant Challenge 2026.",
        year: "2025",
    },
    {
        title: "IU Innovation Camp",
        detail: "First place. Working MVP built and pitched in a 36 hour sprint.",
        year: "2023",
    },
];

const roles: Role[] = [
    {
        org: "Research Assistant, VinUni V-RIC x VinSmart Future",
        period: "Jun 2026 - Present",
        detail:
            "Green Smart Mobility group. Telemetry streaming and anomaly detection for VinFast and V-Green fleets, then causal root cause work on battery health inside the V-RIC sandbox.",
    },
    {
        org: "Retail Banking Operations Intern, BIDV",
        period: "Feb 2026 - Apr 2026",
        detail:
            "Audited retail credit files, checked collateral valuations, kept CRM data clean, helped with SmartBanking onboarding.",
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
            <p className="mb-3 font-mono text-xs uppercase leading-5 tracking-[0.14em] text-retro-text/55">{quest.role}</p>
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
                    <Link href="#log" className="hover:text-retro-yellow">
                        Log
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
                            AI Systems
                            <span className="block text-retro-primary">Infrastructure</span>
                        </h1>
                        <p className="max-w-3xl font-sans text-base leading-7 text-retro-text/80 md:text-xl md:leading-8">
                            I serve models, ship the pipelines under them, and write down what broke. Finance degree,
                            systems and infrastructure work since.
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
                                    Finance and Banking, Financial Investment. Graduating 2027.
                                </p>
                            </div>
                            <div className="border-2 border-white/10 bg-white/[0.04] p-3">
                                <p className="font-mono text-xs uppercase tracking-[0.18em] text-retro-text/50">Current build</p>
                                <p className="mt-1 text-2xl font-bold leading-none text-retro-secondary">VinUni V-RIC</p>
                                <p className="mt-2 font-sans text-sm leading-5 text-retro-text/70">
                                    Research assistant on electric fleet telemetry and causal reliability.
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
                    subtitle="Shipped work, with the numbers each repo actually recorded. Where a project has limits, the card says so."
                >
                    <div className="grid gap-5 md:grid-cols-2">
                        {quests.map((quest, index) => (
                            <QuestCard key={quest.title} quest={quest} index={index} />
                        ))}
                    </div>
                </SectionShell>

                <SectionShell
                    id="log"
                    icon={<Server aria-hidden="true" />}
                    title="Work Log"
                    subtitle="Two stints so far. The current one is research work on EV fleet telemetry for VinSmart Future."
                >
                    <div className="grid gap-4 md:grid-cols-2">
                        {roles.map((role) => (
                            <div key={role.org} className="border-2 border-white/10 bg-black/30 p-5">
                                <div className="mb-3 flex items-start justify-between gap-3">
                                    <h3 className="text-2xl font-bold leading-tight text-retro-yellow">{role.org}</h3>
                                    <span className="shrink-0 border border-retro-accent/40 px-2 py-1 font-mono text-xs text-retro-accent">
                                        {role.period}
                                    </span>
                                </div>
                                <p className="font-sans text-sm leading-6 text-retro-text/72">{role.detail}</p>
                            </div>
                        ))}
                    </div>
                </SectionShell>

                <SectionShell
                    id="loadout"
                    icon={<Code2 aria-hidden="true" />}
                    title="Skill Loadout"
                    subtitle="The actual inventory: serving, data, languages, infrastructure, and the quantitative side that came with the finance degree."
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
                    subtitle="Competitions and academic work, kept separate from the engineering so neither gets buried."
                >
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
                            <p className="font-mono text-sm uppercase tracking-[0.24em] text-retro-secondary">Open to</p>
                            <h3 className="mt-3 text-4xl font-bold leading-none text-retro-text">
                                AI infrastructure, data platforms, model serving, and full stack MVP work.
                            </h3>
                            <p className="mt-4 font-sans text-sm leading-6 text-retro-text/74">
                                {contactPolicy}. Email or Telegram gets the fastest answer. GitHub and LinkedIn carry the rest
                                of the trail.
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
