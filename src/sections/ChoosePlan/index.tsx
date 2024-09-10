import * as React from "react";
import Card from "../../components/Card";
import plans from "./plans.module.sass";

import banner1 from "../../assets/images/FUNDO-FEED.webp";
import banner2 from "../../assets/images/FUNDO-FEED.webp";
import { ConfigProvider, Radio } from "antd";
import { colors } from "../../constants";
import NewCard from "../../components/NewCard";

export default function Plans() {
  const [type, setType] = React.useState("cable");

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
          <NewCard
            image={banner1}
            description="Ideal para navegação básica, redes sociais e streaming em qualidade padrão."
            link="https://www.google.com"
            btnName="Contratar"
          />  
          <NewCard

            image={banner1}
            description="Ideal para navegação básica, redes sociais e streaming em qualidade padrão."
            link="https://www.google.com"
            btnName="Contratar"
          />  
          <NewCard

            image={banner1}
            description="Ideal para navegação básica, redes sociais e streaming em qualidade padrão."
            link="https://www.google.com"
            btnName="Contratar"
          />  
        </div> 
      ) : (
        <div id={plans.cards} className="container row">
          <Card 
            title="100 MB"
            imageSrc={banner2}
            shortDescription="Quero me conectar com o mundo!"
            longDescription="Ideal para navegação básica, redes sociais e streaming em qualidade padrão. Perfeito para quem não abre mão de ficar conectado."
            button="Contratar"
            onClick={() => console.log("Contratado")}
          />
          <Card
            title="200MB"
            imageSrc={banner2}
            shortDescription="Você conectado a todo momento!"
            longDescription="Excelente para streaming em alta definição, videoconferências sem interrupções e downloads rápidos. Suporta bem o uso de múltiplos dispositivos simultaneamente."
            button="Contratar"
            onClick={() => console.log("Contratado")}
          />
          <Card
            title="300MB"
            imageSrc={banner2}
            shortDescription="Para sua família ou seu negócio!"
            longDescription="Perfeito para famílias ou pequenos escritórios. Permite streaming 4K, jogos online intensivos e uploads rápidos, mantendo todos os dispositivos conectados."
            button="Contratar"
            onClick={() => console.log("Contratado")}
          />
        </div>
      )}
    </section>
  );
}
