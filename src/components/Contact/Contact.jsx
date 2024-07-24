import styles from './Contact.module.css';

function Contact() {

  return (
    
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contato</h1>
      {/* <form action="">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Mensagem
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Mensagem"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Enviar" />
      </form> */}
      <p>Email: <strong>wmos.contato@gmail.com</strong></p>
      <p>Whatsapp: <strong>28999182544</strong></p>
    </section>

  );

}

export default Contact;