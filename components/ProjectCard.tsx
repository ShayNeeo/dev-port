import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    desc: string;
    link: string;
    tags: string[];
}

export default function ProjectCard({ title, desc, link, tags }: ProjectCardProps) {
    return (
        <Link href={link} target="_blank" className="group">
            <div className="retro-card h-full p-6 rounded-lg flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity text-retro-primary">
                    <ExternalLink size={20} />
                </div>
                <h3 className="text-2xl font-bold text-retro-primary group-hover:text-retro-yellow transition-colors">{title}</h3>
                <p className="text-retro-text/80 flex-grow font-sans">{desc}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded text-retro-accent font-mono">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
