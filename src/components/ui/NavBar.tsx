import { Image, Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import React, { FC } from "react";

const NavBar: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <Header style={{ color: "white", alignContent: "center" }}>
        <Image
          src={"/app_image.png"}
          alt="Icono de la app"
          width={53}
          height={53}
        />
        <span style={{ fontSize: 40 }}>P</span>
        <span style={{ fontSize: 20 }}>okémon</span>
      </Header>
      <Content className="dark" style={{ padding: 25 }}>
        {children}
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default NavBar;
