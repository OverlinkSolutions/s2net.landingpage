import * as React from "react";
import Typography from "../../components/Typography";
import img_novoPublico from "../../images/icon_publico.png";
import img_quebreBarreiras from "../../images/icon_quebreBarreiras.png";
import img_aumenteVisibilidade from "../../images/icon_visibilidade.png";
import img_quemSomos from "../../images/icon_quemSomos.webp";
import { BiSupport } from "react-icons/bi";
import { BsFilePerson } from "react-icons/bs";
import { FaWhatsapp, FaFileSignature } from "react-icons/fa";

import about_us from "./about_us.module.sass";
import { useMediaQuery } from "react-responsive";



export default function AboutUs() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const iconSize = isMobile ? 70 : 50;

  return (
    <>
      <section id={about_us.container_features} className={`container column ${about_us.containerImg}`}>
        <div id={about_us.container} className="container row">
          <div id={about_us.item} className={"container column"}>
            {/* <img src={img_novoPublico} alt="Alcance um novo público" /> */}
            <BiSupport size={iconSize}/>
            <Typography
              alignment="center"
              title="Suporte 24/7"
              description="Abertura de Suporte 24h através da nossa Central de Atendimento."
            />
          </div>
          <div id={about_us.item} className={"container column"}>
            {/* <img src={img_quebreBarreiras} alt="Alcance um novo público" /> */}
            <FaWhatsapp size={iconSize}/>
            <Typography
              alignment="center"
              title="Atendimento Via WhatsApp"
              description="Fale diretamente com nossos atendentes! Disponível somente em horário comercial! "
            />
          </div>
          <div id={about_us.item} className={"container column"}>
            {/* <img src={img_aumenteVisibilidade} alt="Alcance um novo público" /> */}
            <FaFileSignature size={iconSize}/>
            <Typography
              alignment="center"
              title="Contrate On-line"
              description="Fale com nossa equipe e contrate sem sair de casa."
            />
          </div>
          <div id={about_us.item} className={"container column"}>
            {/* <img src={img_aumenteVisibilidade} alt="Alcance um novo público" /> */}
            <BsFilePerson size={iconSize}/>
            <Typography
              alignment="center"
              title="Central do Assinante"
              description="Segunda Via de Boletos, acompanhamento de Suporte e mudanças em contrato."
            />
          </div>
        </div>
      </section>

    </>
  );
}
