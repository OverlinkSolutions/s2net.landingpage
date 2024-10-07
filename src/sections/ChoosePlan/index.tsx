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
        <div>
          <div id={plans.cards} className="container row">
            <NewCard
              title="30 MB"
              image={banner1}
              description="Contrate agora por apenas*"
              price={39.9}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 30MB"
              btnName="Contratar"
            />
            <NewCard
              title="50MB"
              image={banner1}
              description="Contrate agora por apenas*"
              price={49.9}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 50MB"
              btnName="Contratar"
            />
            <NewCard
              title="70MB"
              image={banner1}
              description="Contrate agora por apenas*"
              price={59.9}
              link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 70MB"
              btnName="Contratar"
            />
          </div>
          <div id={plans.cards} className="container row">
            <p>* Apenas para clientes com pagamento em dia</p>
          </div>
        </div>
      ) : (
        <div id={plans.cards} className="container row">
          <NewCard
            title="100MB"
            image={banner2}
            description="Contrate agora por apenas"
            price={69.9}
            link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 100MB"
            btnName="Contratar"
          />
          <NewCard
            title="200MB"
            image={banner2}
            description="Contrate agora por apenas"
            price={79.9}
            link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 200MB"
            btnName="Contratar"
          />
          <NewCard
            title="300MB"
            image={banner2}
            description="Contrate agora por apenas"
            price={89.9}
            link="https://wa.me/557908000004181?text=Olá, Vim pelo site da S2Net e gostaria de contratar o plano de 300MB"
            btnName="Contratar"
          />
        </div>
      )}
    </section>
  );
}
