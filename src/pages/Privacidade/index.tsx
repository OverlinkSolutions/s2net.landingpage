import Footer from "../../components/Footer";
import Header from "../../components/Header";
import empresa from "./privacidade.module.sass";
import Privacy from "./sections/AboutUs/Privacy";

export default function PrivacyPolicy() {
  return (
    <main id={empresa.container} className="container column">
      <Header offset={150} />
      <div id={empresa.title}>
        <h1>Política de Privacidade</h1>
      </div>
      <Privacy />
      <Footer />
    </main>
  );
}
