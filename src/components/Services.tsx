import { FC, useRef } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);


    // Add hover animations
    const cards = document.querySelectorAll(".service-card");
    cards.forEach(card => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.02,
          y: -5,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.in"
        });
      });
    });

  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and TypeScript.',
      icon: '💻',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Best Practices', 'Cross-browser Compatibility'],
    },
    {
      title: '3D Development',
      description: 'Interactive 3D experiences using Three.js and WebGL for immersive web applications.',
      icon: '🎮',
      features: ['3D Modeling', 'Animation', 'Physics Simulation', 'VR/AR Integration'],
    },
    {
      title: 'Backend Development',
      description: 'Robust backend solutions with Node.js, PHP, and MongoDB for scalable applications.',
      icon: '⚙️',
      features: ['API Development', 'Database Design', 'Authentication', 'Cloud Integration'],
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces designed with modern design principles.',
      icon: '🎨',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems'],
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F45D01] to-[#6559FF]">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to meet your specific needs and business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  cardsRef.current[index] = el;
                }
              }}
              className="service-card group backdrop-blur-sm bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[#F45D01]/20 transform-gpu"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="service-icon text-4xl">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-white/80 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item flex items-center gap-3 text-white/70">
                    <span className="w-2 h-2 rounded-full bg-[#F45D01]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 