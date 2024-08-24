import footer from "./footer.module.sass";
import { MdLocationOn, MdPhone, MdOutlineEmail } from "react-icons/md";
import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer id={footer.container} className="container autowrap">
        <aside id={footer.logo_container} className="container column">
          <div className="container column">
            <h2>S2 NET TELECOM</h2>
            <span>
              Atualmente nossa empresa se encontra em expansão, pois ampliamos
              nossa área de cobertura e agregamos novos serviços e sempre
              preocupados com nosso foco principal que é a satisfação dos nossos
              clientes.
            </span>
          </div>
        </aside>
        <aside id={footer.logo_container} className="container column">
          <h2>Contato</h2>
          <div id={footer.contact}>
            <MdLocationOn className={footer.icon}/>
            <p style={{ textAlign: "center" }} onClick={() => window.open("https://maps.app.goo.gl/wPWppHW3U5bXXVUa8","_blank")}>
              Rua Elisio Araujo, 43A
              <br />
              São Cristovão - Itabaiana/SE
            </p>
          </div>
          <div id={footer.contact}>
            <MdPhone className={footer.icon} />
            <p onClick={() => window.open("tel:5579991310616")}>(79) 99131-0616</p>
          </div>
          <div id={footer.contact}>
            <MdOutlineEmail className={footer.icon}/>
            <p onClick={() => window.open("mailto:contato@s2net.net")}>contato@s2net.net</p>
          </div>
        </aside>
        <aside id={footer.logo_container} className="container column">
          <h2>REDES SOCIAIS</h2>
          <div id={footer.icon_container} className="container row">
            <BsFacebook color="white" className={footer.icon_social_media} />
            <BsInstagram color="white" className={footer.icon_social_media} />
          </div>
        </aside>
      </footer>
      <footer id={footer.under} className="container column">
        <span>
          © {new Date().getFullYear()} S2 NET TELECOM - Todos os direitos reservados
        </span>
        <span>
         Desenvolvido por Overlink Solutions
        </span>
      </footer>
    </>
  );
}
