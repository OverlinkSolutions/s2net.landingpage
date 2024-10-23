import * as React from "react";
import { ConfigProvider, Radio } from "antd";
import plans from "./plans.module.sass";
import { useMediaQuery } from "react-responsive";

import { MdLiveTv } from "react-icons/md";
import { GiNetworkBars, GiReceiveMoney } from "react-icons/gi";
import { BiSupport, BiDevices } from "react-icons/bi";
import { FiTool } from "react-icons/fi";
import { CgGames } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import { RiSpeedUpFill } from "react-icons/ri";

import { colors } from "../../constants";
import NewCard from "../../components/NewCard";
import Typography from "../../components/Typography";

import trintamb from "../../assets/images/30mb.png";
import cinquentamb from "../../assets/images/50mb.png";
import setentamb from "../../assets/images/70mb.png";
import cemmb from "../../assets/images/100mb.png";
import duzentosmb from "../../assets/images/200mb.png";
import trezentosmb from "../../assets/images/300mb.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import useWindowDimensions from "../../utils/resizeWindow";

export default function Plans() {
  const [type, setType] = React.useState("cable");
  const { width, height } = useWindowDimensions();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const iconSize = isMobile ? 30 : 25;
  const cardWidth = isMobile ? 360 : 360;

  const generateAdvantages = (
    icon: any,
    description: string,
    fontSize?: string
  ) => {
    return fontSize ? (
      <div className={`container row ${plans.advantages}`}>
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
      <div className={`container row ${plans.advantages}`}>
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
    <section id={plans.container} className="container">
      <div id={plans.description} className="container column">
        <h1>Escolha seu plano e fique conectado com o mundo</h1>
      </div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: type === "cable" ? colors.primary : colors.secondary,
          },
        }}
      ></ConfigProvider>
      <div id={plans.cards} className="container row">
        <Swiper
          id={plans.contentRow}
          className="container"
          modules={[Pagination, A11y, Autoplay]}
          spaceBetween={50}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          slidesPerView={width / 340}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide className={plans.cardItem}>
            <NewCard
              title="300MB"
              image={trezentosmb}
              price={89.9}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 300MB"
              btnName="Contratar"
              content={
                <div>
                  <Typography
                    title={"300MB"}
                    alignment="center"
                    descriptionAlignment="center"
                  />
                  <div>
                    {generateAdvantages(
                     <RiSpeedUpFill size={iconSize}/>,
                      "Conexão com fibra óptica",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <MdLiveTv size={iconSize} />,
                      "Streaming em 8K",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <BiDevices size={iconSize} />,
                      "Vários Dispositivos ao Mesmo Tempo",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <FaRegStar size={iconSize} />,
                      "Acesso a Conteúdos Exclusivos",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <BiSupport size={iconSize} />,
                      "Suporte Técnico Dedicado",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <FiTool size={iconSize} />,
                      "Instalação Grátis",
                      "10pt"
                    )}
                  </div>
                </div>
              }
            />
          </SwiperSlide>
          <SwiperSlide className={plans.cardItem}>
            <NewCard
              title="200MB"
              image={duzentosmb}
              price={79.9}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 200MB"
              btnName="Contratar"
              content={
                <div>
                  <Typography
                    title={"200MB"}
                    alignment="center"
                    descriptionAlignment="center"
                  />
                  <div>
                    {generateAdvantages(
                      <RiSpeedUpFill size={iconSize}/>,
                      "Conexão com fibra óptica",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <MdLiveTv size={iconSize} />,
                      "Transmissão em 4K",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <BiDevices size={iconSize} />,
                      "Vários Dispositivos ao Mesmo Tempo",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <BiSupport size={iconSize} />,
                      "Suporte Técnico Dedicado",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <FiTool size={iconSize} />,
                      "Instalação Grátis",
                      "10pt"
                    )}
                  </div>
                </div>
              }
            />
          </SwiperSlide>
          <SwiperSlide className={plans.cardItem}>
            <NewCard
              title="100MB"
              image={cemmb}
              price={69.9}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 100MB"
              btnName="Contratar"
              content={
                <div className={plans.description}>
                  <Typography
                    title={"100MB"}
                    alignment="center"
                    descriptionAlignment="center"
                  />
                  <div>
                    {generateAdvantages(
                     <RiSpeedUpFill size={iconSize}/>,
                      "Conexão com fibra óptica",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <MdLiveTv size={iconSize} />,
                      "Transmissão em 4K",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <BiDevices size={iconSize} />,
                      "Vários Dispositivos ao Mesmo Tempo",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <BiSupport size={iconSize} />,
                      "Suporte Técnico Dedicado",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <FiTool size={iconSize} />,
                      "Instalação Grátis",
                      "10pt"
                    )}
                  </div>
                </div>
              }
            />
          </SwiperSlide>
          <SwiperSlide className={plans.cardItem}>
            <NewCard
              title="70MB"
              image={setentamb}
              description="Contrate agora por apenas*"
              price={"R$ 59.90*"}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 70MB"
              btnName="Contratar"
              content={
                <div className={plans.description}>
                  <h1 className={plans.cardTitle}>70MB</h1>
                  <div>
                    {generateAdvantages(
                      <RiSpeedUpFill size={iconSize} style={{transform: "scaleX(-1)"}}/>,
                      "Conexão via cabo",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <MdLiveTv size={iconSize} />,
                      "Transmissão em 4K",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <BiDevices size={iconSize} />,
                      "Vários Dispositivos ao Mesmo Tempo",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <BiSupport size={iconSize} />,
                      "Suporte Técnico Dedicado",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <FiTool size={iconSize} />,
                      "Instalação Personalizada",
                      "10pt"
                    )}
                  </div>
                </div>
              }
            />
          </SwiperSlide>
          <SwiperSlide className={plans.cardItem}>
            <NewCard
              title="50MB"
              image={cinquentamb}
              description="Contrate agora por apenas*"
              price={"R$ 49.90*"}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 50MB"
              btnName="Contratar"
              content={
                <div className={plans.description}>
                  <h1 className={plans.cardTitle}>50MB</h1>
                  <div>
                    {generateAdvantages(
                      <RiSpeedUpFill size={iconSize} style={{transform: "scaleX(-1)"}}/>,
                      "Conexão via cabo",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <MdLiveTv size={iconSize} />,
                      "Streaming sem Buffer",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <CgGames size={iconSize} />,
                      "Jogos Online Fluídos",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <BiSupport size={iconSize} />,
                      "Suporte Técnico Dedicado",
                      "10pt"
                    )}
                  </div>
                </div>
              }
            />
          </SwiperSlide>
          <SwiperSlide className={plans.cardItem}>
            <NewCard
              title="30 MB"
              image={trintamb}
              description="Contrate agora por apenas*"
              price={"R$ 39.90*"}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 30MB"
              btnName="Contratar"
              content={
                <div className={plans.description}>
                  <h1 className={plans.cardTitle}>30MB</h1>
                  <div>
                    {generateAdvantages(
                      <RiSpeedUpFill size={iconSize} style={{transform: "scaleX(-1)"}}/>,
                      "Conexão via cabo",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <MdLiveTv size={iconSize} />,
                      "Streaming em Qualidade",
                      "10pt"
                    )}
                    {generateAdvantages(
                      <GiReceiveMoney size={iconSize} />,
                      "Ótimo Custo-Benefício",
                      "10pt"
                    )}
                  </div>
                </div>
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div id={plans.cards} className="container row">
        <p>* Apenas para clientes com pagamento em dia</p>
      </div>
    </section>
  );
}
