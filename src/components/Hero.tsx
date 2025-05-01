import { FC } from 'react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6559FF] rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-[#F45D01] rounded-full blur-2xl opacity-20 animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-[#004777] rounded-full blur-2xl opacity-20 animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F45D01] to-[#6559FF]">
              Creative Developer
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Crafting digital experiences with code and creativity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-[#F45D01] to-[#6559FF] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#F45D01]/20 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div 
          className="w-6 h-6 border-2 border-white/20 rounded-full cursor-pointer hover:border-white/40 transition-colors duration-300"
          onClick={() => scrollToSection('about')}
        />
      </div>
    </section>
  );
};

export default Hero;