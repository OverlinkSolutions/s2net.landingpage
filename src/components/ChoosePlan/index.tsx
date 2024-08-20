import * as React from "react";
import Card from "../Card";
import choosePlan from "./chooseplan.module.sass";

import dummybanner from "../../assets/images/dummybanner.webp";
import carro from "../../assets/images/carro.webp";
import moto from "../../assets/images/moto.webp";
import barco from "../../assets/images/barco.webp";
import caminhao from "../../assets/images/caminhao.webp";
import carga from "../../assets/images/carga.webp";
import torre from "../../assets/images/torre.webp";
import { ConfigProvider, Radio } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { colors } from "../../constants";

export default function ChoosePlan() {
  const [type, setType] = React.useState("cable");

  return (
    <section id={choosePlan.container} className="container">
      <div id={choosePlan.description} className="container column">
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
        <div id={choosePlan.cards} className="container row">
          <Card
            title="10 MB"
            imageSrc={dummybanner}
            shortDescription="Quero me conectar com o mundo!"
            longDescription="Ideal para navegação básica, redes sociais e streaming em qualidade padrão. Perfeito para quem não abre mão de ficar conectado."
            button="Contratar"
            onClick={() => console.log("Contratado")}
          />
          <Card
            title="20MB"
            imageSrc={dummybanner}
            shortDescription="Você conectado a todo momento!"
            longDescription="Excelente para streaming em alta definição, videoconferências sem interrupções e downloads rápidos. Suporta bem o uso de múltiplos dispositivos simultaneamente."
            button="Contratar"
            onClick={() => console.log("Contratado")}
          />
          <Card
            title="30MB"
            imageSrc={dummybanner}
            shortDescription="Para sua família ou seu negócio!"
            longDescription="Perfeito para famílias ou pequenos escritórios. Permite streaming 4K, jogos online intensivos e uploads rápidos, mantendo todos os dispositivos conectados."
            button="Contratar"
            onClick={() => console.log("Contratado")}
          />
        </div>
      ) : (
        <div id={choosePlan.cards} className="container row">
          <Card 
            title="100 MB"
            imageSrc={dummybanner}
            shortDescription="Quero me conectar com o mundo!"
            longDescription="Ideal para navegação básica, redes sociais e streaming em qualidade padrão. Perfeito para quem não abre mão de ficar conectado."
            button="Contratar"
            onClick={() => console.log("Contratado")}
          />
          <Card
            title="200MB"
            imageSrc={dummybanner}
            shortDescription="Você conectado a todo momento!"
            longDescription="Excelente para streaming em alta definição, videoconferências sem interrupções e downloads rápidos. Suporta bem o uso de múltiplos dispositivos simultaneamente."
            button="Contratar"
            onClick={() => console.log("Contratado")}
          />
          <Card
            title="300MB"
            imageSrc={dummybanner}
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
