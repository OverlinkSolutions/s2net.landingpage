import { Button, Card } from "antd";

import newCardStyles from "./newCard.module.sass";
import Typography from "../Typography";

interface NewCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  btnName?: string;
}

export default function NewCard(props: NewCardProps) {
  return (
    <Card
      hoverable
      style={{ width: 250 }}
      cover={
        <img
          className={newCardStyles.cardImage}
          alt={`Imagem do  plano de ${props.title}`}
          src={props.image}
          onClick={() => {
            if (props.link && !props.btnName) window.open(props.link, "_blank");
          }}
        />
      }
    >
      <div id={newCardStyles.content}>
        <Typography
          title={props.title}
          alignment="center"
          description={props.description}
          descriptionAlignment="center"
        />
        {props.btnName && props.link && (
          <Button
            type="primary"
            onClick={() => window.open(props.link, "_blank")}
          >
            Contratar
          </Button>
        )}
      </div>
    </Card>
  );
}
