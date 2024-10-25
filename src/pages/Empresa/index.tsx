import Footer from "../../components/Footer";
import Header from "../../components/Header";
import empresa from "./empresa.module.sass";
import AboutUs from "./sections/AboutUs/AboutUs";

export default function Empresa() {
  return (
    <main id={empresa.container} className="container column">
      <Header offset={150} />
      <div id={empresa.title}>
        <h1>Empresa</h1>
      </div>
      <AboutUs />
      <Footer />
    </main>
  );
}
