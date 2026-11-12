import {motion, useScroll, useTransform} from 'framer-motion'


export default function Hero(){
    const {scrollYProgress} = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.4] , [0, 120])
    const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
    const glowY = useTransform(scrollYProgress, [0, 0.5], [0, -100])

    return (
        <motion.div style={{y, opacity}} className=" relative flex flex-col items-center justify-center
        text-center pt-24 pb-16 px-4">
            <motion.div style={{y: glowY}} className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-zinc-700/20 rounded-full blur-3xl pointer-events-none -z-10">

            </motion.div>
            <h1  className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl mb-6">
                CRAFTING DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">EXPERIENCES
                 </span></h1>
            <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto"> Curated Bento Grids, Kinetic Physics, and Interactive 3D Work.</p>
            <span className="inline-flex items-center px-4 py-1.5 mb-6 text-xs font-medium text-white bg-zinc-900  rounded-full border border-white/10 shadow-xl mt-10">
            Avaliable for Creative Dev & 3D Projects
            </span>


        </motion.div>
    )
}