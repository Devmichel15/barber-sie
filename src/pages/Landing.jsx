

const Landing = () => {

  const CallAssistent = () => {
    window.open("https://wa.me/244900000000", "_blank");
    console.log("WhatsApp link clicked");
  }
  return (
    <div className="landing">
      {/* HERO */}
      <section className="hero">
        <nav className="navbar">
          <h2 className="logo">BarberPro</h2>
          <ul className="menu">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#whyus">Por que Nós</a></li>
            <li><a href="#gallery">Galeria</a></li>
            <li><a href="#testimonials">Clientes</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>

        <div className="hero-content">
          <h1>Estilo é atemporal</h1>
          <p>Tradição e modernidade em cada corte.</p>
          <a href="https://wa.me/244900000000" className="btn">
            Agendar Corte
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <section id="about" className="about">
        <h2>Sobre Nós</h2>
        <p>
          A <strong>BarberPro</strong> nasceu da paixão pelo estilo e pela tradição. 
          Somos mais que uma barbearia — somos um espaço de cultura masculina, 
          onde cada corte é feito com precisão, respeito e arte.
        </p>
        <p>
          Nosso objetivo é trazer o visual autêntico do homem moderno, combinando 
          o toque retrô com as tendências atuais. Aqui, o cliente é tratado com 
          cuidado, estilo e confiança.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section id="services" className="services">
        <h2>Serviços</h2>
        <div className="service-list">
          <div className="card">
            <h3>Corte Clássico</h3>
            <p>Limpo, preciso e cheio de estilo. Ideal para quem gosta do visual tradicional.</p>
            <span>3.000 AOA</span>
          </div>
          <div className="card">
            <h3>Low Fade</h3>
            <p>Transição suave, moderna e versátil para qualquer ocasião.</p>
            <span>3.500 AOA</span>
          </div>
          <div className="card">
            <h3>Moicano / Nudreds</h3>
            <p>Estilo ousado com toque artístico — marca pessoal e atitude.</p>
            <span>4.000 AOA</span>
          </div>
          <div className="card">
            <h3>Barba Premium</h3>
            <p>Modelagem, alinhamento e hidratação completa.</p>
            <span>2.000 AOA</span>
          </div>
          <div className="card">
            <h3>Corte + Barba</h3>
            <p>Combo completo para um visual impecável.</p>
            <span>4.500 AOA</span>
          </div>
        </div>
      </section>

      {/* POR QUE NÓS */}
      <section id="whyus" className="whyus">
        <h2>Por que escolher a BarberPro?</h2>
        <div className="whyus-grid">
          <div>
            <h3>🕰️ Tradição</h3>
            <p>Respeitamos as raízes da barbearia clássica com técnicas modernas.</p>
          </div>
          <div>
            <h3>💈 Profissionalismo</h3>
            <p>Equipe experiente, atenta a cada detalhe do teu visual.</p>
          </div>
          <div>
            <h3>🔥 Estilo Autêntico</h3>
            <p>Do low fade ao moicano — criamos cortes que expressam tua personalidade.</p>
          </div>
          <div>
            <h3>🤝 Atendimento Premium</h3>
            <p>Ambiente confortável, atendimento personalizado e pontualidade.</p>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="gallery" className="gallery">
        <h2>Galeria</h2>
        <p>Alguns dos cortes mais pedidos pelos nossos clientes:</p>
        <div className="gallery-grid">
          <img src="./public/haircut1.jpg" alt="Low Fade" />
          <img src="./public/haircut2.jpg" alt="Americano" />
          <img src="./public/haircut3.jpg" alt="Moicano" />
          <img src="./public/haircut4.jpg" alt="Nudreds" />
          <img src="./public/haircut5.jpg" alt="Barba Premium" />
        </div>
      </section>

      {/* TESTEMUNHOS */}
      <section id="testimonials" className="testimonials">
        <h2>O que dizem nossos clientes</h2>
        <div className="testimonials-list">
          <div className="testimonial">
            <p>"O melhor fade que já tive. Atendimento top e ambiente retrô incrível!"</p>
            <span>- Carlos M.</span>
          </div>
          <div className="testimonial">
            <p>"A BarberPro elevou o nível das barbearias em Luanda. Profissionalismo 100%."</p>
            <span>- Júlio P.</span>
          </div>
          <div className="testimonial">
            <p>"Saí com um corte moicano perfeito. Voltarei com certeza!"</p>
            <span>- André L.</span>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contact" className="contact">
        <h2>Contato</h2>
        <p>📍 Rua da Independência, Luanda</p>
        <p>📞 +244 900 000 000</p>
        <a href="https://wa.me/244900000000" className="btn" onClick={CallAssistent}>
          Falar no WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>BarberPro</h3>
            <p>Tradição e Estilo em cada corte.</p>
          </div>

          <div>
            <h4>Horário</h4>
            <p>Seg - Sáb: 8h00 às 19h00</p>
            <p>Dom: Fechado</p>
          </div>

          <div>
            <h4>Localização</h4>
            <iframe
              title="Mapa da Barbearia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.833664444!2d13.23347871530758!3d-8.814283793740263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f53e76cbaec9%3A0x7f7b0b28ff9f6f0!2sLuanda%2C%20Angola!5e0!3m2!1spt-PT!2sao!4v1691339397032!5m2!1spt-PT!2sao"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} BarberPro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
