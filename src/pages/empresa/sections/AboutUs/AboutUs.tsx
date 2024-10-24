import { useMediaQuery } from "react-responsive";
import Typography from "../../../../components/Typography";
import aboutUs from "./aboutUs.module.sass";
import sobreImg from "../../../../assets/images/empresa2.png";

export default function AboutUs() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <main id={aboutUs.container} className="container column">
      <section id={aboutUs.presentation} className={`${aboutUs.item} container row`}>
        <div className={`${aboutUs.text} container column`}>
          <Typography
            title="Apresentação"
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
        <img src={sobreImg} alt="s2net_empresa" className={aboutUs.img} />
      </section>
      <section id={aboutUs.values} className={`${aboutUs.item} container row`}>
        <div className={`${aboutUs.text} container column`}>
          <Typography
            title="Missão, Visão e Valores"
            alignment={isMobile ? "center" : "left"}
            description="Prover aos clientes acesso a internet com qualidade. Estar em constante aprimoramento e comercializar soluções tecnológicas. Contribuir para o sucesso de pessoas e empresas por meio do nosso trabalho e a partir disso ser referência na área em que atuamos."
          />
          <br />
          <Typography
            title=""
            alignment={isMobile ? "center" : "left"}
            description="A partir do nosso serviço, buscamos destacar nossa marca no mercado e sermos considerados sinônimo de qualidade pelos nossos clientes. Temos como filosofia principal o respeito e a transparência para com as pessoas, fornecendo produtos e serviços de qualidade, tornando-se um parceiro em relação às questões tecnológicas."
          />
          <br />
          <br />
          <div className={`${aboutUs.points}`}>
            <Typography
              title=""
              alignment={isMobile ? "center" : "left"}
              description="Ética"
            />
            <Typography
              title=""
              alignment={isMobile ? "center" : "left"}
              description="Comprometimento e Credibilidade"
            />
            <Typography
              title=""
              alignment={isMobile ? "center" : "left"}
              description="Valorização Humana"
            />
            <Typography
              title=""
              alignment={isMobile ? "center" : "left"}
              description="Sustentabilidade"
            />
            <Typography
              title=""
              alignment={isMobile ? "center" : "left"}
              description="Qualidade e agilidade de nossos serviços"
            />
            <Typography
              title=""
              alignment={isMobile ? "center" : "left"}
              description="Integridade com todos os públicos."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
