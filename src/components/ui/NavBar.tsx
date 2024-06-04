import { Affix, Image, Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import React, { FC } from "react";

const NavBar: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          // alignContent: "center",
          alignItems: "center",
          display: "flex",
          position: "sticky",
          top: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <Image
          alt="Icono de la app"
          height={53}
          preview={false}
          src={"/app_image.png"}
          width={53}
        />
        <span style={{ fontSize: 40 }}>P</span>
        <span style={{ fontSize: 20 }}>okémon</span>
      </Header>
      <Content className="dark" style={{ padding: 25 }}>
        {children}
      </Content>
      <Affix offsetBottom={0.01}>
        <Footer>Created by Carlos Gil 2024</Footer>
      </Affix>
    </Layout>
  );
};

export default NavBar;
