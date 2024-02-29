import React from "react";
import Footer from "@/features/ui/footer";
import Header from "@/features/ui/header/header";

const PrimaryLayout: React.FC<Readonly<React.PropsWithChildren>> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;
