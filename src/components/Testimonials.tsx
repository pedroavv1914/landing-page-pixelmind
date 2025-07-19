'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonialsData = [
  {
    quote: "A PixelMind transformou nossa presença online. Os resultados foram além das nossas expectativas, com um aumento de 200% em leads qualificados.",
    author: "Ana Silva",
    company: "CEO da InovaTech",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "O profissionalismo e a criatividade da equipe são incomparáveis. Eles entenderam nossa visão e a executaram com perfeição.",
    author: "Carlos Souza",
    company: "Diretor de Marketing da BuildCo",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Desde o design do site até a estratégia de conteúdo, cada detalhe foi pensado para o nosso sucesso. Recomendo fortemente!",
    author: "Juliana Costa",
    company: "Fundadora da Creative Minds",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    quote: "A agilidade e a comunicação transparente da PixelMind foram essenciais para o lançamento do nosso novo produto. Parceria de sucesso!",
    author: "Marcos Ferreira",
    company: "Gerente de Produto da TechSolutions",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    quote: "Estávamos perdidos em nossa estratégia digital. A PixelMind nos deu clareza e um plano de ação que trouxe resultados imediatos.",
    author: "Beatriz Lima",
    company: "Sócia da Health & Wellness",
    avatar: "https://randomuser.me/api/portraits/women/85.jpg"
  },
];

const Testimonials = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <section id="testimonials" className="section section-gray">
      <div className="container">
        <h2 className="section-title reveal">O Que Nossos Clientes Dizem</h2>
        <p className="section-subtitle reveal" style={{ transitionDelay: '0.2s' }}>
          A confiança e o sucesso dos nossos parceiros são a nossa maior conquista.
        </p>
        <div className="testimonials-carousel-wrapper reveal" style={{ transitionDelay: '0.4s' }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // Garante que o objeto de navegação exista antes de atribuir os refs
              if (swiper.params.navigation && typeof swiper.params.navigation === 'object') {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <p className="testimonial-quote">“{testimonial.quote}”</p>
                  <div className="testimonial-author-info">
                    <img src={testimonial.avatar} alt={testimonial.author} className="testimonial-avatar" />
                    <div>
                      <p className="testimonial-author">{testimonial.author}</p>
                      <p className="testimonial-company">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div ref={navigationPrevRef} className="swiper-button-prev-custom"></div>
          <div ref={navigationNextRef} className="swiper-button-next-custom"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
