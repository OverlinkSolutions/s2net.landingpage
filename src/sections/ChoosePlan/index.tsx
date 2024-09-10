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
            title="10 MB"
            image={banner1}
            description="Ideal para navegação básica, redes sociais e streaming em qualidade padrão."
            link="https://www.google.com"
            btnName="Contratar"
          />  
          <NewCard
            title="20 MB"
            image={banner1}
            description="Ideal para navegação básica, redes sociais e streaming em qualidade padrão."
            link="https://www.google.com"
            btnName="Contratar"
          />  
          <NewCard
            title="30 MB"
            image={banner1}
            description="Ideal para navegação básica, redes sociais e streaming em qualidade padrão."
            link="https://www.google.com"
            btnName="Contratar"
          />  
        </div> 
      ) : (
        <div id={plans.cards} className="container row">
          <NewCard 
            title="100 MB"
            image={banner2}
            description="Quero me conectar com o mundo!"
            btnName="Contratar"
          />
          <NewCard
            title="200MB"
            image={banner2}
            description="Você conectado a todo momento!"
            btnName="Contratar"
          />
          <NewCard
            title="300MB"
            image={banner2}
            description="Para sua família ou seu negócio!"
            btnName="Contratar"
          />
        </div>
      )}
    </section>
  );
}
