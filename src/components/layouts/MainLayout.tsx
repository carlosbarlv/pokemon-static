import NavBar from "@/components/ui/NavBar";
import { FC } from "react";

interface MainLayoutProps {
  title?: string;
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

export async function generateMetadata() {
  return {
    title: "33",
  };
}

const MainLayout: FC<MainLayoutProps> = ({
  title = "PokémonApp",
  children,
}) => {
  return <NavBar>{children}</NavBar>;
};

export default MainLayout;
