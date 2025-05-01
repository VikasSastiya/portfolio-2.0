import { FC } from 'react';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <nav className="flex items-center justify-between px-10 py-2">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F45D01] to-[#6559FF]">
          Portfolio
        </span>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection('skills')}
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection('services')}
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          Services
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection('testimonials')}
          className="text-white/80 hover:text-white transition-colors duration-300"
        >
          Testimonials
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="px-4 py-2 bg-gradient-to-r from-[#F45D01] to-[#6559FF] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#F45D01]/20 transition-all duration-300"
        >
          Contact
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white/80 hover:text-white transition-colors duration-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Header;