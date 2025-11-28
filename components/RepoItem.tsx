interface RepoItemProps {
    name: string;
    desc: string;
    lang: string;
}

export default function RepoItem({ name, desc, lang }: RepoItemProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-white/10 hover:bg-white/5 transition-colors">
            <div>
                <h4 className="font-bold text-lg text-retro-text">{name}</h4>
                <p className="text-sm text-retro-text/60">{desc}</p>
            </div>
            <div className="mt-2 md:mt-0 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-retro-secondary"></span>
                <span className="text-sm font-mono text-retro-secondary">{lang}</span>
            </div>
        </div>
    );
}
