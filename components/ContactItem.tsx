import Link from "next/link";
import React from "react";

interface ContactItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
}

export default function ContactItem({ icon, label, value, href }: ContactItemProps) {
    const Content = () => (
        <div className="flex items-center gap-4 p-3 border border-white/5 rounded bg-white/5">
            <div className="text-retro-primary">
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-retro-text/50 uppercase tracking-wider">{label}</span>
                <span className="font-mono text-retro-text">{value}</span>
            </div>
        </div>
    );

    if (href) {
        return (
            <Link href={href} target="_blank" className="block hover:brightness-125 transition-all">
                <Content />
            </Link>
        );
    }

    return <Content />;
}
