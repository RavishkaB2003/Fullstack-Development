import {useState} from 'react';
import {motion, AnimatePresence} from "framer-motion";
import type { LucideIcon } from 'lucide-react';

 export interface DockItemData {
    id:string;
    label:string;
    icon: LucideIcon;
    onClick: () => void;
}

interface DockProps {
    items: DockItemData[];
}

function DockButton({label, icon:Icon, onClick} : {label:string, icon: LucideIcon, onClick: () => void}){
    const [isHovered, setIsHovered] = useState(false);

    return (
    <motion.button 
        onHoverStart={ () => setIsHovered(true)}
        onHoverEnd= { () => setIsHovered(false)}
        whileHover={{scale: 1.25, y: -6}}
        whileTap={{scale: 0.95}}
        transition={{type: 'spring', stiffness: 400, damping: 18}}
        className="relative flex items-center justify-center p-3 bg-zinc-800/80 text-zinc-400 rounded-2xl border border-white/5 hover:text-white
        hover:bg-zinc-700 transition-colors cursor-pointer"> <Icon size={20} onClick={onClick} />

        <AnimatePresence>
            {isHovered && (
                <motion.span 
                 initial={{opacity: 0, y:10}}
                 animate={{opacity:1, y:0}}
                 exit={{opacity:0, y:6}}
                 className="absolute -top-10 px-2.5 py-1 text-xs font-medium text-white bg-zinc-900 rounded-lg
                 border border-white/10 shadow-xl pointer-events-none whitespace-nowrap">
                    {label}
                </motion.span>
            )}
        </AnimatePresence>
    </motion.button>
    )

    

}

export default function Dock({items}: DockProps){
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center px-4 py-3 gap-3 bg-zinc-900/80 backdrop-blur-md rounded-full border border-white/10 shadow-2xl z-50">
            {items.map((item) => (
                <DockButton key={item.id} label={item.label} icon={item.icon} onClick={item.onClick} />
            ))}
        </div>
    )

}


