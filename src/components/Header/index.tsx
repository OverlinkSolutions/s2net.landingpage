import { IoBusinessSharp, IoBusinessOutline } from "react-icons/io5";
import { SiSpeedtest } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import { RiSurveyLine } from "react-icons/ri";
import { MdLogin } from "react-icons/md";
import { Button, ConfigProvider, Modal } from "antd";
import * as React from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../../assets/images/logo.webp";
import header from "./header.module.sass";
import { colors } from "../../constants";

enum Section {
  ABOUT = "ABOUT",
  PLANS = "PLANS",
  CONTACT = "CONTACT",
  LOGIN = "LOGIN",
  SURVEY = "SURVEY",
}

export default function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const [visible, setVisible] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleClick = (section: Section) => {

  };

  const btnRow = (
    <div id={header.phone_row} className={isMobile ? `container column` : `container row`}>
      <ConfigProvider
          theme={{
            token: {
              colorLink: colors.black,
              colorLinkHover: colors.primary,
              colorBgContainer: colors.transparent,
            },
          }}

      >
      <Button type="link" id={header.button} onClick={() => handleClick(Section.ABOUT)}>
        <IoBusinessOutline className={header.icon} />
        Empresa
      </Button>
      <Button type="link" id={header.button} onClick={() => handleClick(Section.PLANS)}>
        <SiSpeedtest className={header.icon} />
        Planos
      </Button>
      <Button type="link" id={header.button} onClick={() => handleClick(Section.CONTACT)}>
        <BiSupport className={header.icon} />
        Contato
      </Button>
      <Button type="link" id={header.button} onClick={() => handleClick(Section.SURVEY)}>
        <RiSurveyLine className={header.icon} />
        Pesquisa
      </Button>
      </ConfigProvider>

      <ConfigProvider
          theme={{
            token: {
              colorPrimary: colors.primary,
              colorBgContainer: colors.transparent,
            },
          }}
      >
      <Button type="default" id={header.button} onClick={() => handleClick(Section.LOGIN)}>
        <MdLogin className={header.icon} />
        Área do Assinante
      </Button>
      </ConfigProvider>
    </div>
  );

  return (
    <>
      <header id={header.container} className="container row">
        <div id={header.logo_container} className="container">
          <img src={logo} alt="Logo" />
        </div>
        {isMobile ? (
          <nav id={header.btn_row} className="container column">
                  <ConfigProvider
        theme={{
          token: {
            colorPrimary: colors.primary,
            colorBgContainer: colors.transparent,
          },
        }}
      >

            <Button
              type="primary"
              onClick={() => setVisible(!visible)}
              ref={buttonRef}
              >
              Menu
            </Button>
              </ConfigProvider>
            {visible && (
              <Modal
                centered={true}
                width={isMobile ? "80%" : "100%"}
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
