import * as React from "react";
import card from "./card.module.sass";
import { Button } from "antd";
interface CardProps {
  title: string;
  imageSrc: string;
  shortDescription: string;
  longDescription: string;
} 

interface CardPropsWithButton {
  title: string;
  imageSrc: string;
  shortDescription: string;
  longDescription: string;
  button: string;
  onClick: () => void;
}

export default function Card(props: CardProps | CardPropsWithButton) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);
  setTimeout(() => {
    setShowButton(true);
  }, 600);

  React.useEffect(() => {
      setShowButton(false);
  }, [!isHovered]);

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
            {"button" in props && "onClick" in props && showButton &&(
              <Button id={card.actionButton} type="primary" onClick={props.onClick}>{props.button}</Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
