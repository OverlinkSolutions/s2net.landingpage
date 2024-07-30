import * as React from "react";
import Card from "../Card";
import choosePlan from "./chooseplan.module.sass";

import carro from "../../assets/images/carro.webp";
import moto from "../../assets/images/moto.webp";
import barco from "../../assets/images/barco.webp";
import caminhao from "../../assets/images/caminhao.webp";
import carga from "../../assets/images/carga.webp";
import torre from "../../assets/images/torre.webp";

export default function ChoosePlan() {
  return (
    <section id={choosePlan.container} className="container">
      <div id={choosePlan.description} className="container column">
        <h1>Escolha seu plano e fique conectado com o mundo</h1>


      </div>
      <div id={choosePlan.cards} className="container autowrap">
        <Card
          title="50 MB"
          imageSrc={carro}
          shortDescription="Quero me conectar com o mundo!"
          longDescription="Ideal para navegação básica, redes sociais e streaming em qualidade padrão. Perfeito para quem não abre mão de ficar conectado."
        />
        <Card
          title="100MB"
          imageSrc={caminhao}
          shortDescription="Você conectado a todo momento!"
          longDescription="Excelente para streaming em alta definição, videoconferências sem interrupções e downloads rápidos. Suporta bem o uso de múltiplos dispositivos simultaneamente."
        />
        <Card
          title="200MB"
          imageSrc={barco}
          shortDescription="Para sua família ou seu negócio!"
          longDescription="Perfeito para famílias ou pequenos escritórios. Permite streaming 4K, jogos online intensivos e uploads rápidos, mantendo todos os dispositivos conectados."
        />
        <Card
          title="500 MB"
          imageSrc={carga}
          shortDescription="Velocidade é seu sobrenome!"
          longDescription="A escolha definitiva para gamers, streamers e casas conectadas. Garante a máxima performance em múltiplas tarefas e dispositivos, sem problemas."
        />
      </div>
    </section>
  );
}
