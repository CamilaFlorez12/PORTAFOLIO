import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contacto</h2>
      <p className="contact-subtitle">
        ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad
      </p>

      <div className="contact-container">
        {/* 🔹 Información de contacto */}
        <div className="contact-info">
          <h3>Información de Contacto</h3>

          <div className="contact-item">
            <h4>Email</h4>
            <p>
              <a href="mailto:07camilaFlorezsantos@gmail.com">
                07camilaFlorezsantos@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-item">
            <h4>Teléfono</h4>
            <p>+57 322 341 9695</p>
          </div>

          <div className="contact-item">
            <h4>Ubicación</h4>
            <p>Colombia</p>
          </div>

          <div className="contact-note">
            Soy desarrolladora backend con conocimientos en Node.js, Express y
            MongoDB. Me apasiona crear soluciones eficientes, organizadas y con
            un enfoque lógico.  
            <br />
            <br />
            Actualmente busco una oportunidad para crecer profesionalmente y
            aplicar mis habilidades en proyectos reales. Si estás buscando una
            persona responsable, dedicada y con ganas de aprender, ¡estaré
            encantada de hablar contigo!
          </div>
        </div>

        <form className="contact-form">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" placeholder="Tu nombre" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="tu@email.com" />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" placeholder="Cuéntame sobre tu proyecto..." />

          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
