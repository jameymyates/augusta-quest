import { FC, PropsWithChildren } from "react";
import Footer from "@/features/ui/footer";
import Header from "@/features/ui/header/header";

const PrimaryLayout: FC<Readonly<PropsWithChildren>> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
