import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FC, useRef } from 'react';


const Projects: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and MongoDB.',
      image: '/image/Screenshot 2025-05-03 193837.png',
      tags: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/kenilGamer/whitezone',
    },    
    {
      title: '3D Product Viewer',
      description: 'Interactive 3D product visualization using Three.js and WebGL.',
      image: '/image/Screenshot 2025-05-03 194121.png',
      tags: ['Three.js', 'WebGL', 'React', 'GSAP'],
      link: 'https://amaya.godcraft.fun/',
      github: 'https://github.com/kenilGamer/Amaya',
    },
    {
      title: 'AI-Powered Dashboard',
      description: 'Real-time analytics dashboard with AI-powered insights and predictions.',
      image: '/image/ai.png',
      tags: ['React', 'Node.js', 'TensorFlow', 'D3.js'],
      link: 'https://ai.godcraft.fun/',
      github: 'https://github.com/kenilGamer/AI-Image-Enhancer',
    },
    {
      title: 'Movie Website',
      description: 'A modern movie streaming platform with personalized recommendations and user profiles.',
      image: '/image/moviesapp.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      link: 'https://movies.godcraft.fun/',
      github: 'https://github.com/kenilGamer/Movies-app',
    },
  ];
   
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        end: "+=100%",
        scrub: 1,
        // markers: true,
      },
    });
    tl.from(".project-title", {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
    tl.from(".project-description", {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
    tl.from(".project-cards", {
      opacity: 0,
      scale: 0.1,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
    }); 
  }, []);
    
  
  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F45D01] to-[#6559FF] project-title">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-semibold font-mono project-description">
            A showcase of our most impactful and innovative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {projects.map((project, index) => (
            <section
              key={index}
              ref={(el: HTMLDivElement | null) => {
                if (el) {
                  cardsRef.current[index] = el;
                }
              }}
              className="group backdrop-blur-xl bg-white/5 rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[#F45D01]/20 project-cards"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                <p className="text-white/80 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-white/10 text-white/70 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white hover:text-[#F45D01] transition-colors duration-300"
                    >
                      <span>View Project</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white hover:text-[#F45D01] transition-colors duration-300"
                    >
                      <span>GitHub</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 