import { FC, useRef } from 'react';


const Skills: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);



  const skills = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
      ],
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'RESTful APIs', level: 95 },
      ],
    },
    {
      category: '3D Development',
      items: [
        { name: 'Three.js', level: 80 },
        { name: 'Blender', level: 75 },
        { name: 'WebGL', level: 70 },
      ],
    },
    {
      category: 'Design & Tools',
      items: [
        { name: 'Figma', level: 90 },
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 80 },
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
        
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F45D01] to-[#6559FF]">
              My Skills
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((category, index) => (
            <div 
              key={index} 
              ref={(el) => {
                if (el) {
                  cardsRef.current[index] = el;
                }
              }}
              className="group backdrop-blur-xl bg-white/5 rounded-3xl p-10 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[#F45D01]/20"
            >
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-3xl font-semibold text-white">{category.category}</h3>
                {/* <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F45D01] to-[#6559FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
              </div>
              <div className="space-y-8">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xl text-white/90 font-medium">{skill.name}</span>
                      <span className="text-lg text-white/70">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="progress-bar h-full bg-gradient-to-r from-[#F45D01] to-[#6559FF] rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                        data-width={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 