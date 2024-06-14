import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ThemeConfigProvider from "@/components/ui/ThemeConfigProvider";
import NavBar from "@/components/ui/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AntdRegistry>
          <ThemeConfigProvider>
            <NavBar>{children}</NavBar>
          </ThemeConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
