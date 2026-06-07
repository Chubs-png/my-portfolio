import { useNavigate } from 'react-router-dom';

const Experience = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: '+Tech SmartBin',
      desc: 'A Website for an IoT-Based Recycling System for Plastic Bottles.',
      role: 'Frontend & UI/UX Designer',
      tags: ['HTML', 'Firebase', 'Tailwind', 'JavaScript'],
      images: ['/outputt/web1.webp', '/outputt/web11.webp', '/outputt/web111.webp', '/outputt/web1admin.webp', '/outputt/web1admin2.webp', '/outputt/web1admin3.webp', '/outputt/web1admin4.webp']
    },
    {
      id: 2,
      title: 'JCI Antique Kruhay Website',
      desc: 'A Website for JCI Antique Kruhay to showcase their projects through web platform.',
      role: 'Full-Stack Developer',
      tags: ['PHP', 'MySQL', 'Tailwind', 'JavaScript'],
      images: ['/outputt/web2.webp', '/outputt/web22.webp', '/outputt/web222.webp', '/outputt/web2222.webp', '/outputt/web22222.webp', '/outputt/web222222.webp', '/outputt/web2222222.webp']
    },
    {
      id: 3,
      title: 'Internship Time Tracker',
      desc: 'A Time Tracker for Interns to track their time and can also export the summary of their work to PDF File.',
      role: 'Full-Stack Developer',
      tags: ['PHP', 'MySQL', 'Tailwind', 'JavaScript', 'Python'],
      images: ['/outputt/web3.webp', '/outputt/web33.webp', '/outputt/web333.webp', '/outputt/web3admin.webp', '/outputt/web3admin2.webp', '/outputt/web3admin3.webp']
    }
  ];

  const openProject = (project) => {
    navigate('/project', { state: { project } });
  };

  return (
    <div id="experience" className="bento-card p-6 md:p-8 col-span-1 md:col-span-4 space-y-6 group animate-fade-in animation-delay-200">
      <h2 className="text-xl font-bold text-foreground">Featured Experience</h2>
      
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div 
            key={project.id}
            onClick={() => openProject(project)}
            className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer flex flex-col justify-between group/card"
          >
            <div>
              <h3 className="text-sm font-semibold text-foreground group-hover/card:text-accent transition-colors">{project.title}</h3>
              <p className="text-xs text-foreground/70 mt-1 line-clamp-2">{project.desc}</p>
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="px-2 py-0.5 text-[10px] rounded-md bg-white/10 text-foreground/80 border border-white/5">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-0.5 text-[10px] rounded-md bg-white/5 text-foreground/50 border border-white/5">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
              <div className="text-[11px] text-foreground/50 flex items-center gap-1.5 pt-3 border-t border-white/10">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>{project.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
