import {useState, useEffect} from 'react'
import { type Project, type ProjectCategory } from './types/project';
import {getProjects} from './service/ProjectService'
import BentoCard from './components/BentoCard'
import FilterBar from './components/FilterBar'
import {AnimatePresence, motion} from 'framer-motion'
import {Home, Briefcase, User, Mail} from 'lucide-react'
import Dock, { type DockItemData} from './components/Dock'
import Hero from './components/Hero'



const categories: ('All' | ProjectCategory)[] = [
  'All',
  'Web Design',
  'Web Development',
  'UI/UX Design',
  'BackEnd Development',
];

const dockItems : DockItemData[] = [
  {id: 'home', label: 'Home', icon: Home, onClick: () => console.log('Home clicked')},
  {id: 'portfolio', label: 'Portfolio', icon: Briefcase, onClick: () => console.log('Portfolio clicked')},
  {id: 'about', label: 'About', icon: User, onClick: () => console.log('About clicked')},
  {id: 'contact', label: 'Contact', icon: Mail, onClick: () => console.log('Contact clicked')}
]


function App() {

  const [selectId, setSelectId] = useState<number | null>(null);
  const [ActiveCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All');  const [projects, setProjects] = useState<Project[]>([]);
  const [Loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
          setLoading(false);
      }
    }
    fetchProjects();
   }, []);

  const filteredProjects = ActiveCategory === 'All' ? projects : projects.filter(
    (p) => p.tag === ActiveCategory
  );

  const activeProject = projects.find((p) => p.id === selectId);

  return (
    <main className= "min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <Hero/>

        
        <FilterBar
        categories={categories}
        activeCategory={ActiveCategory}
        onSelectCategory={(cat) => setActiveCategory(cat)} />

        {Loading ? (
          <div className="flex items-center justify-center col-span-full h-48 text-zinc-500 font-medium animate-pulse">
            Loading creating showcase...
            </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
          {filteredProjects.map( (p) => (
            <BentoCard
            id={p.id}
            key={p.id}
            title={p.title}
            tag = {p.tag}
            colSpan={p.colSpan}
            isSelected={selectId === p.id}
            onSelect={ () => setSelectId(selectId === p.id ? null : p.id)} />

          ))}
          </AnimatePresence>
        </div>
        )}


        <AnimatePresence>
          {activeProject && (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backfrop-blur-md">
              <div className="absolute inset-0" onClick={() => setSelectId(null)}></div>
              <motion.div layoutId={`card-${activeProject.id}`} 
              className="relative flex flex-col justify-between w-full max-w-lg p-8 bg-zinc-900 rounded-3xl border border-white/10 shadow-2xl z-10">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    {activeProject.tag}
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-2">
                    {activeProject.title}
                  </h2>
                  <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
                    {activeProject.description || "An immersive digital experience built with cutting-edge interaction physics"}
                  </p>
                </div>

                <div className="flex items-center justify-end mt-8">
                  <button onClick={() => setSelectId(null)}
                    className="px-5 py-2 text-sm font-medium text-white bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors cursor-pointer">
                    Close
                  </button>

                </div>
                
                
              </motion.div>
              

            </motion.div>
          )}
        </AnimatePresence>

      </div>

      <Dock items={dockItems} />
      

      

    </main>
    
  )
}

export default App
