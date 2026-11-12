import {motion} from "framer-motion";

interface FilterBarProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category:string) => void;
}

export default function FilterBar({ categories, activeCategory, onSelectCategory}: FilterBarProps){
    return (
        <div className="flex items-center justify-center flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
                <motion.button key={cat} onClick={() => onSelectCategory(cat)} whileTap={{scale: 0.95}}
                className={`flex items-center px-5 py-2 text-sm font-medium tracking-wide rounded-full transition-all cursor-pointer 
                ${activeCategory === cat ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' : 'bg-zinc-900 text-zinc-400 border border-white/10 hover:text-white'}`}>
                    {cat}
                </motion.button>
            ))}

        </div>
    )
}