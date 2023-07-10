import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { Button, ConfigProvider, Modal } from "antd";
import * as React from "react";
import { useMediaQuery } from "react-responsive";
import logo from "../../assets/images/logo.webp";
import header from "./header.module.sass";


export default function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const [visible, setVisible] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleClick = (phone: string) => {
    const contactMessage =
      "Olá, Vim pelo site e gostaria de saber mais sobre a BatCarva!";
    const encodedURI = encodeURI(contactMessage);

    window.open(
      "https://api.whatsapp.com/send?phone=" + phone + "&text=" + encodedURI
    );
  };

  const btnRow = (
    <div id={header.phone_row} className={isMobile ? `container column` : `container row`}>
      <Button type="primary" onClick={() => window.open("tel:5579996786834")}>
        <BsTelephone className={header.icon} />
        (79) 99678-6834
      </Button>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#04953b",
          },
        }}
      >
        <Button
          type="primary"
          className={header.whatsapp_btn}
          onClick={() => handleClick("5579999700991")}
        >
          <BsWhatsapp className={header.icon} />
          (79) 99970-0991
        </Button>
        <Button
          type="primary"
          className={header.whatsapp_btn}
          onClick={() => handleClick("5579999858327")}
        >
          <BsWhatsapp className={header.icon} />
          (79) 99985-8327
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
            <Button
              type="primary"
              onClick={() => setVisible(!visible)}
              ref={buttonRef}
            >
              Contato
            </Button>
            {visible && (
              <Modal
                centered={true}
                width={isMobile ? "80%" : "100%"}
                title="Entre em contato com a gente!"
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
            {!isTablet && <span>Entre em contato:</span>}
            {btnRow}
          </nav>
        )}
        <div id={header.animated_border}>&nbsp;</div>
      </header>
      <div id={header.dummy}>&nbsp;</div>
    </>
  );
}
