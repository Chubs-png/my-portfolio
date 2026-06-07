const Hero = () => {
  return (
    <section id="home" className="mb-4 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
        <img
          src="/chub.webp"
          alt="Jhon Christian T. Osorio"
          className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-2xl flex-shrink-0"
        />
        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">
                Jhon Christian T. Osorio
              </h1>
              <p className="text-sm md:text-base text-foreground/70 mt-1 flex items-center justify-center md:justify-start gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Malandog, Hamtic, Antique, Philippines
              </p>
              <p className="text-sm md:text-base text-foreground/70 mt-2 flex items-center justify-center md:justify-start gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                jhonchristianosorio@gmail.com
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
            <span className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-foreground/80 border border-white/10">IT Graduate</span>
            <span className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-foreground/80 border border-white/10">Web Design</span>
            <span className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-foreground/80 border border-white/10">Photography</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
