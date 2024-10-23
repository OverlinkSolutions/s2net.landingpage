import { useMediaQuery } from "react-responsive";

import bannerITTV from "../../assets/images/bannerITTV.png";
import bannerITTVMobile from "../../assets/images/bannerITTVMobile.png";

import imgPlanoSmart from "../../assets/images/planosmart.webp";
import imgPlanoSmartMini from "../../assets/images/planomini.webp";
import imgPlanoSmartPlus from "../../assets/images/planoplus.webp";
import imgPlanoSmartTotal from "../../assets/images/planototal.webp";

import "./PromoITTV.css";
export default function PromoITTV() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div className="ittvContainer">
      <div className="bannerIttvContainer">
        {!isMobile ? (
          <div id="planosIttvContainer">
            <img className="bannerIttvimg" src={bannerITTV} alt="Banner ITTV" />
            <div className="planoIttvCard">
              <div className="planoIttvCardContent">
              <div className="imgIttvPlano">&nbsp;</div>
                <img
                  className="imgIttvPlano"
                  src={imgPlanoSmart}
                  alt="Banner Plano Smart"
                />
                <img
                  className="imgIttvPlano"
                  src={imgPlanoSmartMini}
                  alt="Banner Plano Smart Mini"
                />
                <img
                  className="imgIttvPlano"
                  src={imgPlanoSmartPlus}
                  alt="Banner Plano Smart Plus"
                />
                <img
                  className="imgIttvPlano"
                  src={imgPlanoSmartTotal}
                  alt="Banner Plano Smart Total"
                />
              </div>
              <div className="planoIttvButton">
              <div>&nbsp;</div>
              </div>
            </div>
          </div>
        ) : (
          <div id="planosIttvContainer">
          <img
            className="bannerIttvimg"
            src={bannerITTVMobile}
            alt="Banner ITTV"
          />
          <div className="planoIttvCard">
            <div className="planoIttvCardContent">
              <img
                className="imgIttvPlano"
                src={imgPlanoSmart}
                alt="Banner Plano Smart"
              />
              <img
                className="imgIttvPlano"
                src={imgPlanoSmartMini}
                alt="Banner Plano Smart Mini"
              />
              <img
                className="imgIttvPlano"
                src={imgPlanoSmartPlus}
                alt="Banner Plano Smart Plus"
              />
              <img
                className="imgIttvPlano"
                src={imgPlanoSmartTotal}
                alt="Banner Plano Smart Total"
              />
            </div>
            <div className="planoIttvButton">
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};
