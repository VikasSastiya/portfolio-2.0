import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { FC, useRef } from 'react';
import { SplitText } from 'gsap/SplitText';

interface AboutProps {
  scrollToSection: (id: string) => void;
}

const About: FC<AboutProps> = ({ scrollToSection }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<SplitText | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    if (textRef.current) {
      // Create SplitText instance
      splitRef.current = new SplitText(textRef.current, {
        type: "chars,words,lines"
      });

      // Setup event listeners for animation buttons
      const charsBtn = document.querySelector("#chars");
      const wordsBtn = document.querySelector("#words");
      const linesBtn = document.querySelector("#lines");

      if (charsBtn && splitRef.current?.chars) {
        charsBtn.addEventListener("click", () => {
          animationRef.current?.revert();
          animationRef.current = gsap.from(splitRef.current!.chars, {
            x: 150,
            opacity: 0,
            duration: 0.7,
            ease: "power4",
            stagger: 0.04
          });
        });
      }

      if (wordsBtn && splitRef.current?.words) {
        wordsBtn.addEventListener("click", () => {
          animationRef.current?.revert();
          animationRef.current = gsap.from(splitRef.current!.words, {
            y: -100,
            opacity: 0,
            rotation: "random(-80, 80)",
            duration: 0.7,
            ease: "back",
            stagger: 0.15
          });
        });

        // Add ScrollTrigger animation for words
        gsap.from(splitRef.current.words, {
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
          y: -100,
          opacity: 0,
          rotation: "random(-80, 80)",
          duration: 0.7,
          ease: "back",
          stagger: 0.15
        });
      }

      if (linesBtn && splitRef.current?.lines) {
        linesBtn.addEventListener("click", () => {
          animationRef.current?.revert();
          animationRef.current = gsap.from(splitRef.current!.lines, {
            rotationX: -100,
            transformOrigin: "50% 50% -160px",
            opacity: 0,
            duration: 0.8,
            ease: "power3",
            stagger: 0.25
          });
        });
      }

      // Cleanup function
      return () => {
        if (splitRef.current) {
          splitRef.current.revert();
        }
        animationRef.current?.revert();
        charsBtn?.removeEventListener("click", () => {});
        wordsBtn?.removeEventListener("click", () => {});
        linesBtn?.removeEventListener("click", () => {});
      };
    }
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 60%",
        end: "+=80%",
        scrub: 2,
      },
    });

    tl.from(".about-content-left", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    }, "<");
    tl.from(".about-content-right", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    }, "<");
    tl.from(".about-content-right-experience", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    }, ">");
    tl.from(".about-content-right-buttons", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    }, ">");
  }, []);

  return (
    <section ref={aboutRef} className="relative py-12 sm:py-16 lg:py-20">
      {/* Content */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center about-content-left">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-white about-content-left-title responsive-heading">
              <span className="bg-clip-text text-transparent bg-gradient-to-r text-center from-[#F45D01] to-[#6559FF]">
                About Me
              </span>
            </h2>
            <div ref={textRef} className="text-base text-center sm:text-lg lg:text-xl text-white/80 leading-relaxed about-content-left-text responsive-text">
              I'm Kenil Sangani, a passionate developer with a keen eye for design and a love for creating beautiful, functional digital experiences. With expertise in modern web technologies and a focus on user-centered design, I bring ideas to life through code.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Experience</h3>
                <p className="text-white/80">5+ Years</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl about-content-right-experience p-4 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Projects</h3>
                <p className="text-white/80">50+ Completed</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 about-content-right-buttons">
              <a 
                id="chars" 
                href="/cv.pdf" 
                download 
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#F45D01] to-[#6559FF] text-white rounded-full text-sm sm:text-base font-semibold hover:shadow-lg hover:shadow-[#F45D01]/20 transition-all duration-300 text-center"
              >
                Download CV
              </a>
              <button   
                id="words" 
                onClick={() => scrollToSection('skills')} 
                className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-white/20 text-white rounded-full text-sm sm:text-base font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Skills
              </button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative about-content-right">
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/10">
              <div className="aspect-square bg-gradient-to-br from-[#F45D01] to-[#6559FF] rounded-2xl opacity-20" />
              <img 
                src="/1000068353-Picsart-AiImageEnhancer.jpg-Photoroom.png" 
                alt="Profile" 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-52 sm:w-48 sm:h-64 lg:w-60 lg:h-80 bg-transparent rounded-full shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;