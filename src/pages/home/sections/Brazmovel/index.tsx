import footer1 from "../../../../assets/images/footer1.png";
import footer2 from "../../../../assets/images/footer2.png";
import Typography from "../../../../components/Typography";
import { useMediaQuery } from "react-responsive";
import { MdOutlineSimCardDownload, MdPayments } from "react-icons/md";
import { FaListCheck, FaSignal } from "react-icons/fa6";
import { TbPhoneCall } from "react-icons/tb";
import { BiReceipt } from "react-icons/bi";

import brazmovel from "./brazmovel.module.sass";
import Card from "../../../../components/NewCard";
import { FaTiktok, FaWaze, FaWhatsapp } from "react-icons/fa";

export default function Brazmovel() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isHighRes = useMediaQuery({ query: "(min-width: 1600px)" });
  const iconSize = isMobile ? 30 : 25;

  const generateAdvantages = (
    icon: any,
    description: string,
    fontSize?: string
  ) => {
    return fontSize ? (
      <div className={`container row ${brazmovel.brazAdvantages}`}>
        {icon}
        <Typography
          title=""
          alignment="left"
          description={description}
          descriptionAlignment="left"
          descriptionFontSize={fontSize}
        />
      </div>
    ) : (
      <div className={`container row ${brazmovel.brazAdvantages}`}>
        {icon}
        <Typography
          title=""
          alignment="left"
          description={description}
          descriptionAlignment="left"
        />
      </div>
    );
  };

  return (
    <section id={brazmovel.container}>
      <img className={brazmovel.footers} src={footer1} alt="Brazmovel" />
      <div id={brazmovel.content}>
        <div className={brazmovel.contentColumn}>
          <div className={brazmovel.item}>
            <Typography
              title="A Brazmóvel chegou na S2Net!"
              alignment={isMobile ? "center" : "left"}
              description="Solicite agora seu plano com um chip Braz e fique sempre conectado!"
              descriptionAlignment={isMobile ? "center" : "left"}
            />
          </div>
          <div className={brazmovel.item}>
            <Typography
              title="Conheça as vantagens da Braz"
              alignment={isMobile || !isHighRes ? "center" : "left"}
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
            {generateAdvantages(
              <MdOutlineSimCardDownload size={iconSize} />,
              "Traga seu número e ganhe 2GB extras por 12 meses."
            )}
          </div>
        </div>

        <div className={brazmovel.contentRow}>
          <div className={brazmovel.cardItem}>
            <Card
              btnName="Conheça"
              btnBlock
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 4GB da Braz"
              content={
                <div className={brazmovel.description}>
                <Typography
                title={"Pré 4GB"}
                alignment="center"
                description={
                  "Pra você que quer ter controle total dos seus gastos."
                    }
                    descriptionAlignment="center"
                    />
                  <div>
                  {generateAdvantages(
                    <TbPhoneCall size={iconSize} />,
                    "Ligações ilimitadas para qualquer operadora por 15 dias.",
                    "10pt"
                  )}
                  {generateAdvantages(
                    <FaWhatsapp size={iconSize} />,
                    "WhatsApp ilimitado.",
                    "10pt"
                  )}
                  {generateAdvantages(
                    <FaWaze size={iconSize} />,
                    "Waze e Moovit ilimitado.",
                    "10pt"
                  )}
                </div>
                </div>
              }
            />
          </div>
          <div className={brazmovel.cardItem}>
            <Card
              btnName="Conheça"
              btnBlock
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 10GB da Braz"
              content={
                <div className={brazmovel.description}>
                  <Typography
                    title={"10GB"}
                    alignment="center"
                    description={"Nosso plano mais vendido!"}
                    descriptionAlignment="center"
                  />
                  {generateAdvantages(
                    <BiReceipt size={iconSize} />,
                    "Pague no boleto",
                    "10pt"
                  )}
                  {generateAdvantages(
                    <TbPhoneCall size={iconSize} />,
                    "Ligações ilimitadas para qualquer operadora por 30 dias.",
                    "10pt"
                  )}
                  {generateAdvantages(
                    <FaWhatsapp size={iconSize} />,
                    "WhatsApp ilimitado.",
                    "10pt"
                  )}
                  {generateAdvantages(
                    <FaWaze size={iconSize} />,
                    "Waze e Moovit ilimitado.",
                    "10pt"
                  )}
                </div>
              }
            />
          </div>
          <div className={brazmovel.cardItem}>
            <Card
              btnName="Conheça"
              btnBlock
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 14GB da Braz"
              content={
                <div className={brazmovel.description}>
                  <Typography
                    title={"14GB"}
                    alignment="center"
                    description={"Nosso plano custo benefício!"}
                    descriptionAlignment="center"
                  />
                  <div className={brazmovel.descriptionItems}>
                  {generateAdvantages(
                    <BiReceipt size={iconSize} />,
                    "Pague no boleto",
                    "10pt"
                  )}
                  {generateAdvantages(
                    <TbPhoneCall size={iconSize} />,
                    "Ligações ilimitadas para qualquer operadora por 30 dias.",
                    "10pt"
                  )}
                  {generateAdvantages(
                    <FaWhatsapp size={iconSize} />,
                    "WhatsApp ilimitado.",
                    "10pt"
                  )}
                  {generateAdvantages(
                    <FaWaze size={iconSize} />,
                    "Waze e Moovit ilimitado.",
                    "10pt"
                  )}
                  {generateAdvantages(
                    <FaTiktok size={iconSize} />,
                    "Facebook, Instagram, Tik Tok, Messenger, Tinder, e Pinterest ilimitado.",
                    "10pt"
                  )}
                  </div>
                </div>
              }
            />
          </div>
          <div className={brazmovel.cardItem}>
            <Card
              btnName="Conheça"
              btnBlock
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 23GB da Braz"
              content={
                <div className={brazmovel.description}>
                  <Typography
                    title={"23GB"}
                    alignment="center"
                    description={"Nosso plano top de linha!"}
                    descriptionAlignment="center"
                  />
                  {generateAdvantages(
                    <BiReceipt size={iconSize} />,
                    "Pague no boleto",
                    "10pt"
                  )}
                  {generateAdvantages(
                    <TbPhoneCall size={iconSize} />,
                    "Ligações ilimitadas para qualquer operadora por 30 dias.",
                    "10pt"
                  )}
                  {generateAdvantages(
                    <FaWhatsapp size={iconSize} />,
                    "WhatsApp ilimitado.",
                    "10pt"
                  )}
                  {generateAdvantages(
                    <FaWaze size={iconSize} />,
                    "Waze e Moovit ilimitado.",
                    "10pt"
                  )}
                  {generateAdvantages(
                    <FaTiktok size={iconSize} />,
                    "Facebook, Instagram, Tik Tok, Messenger, Tinder, e Pinterest ilimitado.",
                    "10pt"
                  )}
                </div>
              }
            />
          </div>
        </div>
      </div>
      <img className={brazmovel.footers} src={footer2} alt="Brazmovel" />
    </section>
  );
}
