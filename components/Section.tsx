"use client";

import { motion } from "framer-motion";
import React from "react";

interface SectionProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

export default function Section({ title, icon, children }: SectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center gap-8 relative z-10 bg-retro-bg/80 p-8 md:p-12 rounded-xl border border-white/5 backdrop-blur-md"
        >
            <div className="flex items-center gap-3 text-3xl md:text-4xl font-bold text-retro-secondary border-b-4 border-retro-secondary pb-2 px-4">
                {icon}
                <h2>{title}</h2>
            </div>
            {children}
        </motion.div>
    );
}
