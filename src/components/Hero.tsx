import { FC, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import TrueFocus from './TrueFocus';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: FC<HeroProps> = ({ scrollToSection }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.context(() => {
      // Add any GSAP animations here if needed
    }, sectionRef);
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div ref={contentRef} className="relative z-10 h-full w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="h-full bg-white/5 rounded-3xl p-8 sm:p-12 border border-white/10 transform-gpu transition-transform duration-300">
          <div className="mb-6">
            <TrueFocus 
              sentence="Frontend Developer"
              manualMode={false}
              blurAmount={7}
              borderColor="#6559FF"
              glowColor="rgba(101, 89, 255, 0.6)"
              textGradient="bg-gradient-to-r from-[#F45D01] to-[#6559FF]"
              animationDuration={1.5}
              pauseBetweenAnimations={0.5}
            />
          </div>
          <div className="mb-4">
            <h1 className='text-2xl sm:text-3xl text-white/90 mb-4 font-black'>Crafting Beautiful Digital Experiences</h1>
          </div>
          <p className="text-xl sm:text-2xl text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            Building modern, responsive, and interactive web applications with React, TypeScript, and Next.js
          </p>
          <p className="text-lg text-white/70 mb-8 max-w-md mx-auto leading-relaxed">
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