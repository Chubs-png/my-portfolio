const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 mt-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <div className="font-bold text-foreground">
              Jhon Christian T. Osorio
            </div>
            <p className="text-foreground/50 text-sm mt-1">
              Web & Graphics Designer • Photographer
            </p>
          </div>
          <p className="text-foreground/50 text-xs font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
