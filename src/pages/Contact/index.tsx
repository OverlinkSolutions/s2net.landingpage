import Footer from "../../components/Footer";
import Header from "../../components/Header";
import contact from "./contact.module.sass";
import ContactForm from "./sections/ContactForm";

export default function Contact() {
  return (
    <main id={contact.container} className="container column">
      <Header offset={150} />
      <div id={contact.title}>
        <h1>Contato</h1>
      </div>
      <ContactForm />
      <Footer />
    </main>
  );
}
