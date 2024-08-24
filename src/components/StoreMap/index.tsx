import { useMediaQuery } from "react-responsive";
import storemap from "./storemap.module.sass";

export default function StoreMap() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <section id={storemap.container} className="container row">
      <div id={storemap.locations} className="container column">
        <h2>Faça nos uma visita!</h2>
        <div className="container column">
          <p>Venha conhecer nossa casa,<br/>
          estamos sempre prontos para atendê-lo.</p>
          <p>Nosso horário é de segunda a sexta, das 8h às 18h,<br/>
          e aos sábados, das 8h às 12h.</p>
          <p>Nosso atendimento técnico está disponível<br/>
          <strong>24h por dia, 7 dias por semana</strong>,
          <br/>para mais agilidade e comodidade para você!</p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.662745760045!2d-37.420385200000005!3d-10.683264299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70ffa7ed37e9f63%3A0x325eb8c1ab12825f!2zUi4gRWzDrXNpbyBBcmHDumpvLCA0M2EgLSBTw6NvIENyaXN0w7N2w6NvLCBJdGFiYWlhbmEgLSBTRSwgNDk1MDAtMzI5!5e0!3m2!1spt-BR!2sbr!4v1724503111661!5m2!1spt-BR!2sbr"
        width={isMobile ? "700" : "800"}
        height={isMobile ? "450" : "500"}
        style={{border:0}}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="S2Net"
      ></iframe>
    </section>
  );
}
