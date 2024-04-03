import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";
import "./Contact.scss";

const ContactForm = () => {

  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_SERVICE_ID);
  }, []);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation de l'e-mail
    if (!validateEmail(formState.user_email)) {
      alert("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    // Nettoyage du user_name et du message avec DOMPurify
    const cleanedUserName = DOMPurify.sanitize(formState.user_name);
    const cleanedMessage = DOMPurify.sanitize(formState.message);

    // Vérification que les données sont purifiées
    if (
      formState.user_name !== cleanedUserName ||
      formState.message !== cleanedMessage
    ) {
      alert("Le contenu n'est pas correct");
      return;
    }

    // Envoi du formulaire avec les données nettoyées
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Email envoyé !");
          setFormState({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          alert("Veuillez recommencer");
          console.log(error);
          setFormState({
            user_name: "",
            user_email: "",
            message: "",
          });
        }
      );
  };

  return (
    <main id="mainContact">
      <h1>Contact</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input type="hidden" name="contact_number" value="697483" />

        <label>Nom et Prénom</label>
        <input
          type="text"
          name="user_name"
          value={formState.user_name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={formState.user_email}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
        />
        <div className="g-recaptcha" data-sitekey={import.meta.env.VITE_DATA_SITEKEY}/>
        <input type="submit" value="Envoyer" />
      </form>
    </main>
  );
};

export default ContactForm;
