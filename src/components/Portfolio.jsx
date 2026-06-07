import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const projects = [
    { id: 1, type: 'web', image: '/outputt/web1.webp' },
    { id: 2, type: 'web', image: '/outputt/web2.webp' },
    { id: 3, type: 'web', image: '/outputt/web3.webp' },
    { id: 4, type: 'graphics', image: '/outputt/1.webp' },
    { id: 5, type: 'graphics', image: '/outputt/3.webp' },
    { id: 6, type: 'graphics', image: '/outputt/4.webp' },
    { id: 7, type: 'graphics', image: '/outputt/5.webp' },
    { id: 8, type: 'photography', image: '/outputt/photo1.webp' },
    { id: 9, type: 'photography', image: '/outputt/photo2.webp' },
    { id: 10, type: 'photography', image: '/outputt/photo3.webp' },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.type === filter);

  const openProject = (project) => {
    navigate('/project', { state: { project } });
  };

  return (
    <div id="portfolio" className="bento-card p-6 md:p-8 col-span-1 md:col-span-6 space-y-6 group animate-fade-in animation-delay-400">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-foreground">Visual Portfolio</h2>
        
        <div className="flex flex-wrap gap-1">
          {[
            { id: 'all', label: 'All' },
            { id: 'web', label: 'Web' },
            { id: 'graphics', label: 'Graphics' },
            { id: 'photography', label: 'Photo' }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-3 py-1 text-xs rounded-md transition-colors ${
                filter === btn.id
                  ? 'bg-white/20 text-foreground font-medium'
                  : 'text-foreground/50 hover:bg-white/5 hover:text-foreground/80'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            onClick={() => openProject(project)}
            className="relative aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer group/item"
          >
            <img
              src={project.image}
              alt={`Portfolio item ${project.id}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110 opacity-80 group-hover/item:opacity-100"
            />
            <div className="absolute inset-0 bg-black/20 group-hover/item:bg-transparent transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
