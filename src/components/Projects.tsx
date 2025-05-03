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
    },
    {
      title: '3D Product Viewer',
      description: 'Interactive 3D product visualization using Three.js and WebGL.',
      image: '/image/Screenshot 2025-05-03 194121.png',
      tags: ['Three.js', 'WebGL', 'React', 'GSAP'],
      link: 'https://amaya.godcraft.fun/',
    },
    {
      title: 'AI-Powered Dashboard',
      description: 'Real-time analytics dashboard with AI-powered insights and predictions.',
      image: '/image/ai.png',
      tags: ['React', 'Node.js', 'TensorFlow', 'D3.js'],
      link: 'https://ai.godcraft.fun/',
    },
    {
      title: 'Movie Website',
      description: 'A modern movie streaming platform with personalized recommendations and user profiles.',
      image: '/image/moviesapp.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      link: 'https://movies.godcraft.fun/',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F45D01] to-[#6559FF]">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A showcase of our most impactful and innovative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  cardsRef.current[index] = el;
                }
              }}
              className="group backdrop-blur-xl bg-white/5 rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[#F45D01]/20"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 