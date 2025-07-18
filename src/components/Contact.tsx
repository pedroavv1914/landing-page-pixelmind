import React from 'react';

const Contact = () => (
  <section id="contact" className="section section-gray">
    <div className="container">
      <h2 className="section-title reveal">Entre em Contato</h2>
      <p className="section-subtitle reveal" style={{ transitionDelay: '0.2s' }}>Tem um projeto em mente? Adoraríamos ouvir sobre ele. Preencha o formulário abaixo.</p>
      <form className="contact-form reveal" style={{ transitionDelay: '0.4s' }}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Nome</label>
          <input type="text" id="name" name="name" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Mensagem</label>
          <textarea id="message" name="message" rows={4} className="form-textarea" required></textarea>
        </div>
        <div className="submit-button-wrapper">
          <button type="submit" className="submit-button">
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default Contact;
