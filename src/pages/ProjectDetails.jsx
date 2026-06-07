import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProjectDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const project = state?.project;
  
  const [currentImg, setCurrentImg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const isSimpleModal = !project.desc && !project.tags;
  const title = project.title || (project.type ? `${project.type.charAt(0).toUpperCase() + project.type.slice(1)} Project` : 'Project View');
  const images = project.images || [project.image];
  const activeImg = currentImg || project.currentImage || project.image || images[0];

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 pt-32 animate-fade-in space-y-6 min-h-[80vh] flex flex-col">
      <div>
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-foreground/70 hover:text-foreground hover:bg-white/10 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span className="text-sm font-medium">Back to Portfolio</span>
        </button>
      </div>

      <div className={`bg-[#0f0f11] border border-white/10 rounded-3xl w-full flex-grow overflow-hidden flex flex-col shadow-2xl`}>
        <div className="flex justify-between items-center p-6 md:p-8 border-b border-white/10">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h1>
        </div>
        
        <div className={`p-6 md:p-8 flex-grow flex ${isSimpleModal ? 'justify-center' : 'flex-col lg:flex-row'} gap-10`}>
          <div className={`${isSimpleModal ? 'w-full max-w-4xl flex justify-center' : 'lg:w-3/5'} space-y-6`}>
            <div className={`rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-black/50 p-2 ${isSimpleModal ? 'inline-block' : ''}`}>
              <img 
                src={activeImg} 
                alt={title} 
                className={`${isSimpleModal ? 'max-h-[70vh] w-auto object-contain' : 'w-full h-auto object-cover'} rounded-xl mx-auto`}
              />
            </div>
            {!isSimpleModal && images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-4 snap-x custom-scrollbar">
                {images.map((imgSrc, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentImg(imgSrc)}
                    className={`flex-shrink-0 snap-start rounded-lg overflow-hidden border-2 transition-all ${activeImg === imgSrc ? 'border-accent shadow-md transform scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                  >
                    <img src={imgSrc} className="w-24 h-24 object-cover" alt={`Thumbnail ${idx}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {!isSimpleModal && (
            <div className="lg:w-2/5 space-y-6">
              {project.desc && (
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <h2 className="text-sm font-semibold text-foreground/80 mb-2">Description</h2>
                  <p className="text-foreground/70 text-sm leading-relaxed">{project.desc}</p>
                </div>
              )}
              {project.tags && project.tags.length > 0 && (
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <h2 className="text-sm font-semibold text-foreground/80 mb-3">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-md bg-white/10 text-xs font-medium text-foreground/80 border border-white/5">
                        {tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.role && (
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <h2 className="text-sm font-semibold text-foreground/80 mb-2">Role</h2>
                  <p className="text-foreground/90 font-medium text-sm">{project.role}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
