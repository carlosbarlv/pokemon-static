import NavBar from "@/components/ui/NavBar";
import { FC } from "react";

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({
  children,
}) => {
  return <NavBar>{children}</NavBar>;
};

export default MainLayout;
