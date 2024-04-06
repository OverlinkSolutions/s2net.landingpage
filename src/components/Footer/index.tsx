import footer from "./footer.module.sass";
import logo from "../../assets/images/logo.webp";

export default function Footer() {
  
  return (
    <>
      <footer id={footer.container} className="container autowrap">
        <aside id={footer.logo_container} className="container column">
          <img src={logo} alt="Logo" />
          <div className="container column">
            <span>Trabalhamos para te atender</span>
            <span>24h por dia</span>
          </div>
        </aside>
        <div id={footer.contact} className="container column">
          <h2>Disque Baterias</h2>
          <p>(79) 99850-1001</p>
          <p>(79) 99635-1002</p>
        </div>
      </footer>
    </>
  );
}
