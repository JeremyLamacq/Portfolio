import { useEffect, useState } from "react";
import.meta.env;
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";
import "./Contact.scss";
import "./Contact.scss";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  useEffect(() => {
    // Initialisation d'EmailJS avec les clés de l'environnement Vite
    emailjs.init(import.meta.env.VITE_SERVICE_ID); // Utiliser la clé du service EmailJS
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
    <form id="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="contact_number" value="697483" />
      <label>Name</label>
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
      ></textarea>
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;
