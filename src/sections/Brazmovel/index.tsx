import footer1 from '../../assets/images/footer1.png';
import footer2 from '../../assets/images/footer2.png';
import CARD_3 from '../../assets/images/CARD_3.webp';
import Typography from '../../components/Typography';

import brazmovel from './brazmovel.module.sass';

export default function Brazmovel() {
  return (
    <section id={brazmovel.container}>
      <img className={brazmovel.footers} src={footer1} alt="Brazmovel" />
      <div id={brazmovel.content}>
        <Typography title="A Brazmóvel chegou na S2Net!" alignment="left" description='Solicite agora seu plano com um chip Braz e fique sempre conectado!' descriptionAlignment='left'/>
        <div>&nbsp;</div>
        <img style={{height: "10rem"}} src={CARD_3} />
      </div>
      <img className={brazmovel.footers} src={footer2} alt="Brazmovel" />
    </section>
  );
}