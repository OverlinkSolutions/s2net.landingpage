import { useMediaQuery } from "react-responsive";
import storemap from "./storemap.module.sass";
import { Radio } from "antd";
import React from "react";

export default function StoreMap() {
  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 568px)" });
  const [city, setCity] = React.useState("itabaiana");
  return (
    <section id={storemap.container} className="container row">
      <div id={storemap.locations} className="container column">
        <h2>Faça nos uma visita!</h2>
        <p>
          Venha conhecer nossa casa,{isTablet && <br />}
          estamos sempre prontos para atendê-lo.
        </p>
        <p>
          Nosso horário é de segunda a sexta, das 8h às 18h,{isTablet && <br />}
          e aos sábados, das 8h às 12h.
        </p>
        <p>
          Nosso atendimento técnico está disponível {isTablet && <br />}
          <strong>24h por dia, 7 dias por semana</strong>,
          <br />
          para mais agilidade e comodidade para você!
        </p>
      </div>
      <div id={storemap.iframe}>
        <div className={storemap.buttons}>
          <Radio.Group
            buttonStyle="solid"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <Radio.Button value="itabaiana">Itabaiana</Radio.Button>
            <Radio.Button value="dores">Nossa Senhora das Dores</Radio.Button>
          </Radio.Group>
        </div>
        <iframe
          src={
            city == "itabaiana"
              ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.6621753179566!2d-37.42292889003094!3d-10.683308489415891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70ffa7ed3b66fa5%3A0x3c344fad2939219f!2zUi4gRWzDrXNpbyBBcmHDumpvLCAzNyAtIFPDo28gQ3Jpc3TDs3bDo28sIEl0YWJhaWFuYSAtIFNFLCA0OTUwMC0zMjk!5e0!3m2!1spt-BR!2sbr!4v1728343034061!5m2!1spt-BR!2sbr"
              : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.0862779113713!2d-37.19616499618812!3d-10.488811127924585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70566a0ef2dd1bd%3A0x6b0b59baf479f8cd!2sPra%C3%A7a%20Joel%20Nascimento%2C%20140%20-%20Centro%2C%20Nossa%20Sra.%20das%20Dores%20-%20SE%2C%2049600-000!5e0!3m2!1spt-BR!2sbr!4v1728343693212!5m2!1spt-BR!2sbr"
          }
          width={isMobile ? "400" : "800"}
          height={isMobile ? "600" : isTablet ? "400" : "550"}
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="S2Net"
        />
      </div>
    </section>
  );
}
