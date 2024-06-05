'use client'
import { Affix, Image, Layout, theme } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import Link from "next/link";
import React, { FC } from "react";

const { useToken } = theme

const NavBar: FC<React.PropsWithChildren> = ({ children }) => {
  const { token } = useToken()

  return (
    <Layout>
      <Header
        style={{
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
        <Link href={"/"} style={{ color: token.colorPrimaryText, marginLeft: 10 }}>
          <span style={{ fontSize: 40 }}>P</span>
          <span style={{ fontSize: 20 }}>okémon</span>
        </Link>
      </Header>
      <Content
        className="dark"
        style={{ padding: 25, position: "relative", minHeight: "100vh" }}
      >
        {children}
      </Content>
      <Affix offsetBottom={0.01}>
        <Footer>Created by Carlos Gil 2024</Footer>
      </Affix>
    </Layout>
  );
};

export default NavBar;
