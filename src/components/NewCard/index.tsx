import { Button, Card } from "antd";

import newCardStyles from "./newCard.module.sass";
import { useMediaQuery } from "react-responsive";
import React from "react";
import Typography from "../Typography";

type NewCardProps = {
  content: React.ReactNode;
  image?: string;
  link?: string;
  price?: number;
  btnName?: string;
  btnBlock?: boolean;
  style?: React.CSSProperties;
} | {
  title: string;
  description: string;
  image?: string;
  link?: string;
  price?: number | string;
  btnName?: string;
  btnBlock?: boolean;
  style?: React.CSSProperties;
}

export default function NewCard(props: NewCardProps) {

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  let content

  if ("content" in props) {
    content = props.content
  } else {
    content = (
      <Typography
      title={props.title}
      alignment="center"
      description={props.description}
      descriptionAlignment="center"
    />
    )
  }

  
  return ( 
    <Card
      bodyStyle={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}
      hoverable
      style={props.style ? props.style : isTablet ? { width: 400 } : {width: "100%", minWidth: 200}}
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
        {content}
      </div>
      <div id={newCardStyles.price}>
        {props.price && ( typeof(props.price) === "number" ? <h2>{Intl.NumberFormat("pt-br",{style: "currency", currency:"BRL"}).format(props.price)}</h2> : <h2>{props.price}</h2>)}
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
