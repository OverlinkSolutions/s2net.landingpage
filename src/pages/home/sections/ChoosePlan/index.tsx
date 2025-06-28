import plans from "./plans.module.sass";
import { useMediaQuery } from "react-responsive";

import { MdLiveTv } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { FiTool } from "react-icons/fi";
import { RiSpeedUpFill } from "react-icons/ri";
import { LuBookMarked } from "react-icons/lu";

import NewCard from "../../../../components/NewCard";
import Typography from "../../../../components/Typography";

import cemmb from "../../../../assets/images/100mb.png";
import duzentosmb from "../../../../assets/images/200mb.png";
import trezentosmb from "../../../../assets/images/300mb.png";
import quinhentosmb from "../../../../assets/images/500mb.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper/modules";
import useWindowDimensions from "../../../../utils/resizeWindow";
import plansBackground from "../../../../assets/images/plansBackground.jpg";
import plansBackground2 from "../../../../assets/images/plansBackground2.jpg";

export default function Plans() {
  const { width, height } = useWindowDimensions();

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const iconSize = isMobile ? 25 : 20;

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
          className={plans.typography}
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
      <div id={plans.cards} className="container row">
        <img src={plansBackground} alt="" className={plans.cardsBackground}/>
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
              title="500mb"
              image={quinhentosmb}
              price={79.9}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 500MB"
              btnName="Contratar"
              content={
                <div className={plans.description}>
                  <div>
                    {generateAdvantages(
                     <RiSpeedUpFill size={iconSize}/>,
                      "Conexão com fibra óptica",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <MdLiveTv size={iconSize} />,
                      "Plano Ittv Smart Canais Abertos",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <LuBookMarked size={iconSize} />,
                      "Acesso a plataforma LevEduca",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <BiSupport size={iconSize} />,
                      "Suporte Técnico Dedicado",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <FiTool size={iconSize} />,
                      "Instalação Grátis",
                      "9pt"
                    )}
                  </div>
                </div>
              }
            />
          </SwiperSlide>
          <SwiperSlide className={plans.cardItem}>
            <NewCard
              title="300MB"
              image={trezentosmb}
              price={69.9}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 300MB"
              btnName="Contratar"
              content={
                <div className={plans.description}>
                  <div>
                    {generateAdvantages(
                     <RiSpeedUpFill size={iconSize}/>,
                      "Conexão com fibra óptica",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <MdLiveTv size={iconSize} />,
                      "Plano Ittv Smart Canais Abertos",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <LuBookMarked size={iconSize} />,
                      "Acesso a plataforma LevEduca",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <BiSupport size={iconSize} />,
                      "Suporte Técnico Dedicado",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <FiTool size={iconSize} />,
                      "Instalação Grátis",
                      "9pt"
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
              price={59.9}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 200MB"
              btnName="Contratar"
              content={
                <div className={plans.description}>
                  <div>
                    {generateAdvantages(
                      <RiSpeedUpFill size={iconSize}/>,
                      "Conexão com fibra óptica",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <MdLiveTv size={iconSize} />,
                      "Plano Ittv Smart Canais Abertos",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <LuBookMarked size={iconSize} />,
                      "Acesso a plataforma LevEduca",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <BiSupport size={iconSize} />,
                      "Suporte Técnico Dedicado",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <FiTool size={iconSize} />,
                      "Instalação Grátis",
                      "9pt"
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
              price={49.9}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 100MB"
              btnName="Contratar"
              content={
                <div className={plans.description}>
                  <div>
                    {generateAdvantages(
                     <RiSpeedUpFill size={iconSize}/>,
                      "Conexão com fibra óptica",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <MdLiveTv size={iconSize} />,
                      "Plano Ittv Smart Canais Abertos",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <LuBookMarked size={iconSize} />,
                      "Acesso a plataforma LevEduca",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <BiSupport size={iconSize} />,
                      "Suporte Técnico Dedicado",
                      "9pt"
                    )}
                    {generateAdvantages(
                      <FiTool size={iconSize} />,
                      "Instalação Grátis",
                      "9pt"
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
