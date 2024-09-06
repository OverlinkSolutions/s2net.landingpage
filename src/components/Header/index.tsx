import * as React from "react";
import { Button, ConfigProvider, Modal } from "antd";
import { IoBusinessOutline } from "react-icons/io5";
import { SiSpeedtest } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { RiSurveyLine } from "react-icons/ri";
import { MdLogin } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
import logoPreta from "../../assets/images/LOGO-PRETA.webp";
import logoColorida from "../../assets/images/LOGO-COLORIDA.webp";

import plans from "../../sections/ChoosePlan/plans.module.sass";
import footer from "../Footer/footer.module.sass";

import header from "./header.module.sass";
import { colors } from "../../constants";

enum Section {
  ABOUT = "ABOUT",
  PLANS = "PLANS",
  CONTACT = "CONTACT",
  LOGIN = "LOGIN",
  SURVEY = "SURVEY",
}

export default function Header(props: { offset: number }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const [visible, setVisible] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > props.offset ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleClick = (section: Section) => {
    switch (section) {
      case Section.ABOUT:
        window.location.href = "/#"+footer.container
        break;
      case Section.PLANS:
        window.location.href = "/#"+plans.container
        break;
      case Section.CONTACT:
        window.location.href = "/#"+footer.container
        break;
      case Section.LOGIN:
        window.open("https://central.s2net.net/central_assinante_web/login", "_blank");
        break;
      case Section.SURVEY:
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSeyLV283XmQ6ARe83kUw3jaa2LvPqiszMkVaujpMRbH1JQOkw/viewform", "_blank");
  };
}

  const btnRow = (
    <div id={header.phone_row} className={isMobile ? `container column` : `container row`}>
      <ConfigProvider
          theme={{
            token: {
              colorLink: scrolled || isMobile ? colors.black : colors.white,
              colorLinkHover: colors.primary,
              colorPrimary: colors.primary,
              colorText: scrolled || isMobile ? colors.black : colors.white,
              colorBgContainer: colors.transparent,
              colorBorder: colors.transparent,
              colorPrimaryHover: scrolled || isMobile ? colors.transparent : colors.white,
              colorPrimaryTextHover: scrolled || isMobile ? colors.black : colors.black,
            },
          }}

      >
      <Button type={scrolled || isMobile ? "link" : "default"} id={header.button} onClick={() => handleClick(Section.ABOUT)}>
        <IoBusinessOutline className={header.icon} />
        Empresa
      </Button>
      <Button type={scrolled || isMobile ? "link" : "default"} id={header.button} onClick={() => handleClick(Section.PLANS)}>
        <SiSpeedtest className={header.icon} />
        Planos
      </Button>
      <Button type={scrolled || isMobile ? "link" : "default"} id={header.button} onClick={() => handleClick(Section.CONTACT)}>
        <BiSupport className={header.icon} />
        Contato
      </Button>
      <Button type={scrolled || isMobile ? "link" : "default"} id={header.button} onClick={() => handleClick(Section.SURVEY)}>
        <RiSurveyLine className={header.icon} />
        Pesquisa
      </Button>
      </ConfigProvider>
      <ConfigProvider
          theme={{
            token: {
              colorLink: scrolled || isMobile ? colors.black : colors.white,
              colorLinkHover: colors.primary,
              colorPrimary: colors.secondary,
              colorText: scrolled || isMobile ? colors.black : colors.white,
              colorBgContainer: colors.transparent,
            },
          }}

      >
      <Button type={scrolled || isMobile ? "primary" : "default"} id={header.button} onClick={() => handleClick(Section.LOGIN)}>
        <MdLogin className={header.icon} />
        Área do Assinante
      </Button>
      </ConfigProvider>
    </div>
  );

  return (
    <>
      <header id={header.container} className={`container row ${scrolled ? header.scrolled : header.not_scrolled}`}>
        <div id={header.logo_container} className="container">
          <img src={scrolled? logoPreta : logoColorida} alt="Logo" />
        </div>
        {isMobile ? (
          <nav id={header.btn_row} className="container column">
            <BsThreeDots size={30}     
            color={scrolled ? colors.black : colors.white}          
            onClick={() => setVisible(!visible)}
           />

            {visible && (
              <Modal
                centered={true}
                width="80%"
                open={visible}
                onCancel={() => setVisible(false)}
                footer={<></>}
              >
                {btnRow}
              </Modal>
            )}
          </nav>
        ) : (
          <nav id={header.btn_row} className="container row">
            {btnRow}
          </nav>
        )}
        {/*<div id={header.animated_border}>&nbsp;</div>*/}
      </header>
    </>
  );
}
