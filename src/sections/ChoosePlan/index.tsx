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

import { colors } from "../../constants";
import NewCard from "../../components/NewCard";
import Typography from "../../components/Typography";

import trintamb from "../../assets/images/30mb.png";
import cinquentamb from "../../assets/images/50mb.png";
import setentamb from "../../assets/images/70mb.png";
import cemmb from "../../assets/images/100mb.png";
import duzentosmb from "../../assets/images/200mb.png";
import trezentosmb from "../../assets/images/300mb.png";

export default function Plans() {
  const [type, setType] = React.useState("cable");

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const iconSize = isMobile ? 30 : 25;

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
      >
        <Radio.Group
          buttonStyle="solid"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <Radio.Button value="cable">Cabo</Radio.Button>
          <Radio.Button value="fiber">Fibra</Radio.Button>
        </Radio.Group>
      </ConfigProvider>
      {type === "cable" ? (
        <div id={plans.cards} className="container row">
          <div id={plans.contentRow}>
            <div className={plans.cardItem}>
              <NewCard
                style={{ width: 300 }}
                title="30 MB"
                image={trintamb}
                description="Contrate agora por apenas*"
                price={39.9}
                link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 30MB"
                btnName="Contratar"
                content={
                  <div className={plans.description}>
                    <Typography
                      title={"30MB"}
                      alignment="center"
                      description={"Pra você que quer ficar sempre conectado."}
                      descriptionAlignment="center"
                    />
                    <div>
                      {generateAdvantages(
                        <GiNetworkBars size={iconSize} />,
                        "Conexão estável",
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
                      <Typography
                        title={""}
                        alignment="center"
                        description={"Contrate agora por apenas*"}
                        descriptionAlignment="center"
                      />
                    </div>
                  </div>
                }
              />
            </div>
            <div className={plans.cardItem}>
              <NewCard
                style={{ width: 300 }}
                title="50MB"
                image={cinquentamb}
                description="Contrate agora por apenas*"
                price={49.9}
                link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 50MB"
                btnName="Contratar"
                content={
                  <div className={plans.description}>
                    <Typography
                      title={"50MB"}
                      alignment="center"
                      description={"Ideal para jogos e streaming"}
                      descriptionAlignment="center"
                    />
                    <div>
                      {generateAdvantages(
                        <GiNetworkBars size={iconSize} />,
                        "Velocidade Aumentada",
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
                      <Typography
                        title={""}
                        alignment="center"
                        description={"Contrate agora por apenas*"}
                        descriptionAlignment="center"
                      />
                    </div>
                  </div>
                }
              />
            </div>
            <div className={plans.cardItem}>
              <NewCard
                style={{ width: 300 }}
                title="70MB"
                image={setentamb}
                description="Contrate agora por apenas*"
                price={59.9}
                link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 70MB"
                btnName="Contratar"
                content={
                  <div className={plans.description}>
                    <Typography
                      title={"70MB"}
                      alignment="center"
                      description={"Você e sua família conectada!"}
                      descriptionAlignment="center"
                    />
                    <div>
                      {generateAdvantages(
                        <GiNetworkBars size={iconSize} />,
                        "Conexão Ultra-Rápida",
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
                      <Typography
                        title={""}
                        alignment="center"
                        description={"Contrate agora por apenas*"}
                        descriptionAlignment="center"
                      />
                    </div>
                  </div>
                }
              />
            </div>
          </div>
          <div id={plans.cards} className="container row">
            <p>* Apenas para clientes com pagamento em dia</p>
          </div>
        </div>
      ) : (
        <div id={plans.cards} className="container row">
                    <div id={plans.contentRow}>
          <div className={plans.cardItem}>
            <NewCard
              style={{ width: 300 }}
              title="100MB"
              image={cemmb}
              description="Contrate agora por apenas"
              price={69.9}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 100MB"
              btnName="Contratar"
              content={
                <div className={plans.description}>
                  <Typography
                    title={"100MB"}
                    alignment="center"
                    description={"Tenha o melhor da fibra óptica!"}
                    descriptionAlignment="center"
                  />
                  <div>
                    {generateAdvantages(
                      <GiNetworkBars size={iconSize} />,
                      "Conexão Super Rápida",
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
          </div>
          <div className={plans.cardItem}>
            <NewCard
              style={{ width: 300 }}
              title="200MB"
              image={duzentosmb}
              description="Contrate agora por apenas"
              price={79.9}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 200MB"
              btnName="Contratar"
              content={
                <div>
                  <Typography
                    title={"200MB"}
                    alignment="center"
                    description={"Para você e seu negócio!"}
                    descriptionAlignment="center"
                  />
                  <div>
                    {generateAdvantages(
                      <GiNetworkBars size={iconSize} />,
                      "Conexão Ultra-Rápida",
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
          </div>
          <div className={plans.cardItem}>
            <NewCard
              style={{ width: 300 }}
              title="300MB"
              image={trezentosmb}
              description="Contrate agora por apenas"
              price={89.9}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 300MB"
              btnName="Contratar"
              content={
                <div>
                  <Typography
                    title={"300MB"}
                    alignment="center"
                    description={"Nosso melhor plano!"}
                    descriptionAlignment="center"
                  />
                  <div>
                    {generateAdvantages(
                      <GiNetworkBars size={iconSize} />,
                      "Conexão Ultra-Rápida",
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
          </div>
          </div>
        </div>
      )}
    </section>
  );
}
