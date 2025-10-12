import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página

    emailjs
      .sendForm(
        "service_miu5evv",   // 🟣 tu Service ID
        "template_ou2dht8",  // 🟣 tu Template ID
        e.target,
        "kFSd9vxxT4Q1A_4wg"  // 🟣 tu Public Key
      )
      .then(() => {
        e.target.reset(); // limpia los campos
      })
      .catch((error) => {
        console.error("Error al enviar mensaje:", error);
        alert("Hubo un problema, inténtalo de nuevo.");
      });
  };

  return (
    <section className="contact-section">
      <h2>Contacto</h2>
      <p className="contact-subtitle">
        ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad
      </p>

      <div className="contact-container">
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

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="tu@email.com" required />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" placeholder="Cuéntame sobre tu proyecto..." required />

          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
