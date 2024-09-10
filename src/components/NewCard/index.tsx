import { Button, Card } from "antd";

import newCardStyles from "./newCard.module.sass";
import Typography from "../Typography";
import { useMediaQuery } from "react-responsive";
import React from "react";

interface NewCardProps {

  description: React.ReactNode;
  image?: string;
  link?: string;
  btnName?: string;
  btnBlock?: boolean;
}

export default function NewCard(props: NewCardProps) {

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  
  return ( 
    <Card
      bodyStyle={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}
      hoverable
      style={{ width: 300 }}
      cover={ props.image &&
        <img
          className={newCardStyles.cardImage}
          src={props.image}
          onClick={() => {
            if (props.link && !props.btnName) window.open(props.link, "_blank");
          }}
        />
      }
    >
      <div id={newCardStyles.content}>
        {props.description}
      </div>
      <div id={newCardStyles.btn}>
      {props.btnName && props.link && (
          <Button
            block={props.btnBlock}
            type="primary"
            size={isMobile ? "large" : "middle"}
            onClick={() => window.open(props.link, "_blank")}
          >
            {props.btnName}
          </Button>
        )}
      </div>
    </Card>
  );
}
