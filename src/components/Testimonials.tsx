import { FC, useRef } from 'react';


const Testimonials: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);



  const testimonials = [
    {
      name: 'MS. GEETA P SOLANKI',
      role: 'CFO',
      company: 'Glovtouch',
      image: '/image/geeta.jpg',
      content: 'Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills helped us create a product that exceeded our expectations.',
    },
    {
      name: 'Panchal jaydip narendrabhai',
      role: 'CEO',
      company: 'Shree Jay Furniture',
      image: '/image/jd.JPG',
      content: 'The technical expertise and innovative solutions provided were instrumental in our product\'s success. Highly recommended for any complex web development project.',
    },
    {
      name: 'MR. SUMIT L CHUDASAMA',
      role: 'Co-Founder',
      company: 'Glovtouch',
      image: '/image/sumit.jpg',
      content: 'Collaborating on this project was seamless. Their understanding of modern web technologies and user experience principles made the development process smooth and efficient.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F45D01] to-[#6559FF]">
              Client Testimonials
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Hear what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  cardsRef.current[index] = el;
                }
              }}
              className="group backdrop-blur-xl bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[#F45D01]/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-white/70">{testimonial.role}</p>
                  <p className="text-white/50 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 