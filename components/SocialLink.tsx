import Link from "next/link";
import { ExternalLink } from "lucide-react";
import React from "react";

interface SocialLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

export default function SocialLink({ href, icon, label }: SocialLinkProps) {
    return (
        <Link href={href} target="_blank" className="flex items-center gap-4 p-3 hover:bg-retro-yellow/10 border border-transparent hover:border-retro-yellow/50 rounded transition-all group">
            <div className="text-retro-yellow group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <span className="font-bold text-retro-text group-hover:text-retro-yellow transition-colors">{label}</span>
            <ExternalLink className="ml-auto opacity-0 group-hover:opacity-100 text-retro-yellow w-4 h-4" />
        </Link>
    );
}
