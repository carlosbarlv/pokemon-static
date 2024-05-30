"use client";
import { ConfigProvider, theme } from "antd";
import React from "react";

const ThemeConfigProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeConfigProvider;
