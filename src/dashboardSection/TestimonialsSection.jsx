import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [1, 2, 3]; // Simulated for repeated UI

  return (
    <section className="category-section testimonialsection">
      <div className="container">
        <div className="common-services-card position-relative overflow-hidden">
          <h2 className="common-card-headeing">What Our Customer Says</h2>
          <div className="testimonialswiper swiper-wrapper">
            {testimonials.map((_, i) => (
              <div className="swiper-slide" key={i}>
                <div className="single-testimonial">
                  <div className="row justify-content-center">
                    <div className="col-md-10 text-center">
                      <img src="./assets/img/testimonials-img.png" alt="User" className="mb-3 testimonial-user rounded-circle" />
                      <h3 className="common-card-headeing mb-2">John Smith</h3>
                      <div>
                        {Array(5).fill().map((_, idx) => (
                          <svg key={idx} width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.515 12.5731L6.5 10.4374L2.48344 12.5731L3.25231 8.04634L0 4.84119L4.49018 4.18117L6.5 0L8.50982 4.18117L13 4.84119L9.74769 8.04789L10.515 12.5731Z" fill="#FFC529" />
                          </svg>
                        ))}
                      </div>
                      <p className="common-subheading mt-3">
                        In a highly competitive market, finding truck drivers is one of the most challenging tasks...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
