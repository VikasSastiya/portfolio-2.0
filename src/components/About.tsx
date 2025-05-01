import { FC } from 'react';

const About: FC = () => {
  return (
    <section className="relative p-10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#F45D01] rounded-full blur-2xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#6559FF] rounded-full blur-2xl opacity-20 animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F45D01] to-[#6559FF]">
                About Me
              </span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a passionate developer with a keen eye for design and a love for creating beautiful, functional digital experiences. With expertise in modern web technologies and a focus on user-centered design, I bring ideas to life through code.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-2">Experience</h3>
                <p className="text-white/80">5+ Years</p>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-2">Projects</h3>
                <p className="text-white/80">50+ Completed</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-[#F45D01] to-[#6559FF] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#F45D01]/20 transition-all duration-300">
                Download CV
              </button>
              <button className="px-6 py-3 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                View Skills
              </button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10">
              <div className="aspect-square bg-gradient-to-br from-[#F45D01] to-[#6559FF] rounded-2xl opacity-20" />
              <img src="/1000068353-Picsart-AiImageEnhancer.jpg-Photoroom.png" alt="Profile" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-80 bg-transparent rounded-full shadow-lg" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F45D01] rounded-full blur-xl opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 