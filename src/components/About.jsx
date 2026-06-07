const About = () => {
  return (
    <>
      <div className="bento-card p-6 md:p-8 col-span-1 md:col-span-4 space-y-4 group animate-fade-in">
        <h2 className="text-xl font-bold text-foreground">About</h2>
        <div className="space-y-4 text-sm md:text-base text-foreground/70 leading-relaxed">
          <p>
            I am a passionate Information Technology graduate from St. Anthony's College 
            with a unique blend of technical expertise and creative vision. My academic 
            journey bridged the gap between functional coding and impactful visual storytelling.
          </p>
          <p>
            I am committed to building technology that is not only robust and 
            accessible but also aesthetically engaging. Whether through web development, 
            graphic design, or photography, I strive to create digital experiences that 
            resonate with users.
          </p>
        </div>
      </div>

      <div className="bento-card p-6 md:p-8 col-span-1 md:col-span-2 space-y-6 group animate-fade-in animation-delay-100 flex flex-col justify-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-foreground">Education</h2>
          </div>
          <div className="space-y-1 pl-13 border-l border-border ml-5 py-2 pl-6 relative">
            <div className="absolute left-[-5px] top-4 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background"></div>
            <p className="text-sm font-semibold text-foreground">BS Information Technology</p>
            <p className="text-xs text-foreground/70">St. Anthony's College</p>
            <p className="text-[10px] font-mono mt-1 px-1.5 py-0.5 rounded-md bg-white/5 text-foreground/50 inline-block">2022 - 2026</p>
          </div>
        </div>

        <div>
           <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-foreground">Specializations</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-foreground/80">Web Design</span>
            <span className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-foreground/80">Graphics</span>
            <span className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-foreground/80">Photography</span>
            <span className="px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-foreground/80">UI/UX</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
