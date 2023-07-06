import img1 from "../../assets/card1.jpeg";
import img2 from "../../assets/card2.jpeg";
import img3 from "../../assets/card3.jpeg";
import img4 from "../../assets/card4.jpeg";

import './styles.css';

export function Cards() {
  return (
    <div className="container" style={{ marginTop: 64 }}>
      <div className="row g-3">
        <div className="col-md-3 col-sm-6 col-12">
          <Card
            title="Piscina"
            shortDescription="A melhor forma de aproveitar com a família e amigos."
            longDescription="Tomar banho de piscina é sempre divertido, e para manter a diversão ainda maior, a nossa piscina tem escorregador infantil, e um quiosque com banquinhos para adultos, além do seu tamanho grande para aproveitar com a família e amigos."
            src={img1}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <Card
            title="Chafariz"
            shortDescription="Lugar ideal para fotos, cerimonias e discursos."
            longDescription="Além da beleza, nada mais harmonioso do que ouvir o som da água, que acalma e energiza qualquer ambiente. 
            Lugar ideal para cerimonias e discursos, além de proporcionar lindas fotos."
            src={img2}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <Card
            title="Capela"
            shortDescription="Um cantinho dedicado a orações e agradecimento."
            longDescription="Um cantinho dedicado a orações e agradecimentos. 
            Nada melhor que estar em um lugar de paz e ir até a capela prestar graças à quem lhe deu a oportunidade de estar feliz e com saude."
            src={img3}
          />
        </div>
        <div className="col-md-3 col-sm-6 col-12">
          <Card
            title="Balanço de Madeira"
            shortDescription="Um ótimo lugar para descansar e aproveitar a vista."
            longDescription="Um ótimo lugar para descansar e aproveitar a vista da piscina, além de gerar fotos lindas."
            src={img4}
          />
        </div>
      </div>
    </div>
  );
}

interface CardProps {
  src?: string;
  title?: string;
  shortDescription?: string;
  longDescription?: string;
}

function Card({ src, longDescription, shortDescription, title }: CardProps) {
  return (
    <div className="card grow" id="card">
      <img
        src={src}
        className="img-fluid rounded"
        style={{ width: '100%', height: 400, objectFit: 'cover', objectPosition: 'center' }}
        alt="#"
      />
      <div className="card-description">
        <h5 className="card-title">{title}</h5>
        <div className="short-desc">
          {shortDescription}
        </div>
        <div className="long-desc">
          {longDescription}
        </div>
      </div>
    </div>
  );
}