import { type } from "os";
import typography from "./typography.module.sass";

type CSSAlignment = "center" | "left" | "right" | "justify";

type TypographyProps =
  | {
      titleAlignment: CSSAlignment;
      descriptionAlignment: CSSAlignment;
      title: string;
      description: string;
      fontSize?: string;
      link?: string;
    }
  | {
      alignment: CSSAlignment | undefined;
      title: string;
      description: string;
      fontSize?: string;
      link?: string;
    };

export default function Typography(props: TypographyProps) {
  let titleAlignment;
  let descriptionAlignment;

  if ("alignment" in props) {
    titleAlignment = props.alignment;
    descriptionAlignment = props.alignment;
  }
  if ("titleAlignment" in props && "descriptionAlignment" in props) {
    titleAlignment = props.titleAlignment;
    descriptionAlignment = props.descriptionAlignment;
  }

  return (
    <section id={typography.container} className="container column">
      <div id={typography.text} className="container column">
        <h1
          style={
            titleAlignment
              ? props.fontSize
                ? { textAlign: titleAlignment, fontSize: props.fontSize }
                : { textAlign: titleAlignment }
              : {}
          }
        >
          {props.title}
        </h1>
        <p
          style={
            descriptionAlignment ? { textAlign: descriptionAlignment } : {}
          }
        >
          {props.description}
        </p>
      </div>
    </section>
  );
}
