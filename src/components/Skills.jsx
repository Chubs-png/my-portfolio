const Skills = () => {
  const skills = [
    { category: 'Frontend', items: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind', 'Bootstrap'] },
    { category: 'Backend', items: ['PHP', 'MySQL', 'Python'] },
    { category: 'Design', items: ['Photoshop', 'Figma', 'Canva'] },
    { category: 'Photography', items: ['Portrait', 'Event', 'Lightroom'] },
    { category: 'Developer Tools', items: ['Git', 'Github', 'GitLab', 'Vercel', 'VS Code', 'Discord', 'Trello', 'Teams'] }
  ];

  return (
    <div id="skills" className="bento-card p-6 md:p-8 col-span-1 md:col-span-2 space-y-6 group animate-fade-in animation-delay-300">
      <h2 className="text-xl font-bold text-foreground">Tech Stack</h2>
      
      <div className="space-y-4">
        {skills.map((skillGroup, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-semibold mb-2 text-foreground/80">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-1.5">
              {skillGroup.items.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="px-2 py-0.5 text-xs rounded-md bg-white/5 shadow-sm border border-white/10 text-foreground/70 hover:bg-white/10 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
