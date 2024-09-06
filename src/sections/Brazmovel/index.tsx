import footer1 from "../../assets/images/footer1.png";
import footer2 from "../../assets/images/footer2.png";
import CARD_3 from "../../assets/images/CARD_3.webp";
import Typography from "../../components/Typography";
import { useMediaQuery } from "react-responsive";
import { MdPayments } from "react-icons/md";
import { FaListCheck, FaSignal } from "react-icons/fa6";

import brazmovel from "./brazmovel.module.sass";
import { Button } from "antd";

export default function Brazmovel() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const iconSize = isMobile ? 30 : 25;

  return (
    <section id={brazmovel.container}>
      <img className={brazmovel.footers} src={footer1} alt="Brazmovel" />
      <div id={brazmovel.content}>
        <div className={brazmovel.contentColumn}>
          <Typography
            title="A Brazmóvel chegou na S2Net!"
            alignment={isMobile ? "center" : "left"}
            description="Solicite agora seu plano com um chip Braz e fique sempre conectado!"
            descriptionAlignment={isMobile ? "center" : "left"}
          />
          <Typography
            title="Conheça as vantagens da Braz"
            alignment={isMobile ? "center" : "left"}
            description=""
            descriptionAlignment={isMobile ? "center" : "left"}
          />
          <div className={`container row ${brazmovel.brazAdvantages}`}>
            <MdPayments size={iconSize} />
            <Typography
              title=""
              alignment="left"
              description="Pague uma só conta e tenha internet em casa e no celular."
              descriptionAlignment="left"
            />
          </div>
          <div className={`container row ${brazmovel.brazAdvantages}`}>
            <FaSignal size={iconSize} />
            <Typography
              title=""
              alignment="left"
              description="A maior cobertura 5G do Brasil"
              descriptionAlignment="left"
            />
          </div>
          <div className={`container row ${brazmovel.brazAdvantages}`}>
            <FaListCheck size={iconSize} />
            <Typography
              title=""
              alignment="left"
              description="Acompanhe seu consumo pelo aplicativo Meu Braz."
              descriptionAlignment="left"
            />
          </div>
        </div>
        <div className={brazmovel.contentColumn}>
          <img className={brazmovel.contentImg} src={CARD_3} />
          {/* <Button>Conheça</Button> */}
        </div>
      </div>
      <img className={brazmovel.footers} src={footer2} alt="Brazmovel" />
    </section>
  );
}
