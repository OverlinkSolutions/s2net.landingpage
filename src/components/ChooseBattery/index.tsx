import * as React from "react";
import Card from "../Card";
import chooseBattery from "./choosebattery.module.sass";

import carro from "../../assets/images/carro.webp";
import moto from "../../assets/images/moto.webp";
import barco from "../../assets/images/barco.webp";
import caminhao from "../../assets/images/caminhao.webp";
import carga from "../../assets/images/carga.webp";
import torre from "../../assets/images/torre.webp";

export default function ChooseBattery() {
  return (
    <div id={chooseBattery.container} className="container">
      <div id={chooseBattery.description} className="container column">
        <h1>Escolha a bateria ideal para você</h1>
        <p>
          As baterias que fornecemos foram projetadas para aumentar a segurança,
          e durabilidade, garantindo seu desempenho e performance dos seus equipamentos.
        </p>
      </div>
      <div id={chooseBattery.cards} className="container autowrap">
        <Card
          title="Carros"
          imageSrc={carro}
          shortDescription="Alta tecnologia para atender os carros mais modernos do mercado."
          longDescription="As baterias disponíveis na BatCarva possuem alta tecnologia para atender os carros mais modernos do mercado, produzidas com rigorosos processos de qualidade. "
        />
        <Card
          title="Caminhões"
          imageSrc={caminhao}
          shortDescription="A linha para veículos pesados trabalha com alta carga e tem maior durabilidade."
          longDescription="A linha para veículos pesados trabalha com alta carga e tem maior durabilidade, garantindo o melhor desempenho para o seu caminhão."
        />
        <Card
          title="Barcos"
          imageSrc={barco}
          shortDescription="A linha de baterias náuticas foi desenvolvida para atender as necessidades no mar."
          longDescription="A linha de baterias náuticas foi desenvolvida para atender as necessidades dos barcos, lanchas e motores de popa, com alta tecnologia e durabilidade."
        />
        <Card
          title="Veículos de carga"
          imageSrc={carga}
          shortDescription="Desenvolvida para garantir a máxima produtividade do seu pátio."
          longDescription="Desenvolvida para garantir a máxima produtividade do seu parque de empilhadeiras, transpaleteiras, paleteiras e outras máquinas elétricas, nossa linha de baterias tracionárias é a mais completa do mercado."
        />
        <Card
          title="Motos"
          imageSrc={moto}
          shortDescription="Com baixo consumo de água, ideal para veículos de duas rodas."
          longDescription="Consome pouquíssima água e, por isso, é livre de manutenção. Ideal para motos, ciclomotores e quadriciclos."
        />
        <Card
          title="Estacionárias"
          imageSrc={torre}
          shortDescription="Produzida sob um alto regime de qualidade para entregar a maior eficiência e confiabilidade."
          longDescription="Produzida sob um alto regime de qualidade para entregar a maior eficiência e confiabilidade para as operações. Projetadas para atender as mais severas condições climáticas da América do Sul, nossas baterias atendem à normas mundiais."
        />
      </div>
    </div>
  );
}
