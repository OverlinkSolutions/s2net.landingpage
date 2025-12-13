import Typography from "../../../../components/Typography";
import { BiSupport } from "react-icons/bi";
import { BsFilePerson } from "react-icons/bs";
import { FaWhatsapp, FaFileSignature } from "react-icons/fa";

import our_services from "./our_services.module.sass";
import plans from "../ChoosePlan/plans.module.sass";
import { useMediaQuery } from "react-responsive";

enum ServiceButton {
  SUPPORT = "SUPPORT",
  WHATSAPP = "WHATSAPP",
  ONLINE_PURCHASE = "ONLINE_CONTRACT",
  SUBSCRIBER_CENTER = "SUBSCRIBER_CENTER",
} 

export default function OurServices() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const iconSize = isMobile ? 70 : 50;

  const s2Number = "557908000004181";

  const handleClick = (service: ServiceButton) => {
    switch (service) {
      case ServiceButton.SUPPORT:
        window.open(`https://wa.me/${s2Number}?text=${encodeURIComponent("Olá, gostaria de entrar em contato com o suporte")}`);
        break;
      case ServiceButton.WHATSAPP:
        window.open(`https://wa.me/${s2Number}?text=${encodeURIComponent("Olá, gostaria de entrar em contato com um atendente")}`);
        break;
      case ServiceButton.ONLINE_PURCHASE:
        setTimeout(() => {
          window.location.href = "/#"+plans.container
        }, 100);
        break;
      case ServiceButton.SUBSCRIBER_CENTER:
        window.open("https://central.s2net.net/central_assinante_web/login", "_blank");
        break;
    }
  }

  return (
    <>
    
      <section
        id={our_services.container_features}
        className={`container column ${our_services.containerImg}`}
      >
        <Typography
          className={our_services.about_us}
          title="Criamos um Provedor com Amor em Primeiro Lugar"
          alignment="center"
          description="Quando damos ouvidos a voz do coração, conseguimos oferecer produtos e serviços com excelência e eficiência."
          descriptionAlignment="center"
        />
        <div id={our_services.container} className="container row">
          <div id={our_services.item} onClick={() => handleClick(ServiceButton.SUPPORT)} className={"container column"}>
            {/* <img src={img_novoPublico} alt="Alcance um novo público" /> */}
            <BiSupport size={iconSize} />
            <Typography
              alignment="center"
              title="Suporte 24/7"
              description="Abertura de Suporte 24h através da nossa Central de Atendimento."
              titleFontSize="2rem"
            />
          </div>
          <div id={our_services.item} onClick={() => handleClick(ServiceButton.WHATSAPP)} className={"container column"}>
            {/* <img src={img_quebreBarreiras} alt="Alcance um novo público" /> */}
            <FaWhatsapp size={iconSize} />
            <Typography
              alignment="center"
              title="Atendimento Via WhatsApp"
              description="Fale diretamente com nossos atendentes! Disponível somente em horário comercial! "
              titleFontSize="2rem"
            />
          </div>
          <div id={our_services.item} onClick={() => handleClick(ServiceButton.ONLINE_PURCHASE)} className={"container column"}>
            {/* <img src={img_aumenteVisibilidade} alt="Alcance um novo público" /> */}
            <FaFileSignature size={iconSize} />
            <Typography
              alignment="center"
              title="Contrate On-line"
              description="Fale com nossa equipe e contrate sem sair de casa."
              titleFontSize="2rem"
            />
          </div>
          <div id={our_services.item} onClick={() => handleClick(ServiceButton.SUBSCRIBER_CENTER)} className={"container column"}>
            {/* <img src={img_aumenteVisibilidade} alt="Alcance um novo público" /> */}
            <BsFilePerson size={iconSize} />
            <Typography
              alignment="center"
              title="Central do Assinante"
              description="Segunda Via de Boletos, acompanhamento de Suporte e mudanças em contrato."
              titleFontSize="2rem"
            />
          </div>
        </div>
      </section>
    </>
  );
}
