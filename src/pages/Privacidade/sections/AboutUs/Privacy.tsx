import { useMediaQuery } from "react-responsive";
import Typography from "../../../../components/Typography";
import aboutUs from "./aboutUs.module.sass";

export default function Privacy() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <main id={aboutUs.container} className="container column">
      <section id={aboutUs.presentation} className={`${aboutUs.item} container row`}>
        <div className={`${aboutUs.text} container column`}>
          <Typography
            title="Privacidade"
            alignment={isMobile ? "center" : "left"}
            description="Desde o início estivemos em busca de melhorias tanto em tecnologia com e qualificação da nossa equipe. Todas as decisões sempre foram tomadas com o objetivo de sermos reconhecidos regionalmente por oferecer serviços de qualidade."
          />
          <br />
          <Typography
            title=""
            alignment={isMobile ? "center" : "left"}
            description="Atualmente nossa empresa se encontra em expansão, pois ampliamos nossa área de cobertura e agregamos novos serviços e sempre preocupados com nosso foco principal que é a satisfação dos nossos clientes."
          />
        </div>
      </section>
    </main>
  );
}
