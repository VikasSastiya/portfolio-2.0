import { FC, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: FC<HeroProps> = ({ scrollToSection }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
      gsap.context(() => {
      // Split text animation
      const split = SplitText.create(".split", { 
        type: "words" 
      });


      gsap.from(split.words, {
        duration: 1,
        rotate: "30%",
        y: -40,
        autoAlpha: 0,
        opacity: 0,
        stagger: 0.05,
        ease: "sine"
      });

      return () => split.revert();
    }, sectionRef);
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0  overflow-hidden pointer-events-none">
        <div className="bg-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6559FF] rounded-full blur-3xl opacity-20" />
        <div className="bg-element absolute top-1/3 left-1/3 w-64 h-64 bg-[#F45D01] rounded-full blur-2xl opacity-20" />
        <div className="bg-element absolute bottom-1/3 right-1/3 w-64 h-64 bg-[#004777] rounded-full blur-2xl opacity-20" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 h-full w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="h-full backdrop-blur-xl bg-white/5 rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 transform-gpu  transition-transform duration-300">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 split2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F45D01] via-[#6559FF] to-[#004777] animate-gradient">
              Frontend Developer
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-white/90 mb-4 split">Crafting Beautiful Digital Experiences</h2>
          <p className="text-xl sm:text-2xl text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed split">
            Building modern, responsive, and interactive web applications with React, TypeScript, and Next.js
          </p>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto leading-relaxed split">
            Specializing in elegant UI/UX design, blazing-fast performance optimization, and creating intuitive, pixel-perfect user interfaces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-[#F45D01] to-[#6559FF] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#F45D01]/20 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                View My Work
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Get in Touch
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4m0 0l6-6m-6 6l6 6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div 
          className="w-8 h-8 border-2 border-white/20 rounded-full cursor-pointer hover:border-white/40 transition-colors duration-300 flex items-center justify-center"
          onClick={() => scrollToSection('about')}
        >
          <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;