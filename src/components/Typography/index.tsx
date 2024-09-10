import { type } from "os";
import typography from "./typography.module.sass";

type CSSAlignment = "center" | "left" | "right" | "justify";

type TypographyProps =
  | {
      titleAlignment: CSSAlignment;
      descriptionAlignment: CSSAlignment;
      title: string;
      description: string;
      titleFontSize?: string;
      descriptionFontSize?: string;
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
  let titleFontSize;
  let descriptionFontSize;

  if ("alignment" in props) {
    titleAlignment = props.alignment;
    descriptionAlignment = props.alignment;
  }
  if ("titleAlignment" in props && "descriptionAlignment" in props) {
    titleAlignment = props.titleAlignment;
    descriptionAlignment = props.descriptionAlignment;
  }

  if ("fontSize" in props) {
    titleFontSize = props.fontSize;
    descriptionFontSize = props.fontSize;
  }

  if ("titleFontSize" in props || "descriptionFontSize" in props) {
    titleFontSize = props.titleFontSize;
    descriptionFontSize = props.descriptionFontSize;
  }

  return (
    <section id={typography.container} className="container row">
      <div id={typography.text} className="container column">
        {props.title && (
          <h1
            style={
              titleAlignment
                ? titleFontSize
                  ? { textAlign: titleAlignment, fontSize: titleFontSize }
                  : { textAlign: titleAlignment }
                : {}
            }
          >
            {props.title}
          </h1>
        )}
        {props.description && (
          <p
            style={
              descriptionAlignment
                ? descriptionFontSize
                  ? {
                      textAlign: descriptionAlignment,
                      fontSize: descriptionFontSize,
                    }
                  : {
                      textAlign: descriptionAlignment,
                    }
                : {}
            }
          >
            {props.description}
          </p>
        )}
      </div>
    </section>
  );
}
