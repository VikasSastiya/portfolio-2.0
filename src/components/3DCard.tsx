import { FC, useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  hoverScale?: number;
}

const Card3D: FC<CardProps> = ({ children, className = '', intensity = 10, hoverScale = 1.05 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const card = cardRef.current;

    if (!card) return;

    // Initial 3D transform
    gsap.set(card, {
      transformStyle: 'preserve-3d',
      transformPerspective: 1000,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
    });

    // Scroll animation with parallax effect
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      rotationY: intensity * 2,
      rotationX: intensity,
      y: 'random(-50, 50)',
      ease: 'none',
    });

    // Mouse move effect with intensity control
    const handleMouseMove = (e: MouseEvent) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * intensity;
      const rotateY = ((centerX - x) / centerX) * intensity;
      
      setMousePosition({ x: rotateX, y: rotateY });
      
      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      gsap.to(card, {
        scale: hoverScale,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity, hoverScale]);

  return (
    <div
      ref={cardRef}
      className={`transform-gpu transition-all flex items-center justify-center duration-300 hover:shadow-2xl ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) scale(${isHovered ? hoverScale : 1})`,
      }}
    >
      <div className="relative">
        {/* Glow effect */}
        <div 
          className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
        {children}
      </div>
    </div>
  );
};

export default Card3D; 