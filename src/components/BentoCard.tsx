import {motion} from "framer-motion";






interface BentoCardProps {
    id: number;
    title: string;
    tag: string;
    isSelected? : boolean;
    colSpan ? : string;
    onSelect : () => void;
}

export default function BentoCard({ id,title, tag, onSelect, isSelected = false, colSpan = " " }: BentoCardProps) {
    return (
        <motion.div layout layoutId={`card-${id}`}
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ scale: 1.02, y: -4}} whileTap={{scale:0.98}} transition={{type:'spring', stiffness: 350, damping: 25}}
        onClick={onSelect}
         className={`flex flex-col justify-between ${colSpan} p-6 h-48 font-medium
          bg-zinc-900 rounded-3xl border transition-colors cursor-pointer
           ${isSelected ? 'border-indigo-500 shadow-lg shadow-indigo-500/20' : 'border-white/10 hover:border-indigo-500/50'}`}>
            <span>{tag}</span>
            <h3>{title}</h3>
        </motion.div>
    )

}