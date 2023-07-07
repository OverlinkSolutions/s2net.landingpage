import * as React from "react";
import card from "./card.module.sass";
import carro from "../../assets/images/carro.webp";

interface CardProps {
  title: string;
  imageSrc: string;
  shortDescription: string;
  longDescription: string;
}

const props: CardProps = {
  title: "Carros",
  imageSrc: carro,
  shortDescription: "Bateria Moura MA 12V 60Ah",
  longDescription:
    "A bateria Moura MA 12v 60Ah é perfeita para você, fornecendo maior durabilidade e segurança para seu veículo.",
};

export default function Card() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      id={card.container}
      className={`container column ${isHovered ? card.hovered : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img id={card.image} src={props.imageSrc} alt="dummy" />

      <div id={card.description}>
        <h2 id={card.title}>{props.title}</h2>
        {!isHovered ? (
          <div id={card.shortContent} className="container column">
            <p id={card.shortDescription}>{props.shortDescription}</p>
          </div>
        ) : (
          <div id={card.longContent} className="container column">
            <p>{props.longDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
}
